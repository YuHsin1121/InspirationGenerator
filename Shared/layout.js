
'use strict';

// 全站導覽設定
const NAV_GROUPS = [
    {
        label: '🎨 創作研究部',
        items: [
            { label: '🎨 色票撈撈所', path: 'Palette/index.html', page: 'palette' },
            { label: '🎲 靈感亂燉鍋', path: 'Elements/index.html', page: 'elements' },
            { label: '👗 服裝亂配部', path: 'Outfit/index.html', page: 'outfit' }
        ]
    },
    {
        label: '🍙 生活決策部',
        items: [
            { label: '🍚 飯飯由命局', path: 'Food/index.html', page: 'food' },
            { label: '🧋 飲料續命所', path: 'Drink/index.html', page: 'drink' }
        ]
    },
    {
        label: '🔮 神祕研究部',
        items: [
            { label: '⛩️ 水母神社', path: 'Omikuji/index.html', page: 'omikuji' }
        ]
    }
];

(() => {
    const page = document.body.dataset.page || 'home';
    const prefix = page === 'home' ? './' : '../';

    const header = document.createElement('header');
    header.className = 'site-header';

    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', '主要導覽');

    // 品牌與首頁連結
    const brand = document.createElement('a');
    brand.className = 'site-brand';
    brand.href = `${prefix}index.html`;
    brand.textContent = '🪼 Jellyfish Lab';

    const links = document.createElement('div');
    links.className = 'site-links';

    // 首頁
    const home = document.createElement('a');
    home.href = `${prefix}index.html`;
    home.textContent = '首頁';

    if (page === 'home') {
        home.setAttribute('aria-current', 'page');
    }

    links.append(home);

    // 分類下拉選單
    NAV_GROUPS.forEach(group => {
        const details = document.createElement('details');
        details.className = 'nav-group';

        const summary = document.createElement('summary');
        summary.textContent = group.label;

        const menu = document.createElement('div');
        menu.className = 'nav-menu';

        group.items.forEach(item => {
            const link = document.createElement('a');
            link.href = `${prefix}${item.path}`;
            link.textContent = item.label;

            if (item.page === page) {
                link.setAttribute('aria-current', 'page');
                details.classList.add('active');
            }

            menu.append(link);
        });

        details.append(summary, menu);
        details.addEventListener('toggle', () => {
            if (details.open) {
                links.querySelectorAll('.nav-group[open]').forEach(other => {
                    if (other !== details) {
                        other.open = false;
                    }
                });
            }
        });
        links.append(details);
    });

    nav.append(brand, links);
    header.append(nav);

    document.body.prepend(header);
})();
