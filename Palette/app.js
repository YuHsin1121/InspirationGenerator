
'use strict';

const {
    STYLES: styleOptions,
    SCHEMES: schemeOptions,
    ROLES: colorRoles
} = PaletteEngine;

const $ = id => document.getElementById(id);

const styleEl = $('style');
const schemeEl = $('scheme');

let currentColors = [];

// 建立風格與配色關係選項
for (const [el, values] of [
    [styleEl, ['隨機', ...styleOptions]],
    [schemeEl, ['隨機', ...schemeOptions]]
]) {
    for (const value of values) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        el.appendChild(option);
    }
}

// 更新狀態訊息
function setStatus(message) {
    $('status').textContent = message;
}

// 複製文字
async function copyText(value, message) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(value);
        } else {
            const area = document.createElement('textarea');
            area.value = value;
            area.style.position = 'fixed';
            area.style.opacity = '0';

            document.body.appendChild(area);
            area.focus();
            area.select();

            try {
                if (!document.execCommand('copy')) {
                    throw new Error('無法複製');
                }
            } finally {
                area.remove();
            }
        }

        setStatus(message);
    } catch {
        setStatus('複製失敗，請手動選取 HEX 色碼');
    }
}

// 顯示色盤
function renderPalette(colors) {
    const palette = $('palette');
    palette.replaceChildren();

    colors.forEach((hex, i) => {
        const item = document.createElement('div');
        item.className = 'color-item';

        const swatch = document.createElement('button');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = hex;
        swatch.title = `複製 ${hex}`;
        swatch.setAttribute('aria-label', `複製 ${hex}`);

        swatch.addEventListener('click', () => {
            copyText(hex, `已複製：${hex}`);
        });

        const role = document.createElement('div');
        role.className = 'role';
        role.textContent = colorRoles[i];

        const label = document.createElement('button');
        label.className = 'hex';
        label.textContent = hex;

        label.addEventListener('click', () => {
            copyText(hex, `已複製：${hex}`);
        });

        item.append(swatch, role, label);
        palette.appendChild(item);
    });
}

// 產生色盤
function generate() {
    let result;

    if ($('fullyRandom').checked) {
        result = PaletteEngine.makeRandomPalette();
    } else {
        result = PaletteEngine.makePalette(
            styleEl.value,
            schemeEl.value
        );
    }

    currentColors = result.colors;

    $('info').textContent =
        `${result.style}  ×  ${result.scheme}`;

    renderPalette(result.colors);

    setStatus('點擊色票或 HEX 可複製色碼');
}

// 抽取色盤
$('generate').addEventListener('click', generate);

// 複製整組 HEX
$('copyAll').addEventListener('click', () => {
    if (!currentColors.length) return;

    copyText(
        currentColors.join(', '),
        '已複製整組 HEX 色碼！'
    );
});

// 頁面載入時自動產生色盤
generate();
