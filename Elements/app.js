
'use strict';

const $ = id => document.getElementById(id);
const categoryNames = Object.keys(DATA);

let current = [];
let currentPalette = [];

// 建立分類選項
function buildCategories() {
  $('categories').replaceChildren();

  for (const name of categoryNames) {
    const label = document.createElement('label');
    label.className = 'category';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = name;
    checkbox.checked = false;

    label.append(checkbox, document.createTextNode(name));
    $('categories').append(label);
  }

  syncMode();
}

// 完全隨機時停用分類選項
function syncMode() {
  const isRandom = $('allRandom').checked;

  document.querySelectorAll('#categories input').forEach(input => {
    input.disabled = isRandom;
  });

  $('selectAll').disabled = isRandom;
  $('clearAll').disabled = isRandom;
}

// 取得目前允許抽取的元素
function pool() {
  const chosen = $('allRandom').checked
    ? categoryNames
    : [...document.querySelectorAll('#categories input:checked')].map(x => x.value);

  return chosen.flatMap(category =>
    DATA[category].map(value => ({ category, value }))
  );
}

// 保證至少有一個可辨認的創作主體
const SUBJECT_CATEGORIES = new Set([
  '人物與種族',
  '物品與道具',
  '動物與植物',
  '場景與地點'
]);

// 避免整組題目都是天氣、抽象概念或裝飾材質
const LIMITED_CATEGORIES = new Set([
  '自然與天象',
  '氛圍與概念',
  '材質與圖案'
]);

const CATEGORY_LIMITS = {
  '自然與天象': 1,
  '氛圍與概念': 1,
  '材質與圖案': 1
};

// 顯示抽出的元素
function render() {
  $('results').replaceChildren();

  current.forEach(item => {
    const card = document.createElement('div');
    card.className = 'result';

    const category = document.createElement('small');
    category.textContent = item.category;

    const word = document.createElement('strong');
    word.textContent = item.value;

    card.append(category, word);
    $('results').append(card);
  });

  $('copyAll').disabled = !current.length;
}

// 顯示共用色盤模組產生的結果
function renderPalette(palette) {
  currentPalette = palette.colors;
  $('paletteInfo').textContent = `${palette.style} × ${palette.scheme}`;
  $('paletteColors').replaceChildren();

  palette.colors.forEach(hex => {
    const color = document.createElement('div');
    color.className = 'palette-color';

    const swatch = document.createElement('div');
    swatch.className = 'palette-swatch';
    swatch.style.backgroundColor = hex;

    const label = document.createElement('span');
    label.textContent = hex;

    color.append(swatch, label);
    $('paletteColors').append(color);
  });
}

// 重新抽取元素及色盤
function generate() {
  const available = pool();

  if (!available.length) {
    $('status').textContent = '請先勾選至少一個類別，或開啟完全隨機';
    return;
  }

  const count = Number($('count').value);
  const subjects = available.filter(item =>
    SUBJECT_CATEGORIES.has(item.category)
  );

  if (!subjects.length) {
    $('status').textContent = '請勾選至少一個主體類別（人物、道具、動植物或場景）';
    return;
  }

  const selected = [];
  const remaining = [...available];

  // 隨機抽取，並排除同一組內的重複詞語
  function addRandom(candidates) {
    if (!candidates.length) return false;

    const item = candidates[Math.floor(Math.random() * candidates.length)];
    selected.push(item);

    for (let i = remaining.length - 1; i >= 0; i--) {
      if (remaining[i].value === item.value) {
        remaining.splice(i, 1);
      }
    }

    return true;
  }

  // 第一項必須是明確主體
  addRandom(subjects);

  while (selected.length < count) {
    const eligible = remaining.filter(item =>
      !CATEGORY_LIMITS[item.category] ||
      selected.filter(x => x.category === item.category).length <
        CATEGORY_LIMITS[item.category]
    );

    if (!eligible.length) break;

    // 三個以上的題目，至少兩項不能是純背景、抽象或材質
    const drawableCount = selected.filter(
      x => !LIMITED_CATEGORIES.has(x.category)
    ).length;

    const slotsLeft = count - selected.length;
    const needDrawable =
      count >= 3 && drawableCount < 2 && slotsLeft <= 1;

    const candidates = needDrawable
      ? eligible.filter(x => !LIMITED_CATEGORIES.has(x.category))
      : eligible;

    if (!addRandom(candidates)) break;
  }

  // 打散結果順序
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }

  current = selected;
  render();

  // 勾選時使用 Palette/palette.js 的共用配色演算法
  currentPalette = [];
  $('paletteSection').hidden = !$('includePalette').checked;

  if ($('includePalette').checked) {
    const palette = PaletteEngine.makePalette('隨機', '隨機');
    renderPalette(palette);
  }

  $('status').textContent = selected.length === count
    ? '抽取完成！'
    : `符合條件的元素不足，本次抽出 ${selected.length} 項`;
}

// 複製文字，支援 Clipboard API 與備用方法
async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const area = document.createElement('textarea');
    area.value = value;
    area.style.position = 'fixed';
    area.style.opacity = '0';

    document.body.append(area);
    area.focus();
    area.select();

    const ok = document.execCommand('copy');
    area.remove();

    return ok;
  } catch {
    return false;
  }
}

// 切換完全隨機模式
$('allRandom').addEventListener('change', () => {
  syncMode();

  if (!$('allRandom').checked) {
    $('categoryPanel').open = true;
  }
});

// 分類全選與清除
$('selectAll').addEventListener('click', () => {
  document.querySelectorAll('#categories input').forEach(x => {
    x.checked = true;
  });
});

$('clearAll').addEventListener('click', () => {
  document.querySelectorAll('#categories input').forEach(x => {
    x.checked = false;
  });
});

// 重新抽題
$('generate').addEventListener('click', generate);

// 複製元素及色盤
$('copyAll').addEventListener('click', async () => {
  const text = [
    current.map(x => x.value).join(' × '),
    ...(currentPalette.length
      ? ['色盤：' + currentPalette.join(', ')]
      : [])
  ].join('\n');

  const success = await copyText(text);

  $('status').textContent = success
    ? '已複製全部結果！'
    : '複製失敗，請手動選取文字';
});

// 初始化
buildCategories();
generate();
