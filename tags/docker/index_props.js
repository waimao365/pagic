import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "tags/docker/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/docker/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "docker",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/n1终极玩法Armbian-5.77安装docker宝塔openwrt和Home Assistant.md",
                "title": "n1终极玩法Armbian-5.77安装docker宝塔openwrt和HomeAssistant",
                "link": "posts/n1终极玩法Armbian-5.77安装docker宝塔openwrt和Home Assistant.html",
                "date": "2020-06-02T15:55:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "N1",
                    "docker",
                    "宝塔",
                    "openwrt",
                    "Home Assistant"
                ],
                "tags": [
                    "N1",
                    "docker",
                    "宝塔",
                    "openwrt",
                    "Home Assistant"
                ],
                "excerpt": "https://www.right.com.cn/forum/thread-510423-1-1.html 下载Armbian-5.77写入U盘 替换低负载的dtb meson-gxl-s905d-phicomm-n1-xiangsm.dtb 开启bbr 在/etc/sysctl.conf末尾添加下面两行: net.core.default_qdisc=fq net.ipv..."
            },
            {
                "pagePath": "posts/N1安装omv后安装docker+transmission+lnmp搭建网站 .md",
                "title": "N1安装omv后安装docker+transmission+lnmp搭建网站",
                "link": "posts/N1安装omv后安装docker+transmission+lnmp搭建网站 .html",
                "date": "2019-12-08T18:31:42.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "斐讯N1"
                ],
                "tags": [
                    "斐讯N1",
                    "omv",
                    "docker",
                    "lnmp"
                ],
                "excerpt": "N1安装好omv后， 进入系统，常规设置，修改web管理员密码，需要安装的lnmp搭建网站的话，还需要修改端口，自动登出时间可以设置为1天。 进入磁盘，文件管理，挂着ext4格式的U盘或者硬盘（其他格式的不能修改权限比如777 755等）..."
            },
            {
                "pagePath": "posts/斐讯N1 docker安装homeassistant  配置斐讯dc1智能插座.md",
                "title": "斐讯N1 docker安装homeassistant  配置斐讯dc1智能插座",
                "link": "posts/斐讯N1 docker安装homeassistant  配置斐讯dc1智能插座.html",
                "date": "2019-09-16T12:52:42.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "斐讯N1"
                ],
                "tags": [
                    "斐讯N1",
                    "homeassistant",
                    "docker",
                    "斐讯DC1"
                ],
                "excerpt": "斐讯N1 docker安装homeassistant 配置斐讯dc1智能插座 默认代码 docker run -d --restart=always --name=\"home-assistant\" -e TZ=Asia/Shanghai -v /var/lib/docker/homeassistant:/config -p 8123:8123 -v /etc/localtime:/et...",
                "cover": "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pLmxvbGkubmV0LzIwMTkvMDkvMTYvNzFxSWZnT2N0WFFFckI1LnBuZw?x-oss-process=image/format,png"
            }
        ],
        "categories": [
            {
                "name": "hexo",
                "count": 6
            },
            {
                "name": "linux",
                "count": 5
            },
            {
                "name": "安卓手机",
                "count": 5
            },
            {
                "name": "网站",
                "count": 4
            },
            {
                "name": "hugo",
                "count": 3
            },
            {
                "name": "斐讯N1",
                "count": 3
            },
            {
                "name": "电脑软件",
                "count": 3
            },
            {
                "name": "黑苹果",
                "count": 3
            },
            {
                "name": "cheome插件",
                "count": 2
            },
            {
                "name": "Github",
                "count": 2
            },
            {
                "name": "LG V30",
                "count": 2
            },
            {
                "name": "root",
                "count": 2
            },
            {
                "name": "ubuntu",
                "count": 2
            },
            {
                "name": "刷机",
                "count": 2
            },
            {
                "name": "域名",
                "count": 2
            },
            {
                "name": "电脑系统",
                "count": 2
            },
            {
                "name": "APK Downloader",
                "count": 1
            },
            {
                "name": "archlinux",
                "count": 1
            },
            {
                "name": "Blog",
                "count": 1
            },
            {
                "name": "chrome",
                "count": 1
            },
            {
                "name": "cloudflare",
                "count": 1
            },
            {
                "name": "docker",
                "count": 1
            },
            {
                "name": "edxposed",
                "count": 1
            },
            {
                "name": "github",
                "count": 1
            },
            {
                "name": "Hello World",
                "count": 1
            },
            {
                "name": "Home Assistant",
                "count": 1
            },
            {
                "name": "Jsdelivr",
                "count": 1
            },
            {
                "name": "k2p",
                "count": 1
            },
            {
                "name": "lnmp",
                "count": 1
            },
            {
                "name": "mac",
                "count": 1
            },
            {
                "name": "mysql",
                "count": 1
            },
            {
                "name": "N1",
                "count": 1
            },
            {
                "name": "nginx",
                "count": 1
            },
            {
                "name": "omv",
                "count": 1
            },
            {
                "name": "openwrt",
                "count": 1
            },
            {
                "name": "PE",
                "count": 1
            },
            {
                "name": "PicGo",
                "count": 1
            },
            {
                "name": "recovery",
                "count": 1
            },
            {
                "name": "Tampermonkey",
                "count": 1
            },
            {
                "name": "twrp",
                "count": 1
            },
            {
                "name": "typecho",
                "count": 1
            },
            {
                "name": "VScode",
                "count": 1
            },
            {
                "name": "wine",
                "count": 1
            },
            {
                "name": "xposed",
                "count": 1
            },
            {
                "name": "三星健康",
                "count": 1
            },
            {
                "name": "博客",
                "count": 1
            },
            {
                "name": "安卓软件",
                "count": 1
            },
            {
                "name": "宝塔",
                "count": 1
            },
            {
                "name": "支付宝运动",
                "count": 1
            },
            {
                "name": "百度网盘下载",
                "count": 1
            },
            {
                "name": "路由",
                "count": 1
            },
            {
                "name": "驱动",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "hexo",
                "count": 6
            },
            {
                "name": "linux",
                "count": 5
            },
            {
                "name": "安卓手机",
                "count": 5
            },
            {
                "name": "网站",
                "count": 5
            },
            {
                "name": "docker",
                "count": 3
            },
            {
                "name": "hugo",
                "count": 3
            },
            {
                "name": "lnmp",
                "count": 3
            },
            {
                "name": "斐讯N1",
                "count": 3
            },
            {
                "name": "电脑软件",
                "count": 3
            },
            {
                "name": "黑苹果",
                "count": 3
            },
            {
                "name": "cheome插件",
                "count": 2
            },
            {
                "name": "edxposed",
                "count": 2
            },
            {
                "name": "Github",
                "count": 2
            },
            {
                "name": "LG V30",
                "count": 2
            },
            {
                "name": "omv",
                "count": 2
            },
            {
                "name": "root",
                "count": 2
            },
            {
                "name": "ubuntu",
                "count": 2
            },
            {
                "name": "刷机",
                "count": 2
            },
            {
                "name": "博客",
                "count": 2
            },
            {
                "name": "域名",
                "count": 2
            },
            {
                "name": "电脑系统",
                "count": 2
            },
            {
                "name": "APK Downloader",
                "count": 1
            },
            {
                "name": "archlinux",
                "count": 1
            },
            {
                "name": "chrome",
                "count": 1
            },
            {
                "name": "cloudflare",
                "count": 1
            },
            {
                "name": "Deno",
                "count": 1
            },
            {
                "name": "First",
                "count": 1
            },
            {
                "name": "github",
                "count": 1
            },
            {
                "name": "hexo备份还原",
                "count": 1
            },
            {
                "name": "Home Assistant",
                "count": 1
            },
            {
                "name": "homeassistant",
                "count": 1
            },
            {
                "name": "it软件",
                "count": 1
            },
            {
                "name": "Jsdelivr",
                "count": 1
            },
            {
                "name": "k2p",
                "count": 1
            },
            {
                "name": "Mac",
                "count": 1
            },
            {
                "name": "mac",
                "count": 1
            },
            {
                "name": "magisk",
                "count": 1
            },
            {
                "name": "MarkDown",
                "count": 1
            },
            {
                "name": "mysql",
                "count": 1
            },
            {
                "name": "N1",
                "count": 1
            },
            {
                "name": "nginx",
                "count": 1
            },
            {
                "name": "openwrt",
                "count": 1
            },
            {
                "name": "Pagic",
                "count": 1
            },
            {
                "name": "PE",
                "count": 1
            },
            {
                "name": "PicGo",
                "count": 1
            },
            {
                "name": "React",
                "count": 1
            },
            {
                "name": "recovery",
                "count": 1
            },
            {
                "name": "Tampermonkey",
                "count": 1
            },
            {
                "name": "Test",
                "count": 1
            },
            {
                "name": "twrp",
                "count": 1
            },
            {
                "name": "typecho",
                "count": 1
            },
            {
                "name": "Vercel",
                "count": 1
            },
            {
                "name": "VScode",
                "count": 1
            },
            {
                "name": "wine",
                "count": 1
            },
            {
                "name": "xposed",
                "count": 1
            },
            {
                "name": "XQuickEnergy",
                "count": 1
            },
            {
                "name": "三星健康",
                "count": 1
            },
            {
                "name": "安卓软件",
                "count": 1
            },
            {
                "name": "宝塔",
                "count": 1
            },
            {
                "name": "戴尔E6430",
                "count": 1
            },
            {
                "name": "支付宝运动",
                "count": 1
            },
            {
                "name": "斐讯DC1",
                "count": 1
            },
            {
                "name": "百度网盘下载",
                "count": 1
            },
            {
                "name": "百度网盘下载不限速",
                "count": 1
            },
            {
                "name": "路由",
                "count": 1
            },
            {
                "name": "驱动",
                "count": 1
            }
        ]
    }
};
