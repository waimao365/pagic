import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "categories/linux/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "categories/linux/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "linux",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/老爷机的福音lubuntu18.04.md",
                "title": "老爷机的福音lubuntu18.04",
                "link": "posts/老爷机的福音lubuntu18.04.html",
                "date": "2021-02-16T15:30:08.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "ubuntu",
                    "linux",
                    "wine"
                ],
                "tags": [
                    "ubuntu",
                    "linux",
                    "wine"
                ],
                "excerpt": "前言 刚238入手瑞角云，系统自带win10系统稍微有点卡，看视频1080,cpu占用80～90,寻思装台linux，在lubuntu和archlinux之间纠结了很久，archlinux也玩了一段时间，各方面都挺好，就是一个缺点，时间长了不更新，容易滚挂，做服..."
            },
            {
                "pagePath": "posts/VScode简单教程.md",
                "title": "VScode简单教程",
                "link": "posts/VScode简单教程.html",
                "date": "2021-02-15T15:55:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hugo",
                    "linux",
                    "VScode"
                ],
                "tags": [
                    "hugo",
                    "linux",
                    "VScode"
                ],
                "excerpt": "安装Visual Studio Code写文章及部署到github 下载地址： https://code.visualstudio.com/ 修改成中文 1）打开vscode工具； 2）使用快捷键组合【Ctrl+Shift+p】，在搜索框中输入“configure display language”，点击确定后； ..."
            },
            {
                "pagePath": "posts/ubuntu安装hugo教程.md",
                "title": "ubuntu安装hugo教程",
                "link": "posts/ubuntu安装hugo教程.html",
                "date": "2021-02-15T15:55:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hugo",
                    "linux",
                    "ubuntu",
                    "网站"
                ],
                "tags": [
                    "hugo",
                    "linux",
                    "ubuntu",
                    "网站"
                ],
                "excerpt": "ubuntu安装hugo 安装git 官网 https://git-scm.com/download/linux sudo apt-get install git 安装go https://golang.org/dl/ （有可能被墙） 下载go1.15.8.linux-amd64.tar.gz sudo tar -C /usr/local -xzf go1.15.8.linux-am..."
            },
            {
                "pagePath": "posts/利用ssh复制粘贴安装archlinux教程.md",
                "title": "利用ssh复制粘贴安装archlinux教程",
                "link": "posts/利用ssh复制粘贴安装archlinux教程.html",
                "date": "2021-02-15T08:55:30.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "archlinux",
                    "linux",
                    "电脑系统"
                ],
                "tags": [
                    "archlinux",
                    "linux",
                    "电脑系统"
                ],
                "excerpt": "官方安装教程 https://wiki.archlinux.org/index.php/Installation_guide_(简体中文) 手敲键盘部分 开启SSH 首先设置root的密码 passwd 回车之后输入root的密码即可 打开sshd systemctl start sshd 查看ip地址 ip addr 4、安装..."
            },
            {
                "pagePath": "posts/小白电脑安装windows系统，linxu和黑苹果的相关资料.md",
                "title": "小白电脑安装windows系统，linxu和黑苹果的相关资料",
                "link": "posts/小白电脑安装windows系统，linxu和黑苹果的相关资料.html",
                "date": "2019-12-13T19:05:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "电脑软件",
                    "电脑系统",
                    "PE",
                    "驱动",
                    "mac",
                    "黑苹果",
                    "linux"
                ],
                "tags": [
                    "电脑软件",
                    "电脑系统",
                    "PE",
                    "驱动",
                    "mac",
                    "黑苹果",
                    "linux"
                ],
                "excerpt": "电脑安装系统必备 操作系统下载 官方系统 http://msdn.itellyou.cn/ https://tb.rg-adguard.net/public.php 第三方系统 http://twm000.top/ http://www.uqi.me/ https://icura.cn/ PE http://www.wepe.com.cn/ https://www.its..."
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
