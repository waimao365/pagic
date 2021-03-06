import throttle from 'https://cdn.pagic.org/lodash@4.17.20/esnext/throttle.js';
import { classnames } from './_utils.js';
const SOCIAL_MAP = {
    github: {
        icon: 'czs-github-logo',
        linkPrefix: 'https://github.com/',
    },
    email: {
        icon: 'czs-message-l',
        linkPrefix: 'mailto:',
    },
    twitter: {
        icon: 'czs-twitter',
        linkPrefix: 'https://twitter.com/',
    },
    v2ex: {
        icon: 'czs-v2ex',
        linkPrefix: 'https://v2ex.com/member/',
    },
    zhihu: {
        icon: 'czs-zhihu',
        linkPrefix: 'https://www.zhihu.com/people/',
    },
};
const Aside = ({ config, isDark, setIsDark, outputPath, toc }) => {
    var _a, _b, _c;
    React.useEffect(() => {
        if (window.Deno) {
            return;
        }
        const scrollHandler = (e) => {
            let anchorPositionMap = new Map();
            // @ts-ignore
            for (let a of document.querySelectorAll('.toc a')) {
                // @ts-ignore
                const bounding = document.getElementById(a.hash.slice(1)).getBoundingClientRect();
                const belowTop = bounding.y > 64;
                // @ts-ignore
                const aboveBottom = bounding.y + bounding.height + 16 <= window.innerHeight;
                if ((belowTop && aboveBottom) || (!belowTop && !aboveBottom)) {
                    anchorPositionMap.set(a, 'inViewport');
                }
                else if (belowTop && !aboveBottom) {
                    anchorPositionMap.set(a, 'belowViewport');
                }
                else if (!belowTop && aboveBottom) {
                    anchorPositionMap.set(a, 'aboveViewport');
                }
            }
            let activeAnchor = null;
            for (let [a, position] of anchorPositionMap) {
                if (position === 'aboveViewport') {
                    activeAnchor = a;
                }
                else if (position === 'inViewport') {
                    if (activeAnchor === null) {
                        activeAnchor = a;
                        break;
                    }
                }
            }
            if (activeAnchor) {
                // @ts-ignore
                document.querySelectorAll('.toc a.active').forEach((node) => node.classList.remove('active'));
                activeAnchor.classList.add('active');
            }
            // @ts-ignore
            const tocElement = document.querySelector('.toc');
            if (tocElement) {
                if (tocElement.offsetTop !== 0) {
                    // @ts-ignore
                    window.__tocElementOffsetTop__ = tocElement.offsetTop;
                }
                // @ts-ignore
                if (window.__tocElementOffsetTop__ >= window.scrollY) {
                    tocElement.classList.remove('toc_fixed');
                }
                else {
                    tocElement.classList.add('toc_fixed');
                }
            }
        };
        window.addEventListener('scroll', throttle(scrollHandler, 100));
        scrollHandler();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { className: "czs-menu-l show_on_mobile aside_button_open", href: "#", style: { backgroundImage: `url("${config.root}assets/czs-menu-l.svg")` }, onClick: (e) => {
                e.preventDefault();
                // @ts-ignore
                document.documentElement.classList.add('show_aside');
            } }),
        React.createElement("a", { className: "show_on_mobile aside_button_text", href: config.root }, config.title),
        React.createElement("aside", { className: "hide_on_mobile" },
            React.createElement("div", { className: "aside_card" },
                React.createElement("a", { className: "czs-menu-l show_on_mobile aside_button_close", href: "#", style: { backgroundImage: `url("${config.root}assets/czs-close-l.svg")` }, onClick: (e) => {
                        e.preventDefault();
                        // @ts-ignore
                        document.documentElement.classList.remove('show_aside');
                    } }),
                React.createElement("h1", null,
                    React.createElement("a", { href: config.root, onClick: () => {
                            // @ts-ignore
                            document.documentElement.classList.remove('show_aside');
                        } }, config.title)),
                React.createElement("p", { className: "description" }, config.description),
                React.createElement("ul", { className: "social list_style_none" },
                    Object.entries((_b = (_a = config.blog) === null || _a === void 0 ? void 0 : _a.social) !== null && _b !== void 0 ? _b : {}).map(([key, user]) => (React.createElement("li", { key: key, className: "flex_center" },
                        React.createElement("a", { className: SOCIAL_MAP[key].icon, href: `${SOCIAL_MAP[key].linkPrefix}${user}`, target: "_blank", style: { backgroundImage: `url("${config.root}assets/${SOCIAL_MAP[key].icon}.svg")` }, onClick: () => {
                                // @ts-ignore
                                document.documentElement.classList.remove('show_aside');
                            } })))),
                    React.createElement("li", { style: { flexGrow: 1 } }),
                    React.createElement("li", { onClick: () => {
                            setIsDark(!isDark);
                            // @ts-ignore
                            document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
                            // @ts-ignore
                            document.documentElement.classList.remove('show_aside');
                        }, className: "toggle_dark flex_center" },
                        React.createElement("span", { className: "czs-sun", style: { backgroundImage: `url("${config.root}assets/czs-sun.svg")` } }),
                        React.createElement("span", { className: "czs-sun-l", style: { backgroundImage: `url("${config.root}assets/czs-sun-l.svg")` } }),
                        React.createElement("span", { className: "czs-moon", style: { backgroundImage: `url("${config.root}assets/czs-moon.svg")` } }),
                        React.createElement("span", { className: "czs-moon-l", style: { backgroundImage: `url("${config.root}assets/czs-moon-l.svg")` } }))),
                React.createElement("nav", null,
                    React.createElement("ul", { className: "menu list_style_none" }, (_c = config.nav) === null || _c === void 0 ? void 0 : _c.map(({ text, link, icon, target }) => (React.createElement("li", { key: link },
                        React.createElement("a", { className: classnames('flex_center', {
                                active: outputPath === 'index.html' ? link === '/' : link !== '/' && `/${outputPath}`.startsWith(link),
                            }), href: link, target: target, onClick: () => {
                                // @ts-ignore
                                document.documentElement.classList.remove('show_aside');
                            } },
                            React.createElement("span", { className: icon, style: { backgroundImage: `url("${config.root}assets/${icon}.svg")` } }),
                            text))))))),
            toc)));
};
export default Aside;
