
'use strict';

const $ = id => document.getElementById(id);
const categoryNames = Object.keys(DATA);

let current = [];
let currentPalette = [];

// 隨機打亂陣列
function shuffle(items) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// 從陣列中抽取指定數量的不重複元素
function pickRandom(items, count) {
    return shuffle(items).slice(0, count);
}

// 取得目前抽取模式
function getMode() {
    return document.querySelector(
        'input[name="mode"]:checked'
    ).value;
}

// 建立分類數量輸入框
function buildCategories() {
    const container = $('categories');
    container.replaceChildren();

    categoryNames.forEach((name, index) => {
        const label = document.createElement('label');
        label.className = 'category';

        const title = document.createElement('span');
        title.className = 'category-name';
        title.textContent = name;

        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = String(new Set(DATA[name]).size);
        input.step = '1';
        input.value = '0';
        input.id = `categoryCount${index}`;
        input.dataset.category = name;
        input.setAttribute('aria-label', `${name}抽取數量`);

        input.addEventListener('input', updateCustomTotal);

        label.append(title, input);
        container.append(label);
    });

    updateCustomTotal();
}

// 取得各分類設定
function getCustomCounts() {
    return [...document.querySelectorAll('#categories input')].map(input => ({
        category: input.dataset.category,
        value: input.value,
        count: Number(input.value)
    }));
}

// 更新自訂抽取總數
function updateCustomTotal() {
    const settings = getCustomCounts();

    const valid = settings.every(item =>
        item.value.trim() !== '' &&
        Number.isSafeInteger(item.count) &&
        item.count >= 0
    );

    if (!valid) {
        $('customTotal').textContent = '請輸入有效數量';
        return;
    }

    const total = settings.reduce(
        (sum, item) => sum + item.count,
        0
    );

    $('customTotal').textContent = `${total} 個`;
}

// 切換抽取模式
function syncMode() {
    const isRandom = getMode() === 'random';

    $('randomSettings').hidden = !isRandom;
    $('customSettings').hidden = isRandom;
}

// 建立全部元素池
function getAllItems() {
    const items = [];
    const seen = new Set();

    categoryNames.forEach(category => {
        DATA[category].forEach(value => {
            // 不讓相同詞語在同一次抽取中重複
            if (seen.has(value)) return;

            seen.add(value);
            items.push({ category, value });
        });
    });

    return items;
}

// 完全隨機抽取
function generateRandom() {
    const count = Number($('randomCount').value);
    const available = getAllItems();

    if (!Number.isSafeInteger(count) || count < 1) {
        throw new Error('請選擇有效的抽取數量');
    }

    if (count > available.length) {
        throw new Error('詞庫元素不足，無法抽取指定數量');
    }

    return pickRandom(available, count);
}

// 自訂抽取
function generateCustom() {
    const settings = getCustomCounts();

    // 檢查數量設定
    for (const item of settings) {
        if (
            item.value.trim() === '' ||
            !Number.isSafeInteger(item.count) ||
            item.count < 0
        ) {
            throw new Error('請輸入有效的非負整數');
        }

        const availableCount = new Set(
            DATA[item.category]
        ).size;

        if (item.count > availableCount) {
            throw new Error(
                `${item.category}只有 ${availableCount} 個不同元素`
            );
        }
    }

    const total = settings.reduce(
        (sum, item) => sum + item.count,
        0
    );

    if (total === 0) {
        throw new Error('請至少設定一個分類的抽取數量');
    }

    const activeSettings = settings.filter(
        item => item.count > 0
    );

    // 不同分類可能包含相同詞語，嘗試不同抽取順序
    for (let attempt = 0; attempt < 200; attempt++) {
        const selected = [];
        const used = new Set();

        const order = shuffle(activeSettings);

        let success = true;

        for (const item of order) {
            const available = [...new Set(DATA[item.category])]
                .filter(value => !used.has(value));

            if (available.length < item.count) {
                success = false;
                break;
            }

            const picked = pickRandom(
                available,
                item.count
            );

            picked.forEach(value => {
                selected.push({
                    category: item.category,
                    value
                });

                used.add(value);
            });
        }

        if (success) {
            return shuffle(selected);
        }
    }

    throw new Error(
        '不同分類之間有重複元素，無法滿足目前數量設定，請調整抽取數量'
    );
}

// 顯示抽取結果
function renderResults() {
    const container = $('results');
    container.replaceChildren();

    current.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result';

        const category = document.createElement('small');
        category.textContent = item.category;

        const word = document.createElement('strong');
        word.textContent = item.value;

        card.append(category, word);
        container.append(card);
    });

    $('copyAll').disabled = current.length === 0;
}

// 顯示色盤
function renderPalette(palette) {
    currentPalette = palette.colors;

    $('paletteInfo').textContent =
        `${palette.style} × ${palette.scheme}`;

    const container = $('paletteColors');
    container.replaceChildren();

    palette.colors.forEach(hex => {
        const color = document.createElement('div');
        color.className = 'palette-color';

        const swatch = document.createElement('div');
        swatch.className = 'palette-swatch';
        swatch.style.backgroundColor = hex;

        const label = document.createElement('span');
        label.textContent = hex;

        color.append(swatch, label);
        container.append(color);
    });
}

// 重新抽取元素及色盤
function generate() {
    let selected;

    try {
        selected = getMode() === 'random'
            ? generateRandom()
            : generateCustom();
    } catch (error) {
        $('status').textContent = error.message;
        return;
    }

    current = selected;
    renderResults();

    // 清除上一組色盤
    currentPalette = [];
    $('paletteSection').hidden = true;
    $('paletteColors').replaceChildren();

    if ($('includePalette').checked) {
        if (!window.PaletteEngine) {
            $('status').textContent =
                '元素抽取完成，但色盤模組載入失敗';
            return;
        }

        const palette = PaletteEngine.makePalette(
            '隨機',
            '隨機'
        );

        renderPalette(palette);
        $('paletteSection').hidden = false;
    }

    $('status').textContent =
        `抽取完成！共 ${current.length} 個元素`;
}

// 複製文字
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

        try {
            return document.execCommand('copy');
        } finally {
            area.remove();
        }
    } catch {
        return false;
    }
}

// 切換抽取模式
document.querySelectorAll('input[name="mode"]').forEach(input => {
    input.addEventListener('change', syncMode);
});

// 清除自訂分類數量
$('clearAll').addEventListener('click', () => {
    document.querySelectorAll('#categories input').forEach(input => {
        input.value = '0';
    });

    updateCustomTotal();
});

// 重新抽題
$('generate').addEventListener('click', generate);

// 複製全部結果
$('copyAll').addEventListener('click', async () => {
    if (!current.length) return;

    const lines = [
        current.map(item => item.value).join(' × ')
    ];

    if (currentPalette.length) {
        lines.push(
            '色盤：' + currentPalette.join(', ')
        );
    }

    const success = await copyText(lines.join('\n'));

    $('status').textContent = success
        ? '已複製全部結果！'
        : '複製失敗，請手動選取文字';
});

// 初始化
buildCategories();
syncMode();
generate();
