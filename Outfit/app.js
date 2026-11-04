'use strict';

const $ = id => document.getElementById(id);
let currentOutfit = null;

const PART_LABELS = {
    onePiece: '連身服',
    top: '上身',
    bottom: '下身',
    outerwear: '外套',
    shoes: '鞋子',
    accessory: '配件',
    detail: '服裝細節'
};

const PREFERENCE_LABELS = {
    gender: {
        feminine: '偏女性',
        masculine: '偏男性'
    },
    season: {
        spring: '春季',
        summer: '夏季',
        autumn: '秋季',
        winter: '冬季'
    },
    occasion: {
        casual: '日常休閒',
        school: '上學',
        work: '工作',
        formal: '正式場合',
        party: '派對聚會',
        date: '約會',
        outdoor: '戶外活動',
        travel: '旅行',
        stage: '舞台表演',
        festival: '節慶活動'
    }
};

function randomItem(items) {
    return items.length
        ? items[Math.floor(Math.random() * items.length)]
        : null;
}

function shuffle(items) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function getPreferences() {
    return {
        gender: $('genderMode').value,
        season: $('seasonMode').value,
        occasion: $('occasionMode').value
    };
}

// 計算服飾符合多少項偏好；偏好只影響抽取機率，不作為硬性限制
function preferenceScore(item, preferences) {
    let score = 0;

    if (preferences.gender !== 'any' && item.genders.includes(preferences.gender)) {
        score++;
    }
    if (preferences.season !== 'any' && item.seasons.includes(preferences.season)) {
        score++;
    }
    if (preferences.occasion !== 'any' && item.occasions.includes(preferences.occasion)) {
        score++;
    }

    return score;
}

function pickByPreferences(items, preferences) {
    if (!items.length) return null;

    const hasPreference = Object.values(preferences).some(value => value !== 'any');
    if (!hasPreference || Math.random() >= 0.75) {
        return randomItem(items);
    }

    const highestScore = Math.max(
        ...items.map(item => preferenceScore(item, preferences))
    );
    const preferredItems = items.filter(
        item => preferenceScore(item, preferences) === highestScore
    );

    return randomItem(preferredItems);
}

function getItems(part, options = {}) {
    let items = OUTFIT_CATALOG.items.filter(item => item.part === part);

    if (options.style) {
        items = items.filter(item => item.styles.includes(options.style));
    }

    return items;
}

function addItem(outfit, item) {
    if (!item) return;

    outfit.items.push({
        category: PART_LABELS[item.part],
        name: item.name,
        part: item.part,
        styles: [...item.styles]
    });
}

function addRandomPart(outfit, part, preferences, style = null) {
    const candidates = getItems(part, { style });
    addItem(outfit, pickByPreferences(candidates, preferences));
}

function addAccessories(outfit, count, preferences, style = null) {
    const candidates = shuffle(getItems('accessory', { style }));
    const selected = [];

    while (selected.length < count && candidates.length) {
        const item = pickByPreferences(candidates, preferences);
        if (!item) break;

        selected.push(item);
        candidates.splice(candidates.indexOf(item), 1);
    }

    selected.forEach(item => addItem(outfit, item));
}

// 套裝模式：先決定風格，再從該風格的服飾中抽取各部位
function generateSet(preferences) {
    const selectedStyle = $('styleMode').value === 'random'
        ? randomItem(OUTFIT_CATALOG.styles)
        : $('styleMode').value;

    const outfit = {
        name: `${selectedStyle}風搭配`,
        style: selectedStyle,
        mode: '套裝模式',
        preferences,
        items: []
    };

    const onePieceItems = getItems('onePiece', { style: selectedStyle });
    const useOnePiece = onePieceItems.length > 0 && Math.random() < 0.3;

    if (useOnePiece) {
        addRandomPart(outfit, 'onePiece', preferences, selectedStyle);
    } else {
        addRandomPart(outfit, 'top', preferences, selectedStyle);
        addRandomPart(outfit, 'bottom', preferences, selectedStyle);
    }

    addRandomPart(outfit, 'shoes', preferences, selectedStyle);

    // 外套、配件與細節依同一風格抽取，避免破壞整體搭配
    if (Math.random() < 0.55) {
        addRandomPart(outfit, 'outerwear', preferences, selectedStyle);
    }

    const accessoryCount = 1 + Math.floor(Math.random() * 2);
    addAccessories(outfit, accessoryCount, preferences, selectedStyle);
    addRandomPart(outfit, 'detail', preferences, selectedStyle);

    return outfit;
}

