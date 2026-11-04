'use strict';

const {
    STYLES: styleOptions,
    SCHEMES: schemeOptions,
    ROLES: colorRoles
} = PaletteEngine;

const styleEl = document.getElementById('style');
const schemeEl = document.getElementById('scheme');

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

let currentColors = [];

function setStatus(message) {
    document.getElementById('status').textContent = message;
}

async function copyText(value, message) {
    try {
        // GitHub Pages 的 HTTPS 環境可使用 Clipboard API
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

            if (!document.execCommand('copy')) {
                throw new Error('無法複製');
            }

            area.remove();
        }

        setStatus(message);
    } catch (e) {
        setStatus('複製失敗，請手動選取 HEX 色碼');
    }
}

function generate() {
    let result;

    if (document.getElementById('fullyRandom').checked) {
        result = PaletteEngine.makeRandomPalette();
    } else {
        result = PaletteEngine.makePalette(
            styleEl.value,
            schemeEl.value
        );
    }

    currentColors = result.colors;

    document.getElementById('info').textContent =
        `${result.style}  ×  ${result.scheme}`;

    const palette = document.getElementById('palette');
    palette.replaceChildren();

    result.colors.forEach((hex, i) => {
        const item = document.createElement('div');
        item.className = 'color-item';

        const swatch = document.createElement('button');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = hex;
        swatch.title = `複製 ${hex}`;
        swatch.setAttribute('aria-label', `複製 ${hex}`);

        swatch.addEventListener('click', () =>
            copyText(hex, `已複製：${hex}`)
        );

        const role = document.createElement('div');
        role.className = 'role';
        role.textContent = colorRoles[i];

        const label = document.createElement('button');
        label.className = 'hex';
        label.textContent = hex;

        label.addEventListener('click', () =>
            copyText(hex, `已複製：${hex}`)
        );

        item.append(swatch, role, label);
        palette.appendChild(item);
    });

    setStatus('點擊色票或 HEX 可複製色碼');
}

document.getElementById('generate')
    .addEventListener('click', generate);

document.getElementById('copyAll')
    .addEventListener('click', () =>
        copyText(
            currentColors.join(', '),
            '已複製整組 HEX 色碼！'
        )
    );

// 頁面載入時自動產生色盤
generate();