// 組裝模式：只依部位抽取，不限制風格
function generateMix(preferences) {
    const outfit = {
        name: '隨機混搭',
        style: '自由混搭',
        mode: '組裝模式',
        preferences,
        items: []
    };

    // 先決定服裝結構，連身服不會與上下身同時出現
    const onePieceItems = getItems('onePiece');
    const useOnePiece = onePieceItems.length > 0 && Math.random() < 0.3;

    if (useOnePiece) {
        addRandomPart(outfit, 'onePiece', preferences);
    } else {
        addRandomPart(outfit, 'top', preferences);
        addRandomPart(outfit, 'bottom', preferences);
    }

    if ($('includeOuterwear').checked) {
        addRandomPart(outfit, 'outerwear', preferences);
    }

    addRandomPart(outfit, 'shoes', preferences);
    addAccessories(outfit, Number($('accessoryCount').value), preferences);

    if ($('includeDetail').checked) {
        addRandomPart(outfit, 'detail', preferences);
    }

    return outfit;
}

function getPreferenceSummary(preferences) {
    const labels = [];

    Object.entries(preferences).forEach(([key, value]) => {
        if (value !== 'any' && PREFERENCE_LABELS[key][value]) {
            labels.push(PREFERENCE_LABELS[key][value]);
        }
    });

    return labels.length ? `偏好：${labels.join('、')}` : '未指定其他偏好';
}

function renderOutfit(outfit) {
    const container = $('outfitResult');
    container.replaceChildren();

    const intro = document.createElement('div');
    intro.className = 'outfit-intro';

    const name = document.createElement('strong');
    name.textContent = outfit.name;

    const style = document.createElement('span');
    style.textContent = outfit.mode === '套裝模式'
        ? `${outfit.style}風格`
        : '不限制風格';

    intro.append(name, style);
    container.append(intro);

    const grid = document.createElement('div');
    grid.className = 'outfit-items';

    outfit.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'outfit-item';

        const category = document.createElement('small');
        category.textContent = item.category;

        const value = document.createElement('strong');
        value.textContent = item.name;

        card.append(category, value);
        grid.append(card);
    });

    container.append(grid);
    $('resultTitle').textContent = '今日穿搭';
    $('resultSubtitle').textContent = `${outfit.mode}・${outfit.items.length} 個搭配項目・${getPreferenceSummary(outfit.preferences)}`;
    $('copyResult').disabled = false;
}

function generate() {
    const mode = document.querySelector('input[name="outfitMode"]:checked').value;
    const preferences = getPreferences();

    currentOutfit = mode === 'set'
        ? generateSet(preferences)
        : generateMix(preferences);

    renderOutfit(currentOutfit);
    $('status').textContent = '搭配完成！不滿意就再抽一次 ww';
}

async function copyOutfit() {
    if (!currentOutfit) return;

    const lines = [
        `${currentOutfit.name}（${currentOutfit.mode}）`,
        `偏好：${getPreferenceSummary(currentOutfit.preferences)}`,
        ...currentOutfit.items.map(item => `${item.category}：${item.name}`)
    ];
    const text = lines.join('\n');

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.append(textarea);
            textarea.select();
            const copied = document.execCommand('copy');
            textarea.remove();
            if (!copied) throw new Error('copy failed');
        }
        $('status').textContent = '已複製穿搭！';
    } catch {
        $('status').textContent = '複製失敗，請手動複製結果';
    }
}

function populateStyles() {
    const select = $('styleMode');

    OUTFIT_CATALOG.styles.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style;
        select.append(option);
    });
}

function syncMode() {
    const isSet = document.querySelector('input[name="outfitMode"]:checked').value === 'set';

    $('styleSettings').hidden = !isSet;
    $('mixSettings').hidden = isSet;
    $('modeDescription').textContent = isSet
        ? '先選一種風格，再從該風格的服飾中隨機搭配'
        : '依照部位隨機抽取，不限制服飾風格';
}

document.querySelectorAll('input[name="outfitMode"]').forEach(input => {
    input.addEventListener('change', syncMode);
});
$('generate').addEventListener('click', generate);
$('copyResult').addEventListener('click', copyOutfit);

populateStyles();
syncMode();
generate();
