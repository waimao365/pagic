import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程.html",
    'title': "LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前言</h1>\n<p>官方系统：刷机root后，未安装其他软件，开机scene查看内存占50%，\n安装日常软件，开发者选项里面，系统可用用内存一般在200左右</p>\n<!-- more -->\n<p>Havoc 10：刷机root后，未安装其他任何软件，开机scene查看内存占37%\n安装日常软件，开发者选项里面显示系统可用内存一般在1.3G左右\n也就是说使用原生系统，系统可节约大概1G左右的内存\n官方系统优势：4K显示，hifi音效，拍照，信号\nhavoc系统优势：流畅，省电\n我不玩游戏，因为要安装支付宝（蚂蚁森林自动偷菜后台常驻），微信，微商相册，等软件，官方系统内存实在是不够用，反应慢，卡，实在是不能忍，换了havoc后，非常满意，上几张图\n电池使用情况\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E7%94%B5%E6%B1%A02.jpg" alt=""></p>\n<p>内存占用\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E5%86%85%E5%AD%982.jpg" alt=""></p>\n<p><img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E5%86%85%E5%AD%983.jpg" alt=""></p>\n<p>安装的软件\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E8%BD%AF%E4%BB%B6.jpg" alt=""></p>\n<h1>刷机前的准备工作</h1>\n<p>参考：<a href="https://163168.xyz/archives/18.html">https://163168.xyz/archives/18.html</a>\n下载刷机系统和所需工具\n链接: <a href="https://pan.baidu.com/s/1_tPSfWTyb8ZbHZs7HyKtBg">https://pan.baidu.com/s/1_tPSfWTyb8ZbHZs7HyKtBg</a> 提取码: 79ew\nLG 手机官方系统下载地址\n<a href="https://lg-firmwares.com/lg-mv300l-firmwares/#tab=firmwares">https://lg-firmwares.com/lg-mv300l-firmwares/#tab=firmwares</a>\n安装好驱动和LGUP<br>\n记录手机的IMEI和SN等信息。</p>\n<h1>刷机流程</h1>\n<h2 id="%E4%BB%8E80%E5%AE%98%E6%96%B9%E7%B3%BB%E7%BB%9F%E6%B7%B7%E5%88%B7h93020d_00_open_eu_op_0326kdz%E5%B9%B6%E8%A7%A3%E9%94%81root">从8.0官方系统，混刷H93020d_00_OPEN_EU_OP_0326.kdz，并解锁root<a class="anchor" href="#%E4%BB%8E80%E5%AE%98%E6%96%B9%E7%B3%BB%E7%BB%9F%E6%B7%B7%E5%88%B7h93020d_00_open_eu_op_0326kdz%E5%B9%B6%E8%A7%A3%E9%94%81root">§</a></h2>\n<p>8.0 root教程可参照\n<a href="https://163168.xyz/archives/18.html">https://163168.xyz/archives/18.html</a>\n9.0 root教程参考\n<a href="http://bbs.gfan.com/android-9614759-1-3.html">http://bbs.gfan.com/android-9614759-1-3.html</a>\n<a href="http://bbs.gfan.com/android-9608902-1-1.html">http://bbs.gfan.com/android-9608902-1-1.html</a></p>\n<h2 id="%E5%88%B7%E5%85%A5%E5%AE%98%E6%96%B990-300l30p_00_1220kdz">刷入官方9.0 300L30p_00_1220.kdz<a class="anchor" href="#%E5%88%B7%E5%85%A5%E5%AE%98%E6%96%B990-300l30p_00_1220kdz">§</a></h2>\n<p>手机按住音量+号键，连接USB线插入电脑（最后是台式机插机箱后面的USB）大概6秒左右进入刷机模式\n线刷300L30p_00_1220.kdz,  PD模式 除基带模块xbl xbl2 modem的三个分区不选,其他的全勾选\n刷完后如果遇到卡LOGO，可用硬格: 按住音量减和电源键 8秒以上，会闪屏一下，当LOGO出现后，立刻松开，再重新按住关机键，直到出现data peset界面，才松开。用音量键选择YES（两次），按电源键 进入恢复出厂设置\n手机进入系统后，打开开发者模式。USB连接电脑\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入adb  devices 回车     手机上会弹出授权.勾上后同意\n输入  adb reboot bootloader  回车\n输入 Fastboot flash recovery TWRP.img  回车\n输入 Fastboot boot TWRP.img 回车\n手机进入recovery 格式化DATA，清除chche\n刷入 Magisk-v19.3.zip，\n输入 Disable_Dm-Verity_ForceEncrypt_07.27.2019-test.zip\n刷入 AK3_RCTD_Remover.zip</p>\n<p>重启recovery  备份欧版官方的recocery （40M）备份好后复制到电脑</p>\n<h2 id="%E5%88%B7%E5%9B%9E-90-300l30p_00_1220kdz">刷回 9.0 300L30p_00_1220.kdz<a class="anchor" href="#%E5%88%B7%E5%9B%9E-90-300l30p_00_1220kdz">§</a></h2>\n<p>线刷，选分区的时候排除recovery，recoverybak两个分区，刷完后会无限进TWRP\n进TWRP后格式化DATA  清除chche\n刷入 Magisk-v19.3.zip，\n输入 Disable_Dm-Verity_ForceEncrypt_07.27.2019-test.zip\n刷入 AK3_RCTD_Remover.zip\n刷完后把之前备份复制到电脑的欧版recocery，（带备份日期和时间的这个文件夹）复制到手机，从TWRP恢复\n我用的是8.0欧版recocery备份恢复的，9.0欧版recocery备份恢复我没有测试，有成功的朋友可用留言告诉我。\n正常情况就可以开机了。\n开机后连接一次wifi\n进入开发者模式\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入adb shell\n输入 su   手机点授权同意\n复制 TWRP.img  到手机\n输入dd if=/sdcard/TWRP.img of=/dev/block/bootdevice/by-name/recovery</p>\n<h2 id="%E5%8D%A1%E5%88%B7havoc-os-v32-20200228-h930-unofficial">卡刷Havoc-OS-v3.2-20200228-h930-Unofficial<a class="anchor" href="#%E5%8D%A1%E5%88%B7havoc-os-v32-20200228-h930-unofficial">§</a></h2>\n<p>在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入 adb devices\n输入 adb reboot recovery\n手机进入twrp后，四清，卡刷Havoc-OS-v3.2-20200228-h930-Unofficial</p>\n<h1>遇到的问题和解决方法</h1>\n<h2 id="%E6%89%93%E5%BC%80lgup%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF">打开LGUP出现错误<a class="anchor" href="#%E6%89%93%E5%BC%80lgup%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF">§</a></h2>\n<p>LGUP_Common.dll(任意刷包括9.0降级8.0)  下载并替换到安装文件夹</p>\n<h2 id="twrp%E5%87%BA%E7%8E%B0%E8%AD%A6%E5%91%8A">twrp出现警告<a class="anchor" href="#twrp%E5%87%BA%E7%8E%B0%E8%AD%A6%E5%91%8A">§</a></h2>\n<p>格式化da\'ta分区，再清除cache，一般就可用了</p>\n<h2 id="%E5%8D%A1logo">卡LOGO<a class="anchor" href="#%E5%8D%A1logo">§</a></h2>\n<p>可用硬格: 按住音量减和电源键 8秒以上，会闪屏一下，当LOGO出现后，立刻松开，再重新按住关机键，直到出现data peset界面，才松开。用音量键选择YES（两次），按电源键 进入恢复出厂设置</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF">手机无限重启<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF">§</a></h2>\n<p>同时按住音量减和电源键，强制关机，再硬格</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F">手机不能进刷机模式<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p>进入twrp，卡刷US998_20G_FULL.zip，我测试过两次不能进线刷模式，都是靠这个包恢复线刷模式的</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F%E4%B9%9F%E4%B8%8D%E8%83%BD%E8%BF%9Brecovery%E7%A1%AC%E6%A0%BC%E5%90%8E%E4%B9%9F%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF%E6%89%8B%E6%9C%BA">手机不能进刷机模式，也不能进recovery，硬格后也无限重启手机<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F%E4%B9%9F%E4%B8%8D%E8%83%BD%E8%BF%9Brecovery%E7%A1%AC%E6%A0%BC%E5%90%8E%E4%B9%9F%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF%E6%89%8B%E6%9C%BA">§</a></h2>\n<p>一直按住音量减 会进入bootloader模式\n输入\nfastboot flash recovery TWRP.img\n再次输入\nfastboot boot TWRP.img\n进入 terp 四清，卡刷卡刷US998_20G_FULL.zip，再线刷韩版官方系统。</p>\n<h1>总结</h1>\n<p>测试 从8.0 root后，卡刷30q 卡刷Havoc   手机可用使用。关于手机，手机型号：Unknown\n测试从9.0 H93020d卡刷30q 卡刷Havoc  手机可用使用，手机型号显示h930，开机2分钟后才会有信号，测试关闭飞行模式后也是两分钟左右出信号，信号不显示，就是一个空的三角形，不知道信号强度，可用打电话。\n很多其他版本的机友反映要刷30q后开wifi，再刷Havoc，不会出现wifi的问题，但是韩版最新版本是30p，经过测试其实是可用用的\n混刷是为了root，混刷后的系统信号差，断一次网，要等两分钟再连接，这个真不能忍。\n教程的难点是9.0 混欧版刷root后，刷回韩版官方9.0p   如果长时间不能进系统，就只能按9.0 root的教程重新来一次。\n混刷后一定记得要备份recovery，最好8.0和9.0的都备份\n取得root 权限后要备份SN\n参照 <a href="http://bbs.gfan.com/android-9574953-1-1.html">http://bbs.gfan.com/android-9574953-1-1.html</a>\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\nadb shell\nsu（此处注意手机上弹出授权提示）\ndd if=/dev/block/bootdevice/by-name/ftm of=/sdcard/ftm-o.img<br>\n刷机掉了SN 只是输入 dd of=/dev/block/bootdevice/by-name/ftm if=/sdcard/ftm-mod.img\n如果没有备份，先备份，备份好的ftm-o.img 复制到电脑，通过ultraedit 软件打开\n找到12000H处，修改SM码 （非常难找，找了几分钟，眼睛都花）输入自己的SN码，据说输入别人的也可以。\n修改后重启就可用了。</p>\n<p>没一定把握就不要刷基带，风险大，容易9008</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u8A00"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>官方系统：刷机root后，未安装其他软件，开机scene查看内存占50%，\n安装日常软件，开发者选项里面，系统可用用内存一般在200左右</p>\n<!-- more -->\n<p>Havoc 10：刷机root后，未安装其他任何软件，开机scene查看内存占37%\n安装日常软件，开发者选项里面显示系统可用内存一般在1.3G左右\n也就是说使用原生系统，系统可节约大概1G左右的内存\n官方系统优势：4K显示，hifi音效，拍照，信号\nhavoc系统优势：流畅，省电\n我不玩游戏，因为要安装支付宝（蚂蚁森林自动偷菜后台常驻），微信，微商相册，等软件，官方系统内存实在是不够用，反应慢，卡，实在是不能忍，换了havoc后，非常满意，上几张图\n电池使用情况\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E7%94%B5%E6%B1%A02.jpg" alt=""></p>\n<p>内存占用\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E5%86%85%E5%AD%982.jpg" alt=""></p>\n<p><img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E5%86%85%E5%AD%983.jpg" alt=""></p>\n<p>安装的软件\n<img src="https://cdn.jsdelivr.net/gh/waimao8/image@master/%E8%BD%AF%E4%BB%B6.jpg" alt=""></p>\n<h1>刷机前的准备工作</h1>\n<p>参考：<a href="https://163168.xyz/archives/18.html">https://163168.xyz/archives/18.html</a>\n下载刷机系统和所需工具\n链接: <a href="https://pan.baidu.com/s/1_tPSfWTyb8ZbHZs7HyKtBg">https://pan.baidu.com/s/1_tPSfWTyb8ZbHZs7HyKtBg</a> 提取码: 79ew\nLG 手机官方系统下载地址\n<a href="https://lg-firmwares.com/lg-mv300l-firmwares/#tab=firmwares">https://lg-firmwares.com/lg-mv300l-firmwares/#tab=firmwares</a>\n安装好驱动和LGUP<br>\n记录手机的IMEI和SN等信息。</p>\n<h1>刷机流程</h1>\n<h2 id="%E4%BB%8E80%E5%AE%98%E6%96%B9%E7%B3%BB%E7%BB%9F%E6%B7%B7%E5%88%B7h93020d_00_open_eu_op_0326kdz%E5%B9%B6%E8%A7%A3%E9%94%81root">从8.0官方系统，混刷H93020d_00_OPEN_EU_OP_0326.kdz，并解锁root<a class="anchor" href="#%E4%BB%8E80%E5%AE%98%E6%96%B9%E7%B3%BB%E7%BB%9F%E6%B7%B7%E5%88%B7h93020d_00_open_eu_op_0326kdz%E5%B9%B6%E8%A7%A3%E9%94%81root">§</a></h2>\n<p>8.0 root教程可参照\n<a href="https://163168.xyz/archives/18.html">https://163168.xyz/archives/18.html</a>\n9.0 root教程参考\n<a href="http://bbs.gfan.com/android-9614759-1-3.html">http://bbs.gfan.com/android-9614759-1-3.html</a>\n<a href="http://bbs.gfan.com/android-9608902-1-1.html">http://bbs.gfan.com/android-9608902-1-1.html</a></p>\n<h2 id="%E5%88%B7%E5%85%A5%E5%AE%98%E6%96%B990-300l30p_00_1220kdz">刷入官方9.0 300L30p_00_1220.kdz<a class="anchor" href="#%E5%88%B7%E5%85%A5%E5%AE%98%E6%96%B990-300l30p_00_1220kdz">§</a></h2>\n<p>手机按住音量+号键，连接USB线插入电脑（最后是台式机插机箱后面的USB）大概6秒左右进入刷机模式\n线刷300L30p_00_1220.kdz,  PD模式 除基带模块xbl xbl2 modem的三个分区不选,其他的全勾选\n刷完后如果遇到卡LOGO，可用硬格: 按住音量减和电源键 8秒以上，会闪屏一下，当LOGO出现后，立刻松开，再重新按住关机键，直到出现data peset界面，才松开。用音量键选择YES（两次），按电源键 进入恢复出厂设置\n手机进入系统后，打开开发者模式。USB连接电脑\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入adb  devices 回车     手机上会弹出授权.勾上后同意\n输入  adb reboot bootloader  回车\n输入 Fastboot flash recovery TWRP.img  回车\n输入 Fastboot boot TWRP.img 回车\n手机进入recovery 格式化DATA，清除chche\n刷入 Magisk-v19.3.zip，\n输入 Disable_Dm-Verity_ForceEncrypt_07.27.2019-test.zip\n刷入 AK3_RCTD_Remover.zip</p>\n<p>重启recovery  备份欧版官方的recocery （40M）备份好后复制到电脑</p>\n<h2 id="%E5%88%B7%E5%9B%9E-90-300l30p_00_1220kdz">刷回 9.0 300L30p_00_1220.kdz<a class="anchor" href="#%E5%88%B7%E5%9B%9E-90-300l30p_00_1220kdz">§</a></h2>\n<p>线刷，选分区的时候排除recovery，recoverybak两个分区，刷完后会无限进TWRP\n进TWRP后格式化DATA  清除chche\n刷入 Magisk-v19.3.zip，\n输入 Disable_Dm-Verity_ForceEncrypt_07.27.2019-test.zip\n刷入 AK3_RCTD_Remover.zip\n刷完后把之前备份复制到电脑的欧版recocery，（带备份日期和时间的这个文件夹）复制到手机，从TWRP恢复\n我用的是8.0欧版recocery备份恢复的，9.0欧版recocery备份恢复我没有测试，有成功的朋友可用留言告诉我。\n正常情况就可以开机了。\n开机后连接一次wifi\n进入开发者模式\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入adb shell\n输入 su   手机点授权同意\n复制 TWRP.img  到手机\n输入dd if=/sdcard/TWRP.img of=/dev/block/bootdevice/by-name/recovery</p>\n<h2 id="%E5%8D%A1%E5%88%B7havoc-os-v32-20200228-h930-unofficial">卡刷Havoc-OS-v3.2-20200228-h930-Unofficial<a class="anchor" href="#%E5%8D%A1%E5%88%B7havoc-os-v32-20200228-h930-unofficial">§</a></h2>\n<p>在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\n输入 adb devices\n输入 adb reboot recovery\n手机进入twrp后，四清，卡刷Havoc-OS-v3.2-20200228-h930-Unofficial</p>\n<h1>遇到的问题和解决方法</h1>\n<h2 id="%E6%89%93%E5%BC%80lgup%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF">打开LGUP出现错误<a class="anchor" href="#%E6%89%93%E5%BC%80lgup%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF">§</a></h2>\n<p>LGUP_Common.dll(任意刷包括9.0降级8.0)  下载并替换到安装文件夹</p>\n<h2 id="twrp%E5%87%BA%E7%8E%B0%E8%AD%A6%E5%91%8A">twrp出现警告<a class="anchor" href="#twrp%E5%87%BA%E7%8E%B0%E8%AD%A6%E5%91%8A">§</a></h2>\n<p>格式化da\'ta分区，再清除cache，一般就可用了</p>\n<h2 id="%E5%8D%A1logo">卡LOGO<a class="anchor" href="#%E5%8D%A1logo">§</a></h2>\n<p>可用硬格: 按住音量减和电源键 8秒以上，会闪屏一下，当LOGO出现后，立刻松开，再重新按住关机键，直到出现data peset界面，才松开。用音量键选择YES（两次），按电源键 进入恢复出厂设置</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF">手机无限重启<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF">§</a></h2>\n<p>同时按住音量减和电源键，强制关机，再硬格</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F">手机不能进刷机模式<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F">§</a></h2>\n<p>进入twrp，卡刷US998_20G_FULL.zip，我测试过两次不能进线刷模式，都是靠这个包恢复线刷模式的</p>\n<h2 id="%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F%E4%B9%9F%E4%B8%8D%E8%83%BD%E8%BF%9Brecovery%E7%A1%AC%E6%A0%BC%E5%90%8E%E4%B9%9F%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF%E6%89%8B%E6%9C%BA">手机不能进刷机模式，也不能进recovery，硬格后也无限重启手机<a class="anchor" href="#%E6%89%8B%E6%9C%BA%E4%B8%8D%E8%83%BD%E8%BF%9B%E5%88%B7%E6%9C%BA%E6%A8%A1%E5%BC%8F%E4%B9%9F%E4%B8%8D%E8%83%BD%E8%BF%9Brecovery%E7%A1%AC%E6%A0%BC%E5%90%8E%E4%B9%9F%E6%97%A0%E9%99%90%E9%87%8D%E5%90%AF%E6%89%8B%E6%9C%BA">§</a></h2>\n<p>一直按住音量减 会进入bootloader模式\n输入\nfastboot flash recovery TWRP.img\n再次输入\nfastboot boot TWRP.img\n进入 terp 四清，卡刷卡刷US998_20G_FULL.zip，再线刷韩版官方系统。</p>\n<h1>总结</h1>\n<p>测试 从8.0 root后，卡刷30q 卡刷Havoc   手机可用使用。关于手机，手机型号：Unknown\n测试从9.0 H93020d卡刷30q 卡刷Havoc  手机可用使用，手机型号显示h930，开机2分钟后才会有信号，测试关闭飞行模式后也是两分钟左右出信号，信号不显示，就是一个空的三角形，不知道信号强度，可用打电话。\n很多其他版本的机友反映要刷30q后开wifi，再刷Havoc，不会出现wifi的问题，但是韩版最新版本是30p，经过测试其实是可用用的\n混刷是为了root，混刷后的系统信号差，断一次网，要等两分钟再连接，这个真不能忍。\n教程的难点是9.0 混欧版刷root后，刷回韩版官方9.0p   如果长时间不能进系统，就只能按9.0 root的教程重新来一次。\n混刷后一定记得要备份recovery，最好8.0和9.0的都备份\n取得root 权限后要备份SN\n参照 <a href="http://bbs.gfan.com/android-9574953-1-1.html">http://bbs.gfan.com/android-9574953-1-1.html</a>\n在LGV30工具\LGV30 ROOT\3.解锁BL 里面找到Command Prompt  点击打开\nadb shell\nsu（此处注意手机上弹出授权提示）\ndd if=/dev/block/bootdevice/by-name/ftm of=/sdcard/ftm-o.img<br>\n刷机掉了SN 只是输入 dd of=/dev/block/bootdevice/by-name/ftm if=/sdcard/ftm-mod.img\n如果没有备份，先备份，备份好的ftm-o.img 复制到电脑，通过ultraedit 软件打开\n找到12000H处，修改SM码 （非常难找，找了几分钟，眼睛都花）输入自己的SN码，据说输入别人的也可以。\n修改后重启就可用了。</p>\n<p>没一定把握就不要刷基带，风险大，容易9008</p>'
        } }),
    'toc': true,
    'author': undefined,
    'contributors': [],
    'date': "2020-03-23T15:18:30.000Z",
    'updated': null,
    'excerpt': "官方系统：刷机root后，未安装其他软件，开机scene查看内存占50%， 安装日常软件，开发者选项里面，系统可用用内存一般在200左右 Havoc 10：刷机root后，未安装其他任何软件，开机scene查看内存占37% 安装日常软件，开发者选项...",
    'cover': "https://cdn.jsdelivr.net/gh/waimao8/image@master/电池2.jpg",
    'comments': true,
    'categories': [
        "安卓手机",
        "LG V30",
        "刷机",
        "root"
    ],
    'tags': [
        "安卓手机",
        "LG V30",
        "刷机",
        "root"
    ],
    'abbrlink': 21,
    'slug': 21,
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/front_matter_test.md",
                "title": "Front matter test",
                "link": "test_pages/front_matter_test.html",
                "date": "2021-02-19T13:25:55.714Z",
                "updated": null,
                "author": "test",
                "contributors": [],
                "excerpt": "This is a front matter test page. The front matter content outputPath: test_pages/front_matter_test.html title: Front matter test toc: null prev: null next: null "
            },
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
                "pagePath": "posts/markdown_test.md",
                "title": "Markdown test",
                "link": "posts/markdown_test.html",
                "date": "2021/02/04",
                "updated": "2021年02月04日15:55:59",
                "author": "test",
                "contributors": [],
                "categories": null,
                "tags": [
                    "MarkDown",
                    "Test"
                ],
                "excerpt": "This page contains the features about markdown supported by Pagic. GitHub flavored markdown The followed content is copied from https://guides.github.com/features/mastering-markdown/ Text It's very easy to make...",
                "cover": "../assets/hello-world/1.png"
            },
            {
                "pagePath": "posts/myreadme.md",
                "title": "Build personal blog at top speed",
                "link": "posts/myreadme.html",
                "date": "2021/02/04",
                "updated": null,
                "author": "huqi",
                "contributors": [],
                "categories": [
                    "Blog"
                ],
                "tags": [
                    "Deno",
                    "React",
                    "Pagic",
                    "Vercel"
                ],
                "excerpt": "Pagic Pagic It is a static website generator driven by DeNO + react. It has simple configuration, supports rendering MD / TSX files into static pages, and has a large number of official or third-party themes an...",
                "cover": "https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg"
            },
            {
                "pagePath": "posts/hello_world.md",
                "title": "Hello World",
                "link": "posts/hello_world.html",
                "date": "2021/02/03",
                "updated": null,
                "author": "huqi",
                "contributors": [],
                "categories": [
                    "Hello World"
                ],
                "tags": [
                    "First"
                ],
                "excerpt": "Hello, my friends! i like you",
                "cover": "/assets/1612406852801-image.png"
            },
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
                "pagePath": "posts/hugo搭建和使用教程.md",
                "title": "hugo搭建和使用教程",
                "link": "posts/hugo搭建和使用教程.html",
                "date": "2020-06-01T15:55:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hugo",
                    "网站",
                    "github"
                ],
                "tags": [
                    "hugo",
                    "网站",
                    "github"
                ],
                "excerpt": "做博客就图个稳定，一次性买了10年的域名，搭配免费的github，适合做长期博客。 之前安装的hexo，可玩性非常强，前面文章有写一些关于hexo的安装使用教程，用了一年多，也发现了一些问题，hexo版本更新各种不兼容，访问速度慢，..."
            },
            {
                "pagePath": "posts/LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程.md",
                "title": "LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程",
                "link": "posts/LG V30 韩版V300L 8.0 9.0 root刷类原生系统Havoc 10.0的详细过程.html",
                "date": "2020-03-23T15:18:30.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "安卓手机",
                    "LG V30",
                    "刷机",
                    "root"
                ],
                "tags": [
                    "安卓手机",
                    "LG V30",
                    "刷机",
                    "root"
                ],
                "excerpt": "官方系统：刷机root后，未安装其他软件，开机scene查看内存占50%， 安装日常软件，开发者选项里面，系统可用用内存一般在200左右 Havoc 10：刷机root后，未安装其他任何软件，开机scene查看内存占37% 安装日常软件，开发者选项...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/电池2.jpg"
            },
            {
                "pagePath": "posts/k2p老毛子固件绑定域名之 cloudflare.com.md",
                "title": "k2p老毛子固件绑定域名之 cloudflare.com",
                "link": "posts/k2p老毛子固件绑定域名之 cloudflare.com.html",
                "date": "2020-01-03T13:10:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "k2p",
                    "域名",
                    "cloudflare",
                    "路由",
                    "网站"
                ],
                "tags": [
                    "k2p",
                    "域名",
                    "cloudflare",
                    "路由",
                    "网站"
                ],
                "excerpt": "k2p老毛子固件绑定域名之 cloudflare.com 使用 Cloudflare 实现顶级个人域名的 ddns 服务。 https://www.cloudflare.com 使用前需要安装 curl 程序，可以安装opt后输入 opkg install curl 敲回车键安装启用opt 点击获取 https:...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20200103134738.png"
            },
            {
                "pagePath": "posts/关于微店购物的相关问题.md",
                "title": "关于微店购物的相关问题",
                "link": "posts/关于微店购物的相关问题.html",
                "date": "2019-12-27T13:10:32.000Z",
                "updated": null,
                "contributors": [],
                "excerpt": "因实体批发比较繁忙，经常回复会比较慢，谢理解！大家可以先看下下面的相关解答哈！有不清楚的还可以咨询我们的哈！ 关于发货 默认中通，晚上十一点左右统一发货，一般当天下午接的单，当天就可以发的。为避免大家心累，不接急...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/1.png"
            },
            {
                "pagePath": "posts/LG V30韩版 ROOT详细教程.md",
                "title": "LG V30韩版 ROOT详细教程",
                "link": "posts/LG V30韩版 ROOT详细教程.html",
                "date": "2019-12-23T15:18:30.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "安卓手机",
                    "LG V30",
                    "刷机",
                    "root"
                ],
                "tags": [
                    "安卓手机",
                    "LG V30",
                    "刷机",
                    "root"
                ],
                "excerpt": "2019年最火的洋垃圾LG V30，骁龙835cpu（从此告别发烧），4G内存，64G储存，能满足日用生活，能玩游戏，2k屏幕，hifi，极高的性价比。 LG V30韩版 ROOT详细教程 一个非常详细的视频教程，建议大家仔细观看，全部看懂了再来操作...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20191223193123.png"
            },
            {
                "pagePath": "posts/解决安卓手机卡顿 安装google商店官方软件的方法.md",
                "title": "解决安卓手机卡顿 安装google商店官方软件的方法",
                "link": "posts/解决安卓手机卡顿 安装google商店官方软件的方法.html",
                "date": "2019-12-23T12:20:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "安卓手机",
                    "安卓软件",
                    "APK Downloader",
                    "cheome插件"
                ],
                "tags": [
                    "安卓手机",
                    "安卓软件",
                    "APK Downloader",
                    "cheome插件"
                ],
                "excerpt": "下载play.google.com商店软件的方法 国内安卓软件多数都是比较流氓，内存占用大，弹广告，要想手机流畅运行，建议尽量使用google商店下载的软件。 下面提到的所以资源可以到蓝奏云网盘下载，无广告，速度飞快 https://www.lanz...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20191223114314.png"
            },
            {
                "pagePath": "posts/黑苹果给安卓手机刷入twrp recovery教程.md",
                "title": "黑苹果给安卓手机刷入twrp recovery教程",
                "link": "posts/黑苹果给安卓手机刷入twrp recovery教程.html",
                "date": "2019-12-18T01:00:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "安卓手机",
                    "twrp",
                    "recovery",
                    "黑苹果"
                ],
                "tags": [
                    "安卓手机",
                    "twrp",
                    "recovery",
                    "黑苹果"
                ],
                "excerpt": "点击设置，系统，关机手机，版本号联系点击三下，进入开发者模式，找到开发者选项，打开OME解锁，打开Android调试，打开网络ADB调试。 下载twrp 下面以lgnexus5x为例 https://twrp.me/lg/lgnexus5x.html 下载最新的 安装 ADB 和...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20191218000645.png"
            },
            {
                "pagePath": "posts/支付宝通过三星健康修改步数的教程和注意事项.md",
                "title": "支付宝通过三星健康修改步数的教程和注意事项",
                "link": "posts/支付宝通过三星健康修改步数的教程和注意事项.html",
                "date": "2019-12-14T15:55:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "支付宝运动",
                    "三星健康",
                    "xposed",
                    "edxposed"
                ],
                "tags": [
                    "支付宝运动",
                    "三星健康",
                    "xposed",
                    "edxposed"
                ],
                "excerpt": "支付宝通过三星健康修改步数的教程和注意事项 全部软件下载地址（担心以后新版的支付宝不能同步，所以在网盘也放了最近的三个支付宝，酷安下载的） https://www.lanzous.com/b059xem4d 安卓8，安卓9，安卓10安装edxposed 下载M..."
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
            },
            {
                "pagePath": "posts/图床搭建的最佳选择 PicGo + Github + Jsdelivr免费公用CDN加速.md",
                "title": "图床搭建的最佳选择 PicGo + Github + Jsdelivr免费公用CDN加速.",
                "link": "posts/图床搭建的最佳选择 PicGo + Github + Jsdelivr免费公用CDN加速.html",
                "date": "2019-12-13T12:33:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "Github",
                    "hexo",
                    "PicGo",
                    "Jsdelivr"
                ],
                "tags": [
                    "Github",
                    "hexo",
                    "PicGo",
                    "Jsdelivr"
                ],
                "excerpt": "图床搭建的最佳选择 PicGo + Github + Jsdelivr免费公用CDN加速 Github创建仓库 点击 New repository 创建好后，获取Token 这个Token只出现一次的，一定要记得复制好，pico设置要用到的 下载picgo https://github.com/Molunerf...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/0.png"
            },
            {
                "pagePath": "posts/Nexus 5X手机在支付宝的蚂蚁森林自动收能量的过程.md",
                "title": "Nexus 5X手机在支付宝的蚂蚁森林自动收能量的过程.",
                "link": "posts/Nexus 5X手机在支付宝的蚂蚁森林自动收能量的过程.html",
                "date": "2019-12-10T00:21:32.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "安卓手机"
                ],
                "tags": [
                    "安卓手机",
                    "magisk",
                    "edxposed",
                    "XQuickEnergy"
                ],
                "excerpt": "https://downloads.aospextended.com/bullhead 个人觉得aospextended的rom比较省电，其他刷机包或者不刷机也是可以的，只要是手机不能杀支付宝的后台就行，如果需要用都省电模式，要在省电模式里面排除支付宝。 下载twrp https..."
            },
            {
                "pagePath": "posts/百度网盘不限速下载的一些方法.md",
                "title": "百度网盘不限速下载的一些方法",
                "link": "posts/百度网盘不限速下载的一些方法.html",
                "date": "2019-12-08T23:28:33.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "电脑软件",
                    "百度网盘下载"
                ],
                "tags": [
                    "电脑软件",
                    "百度网盘下载",
                    "it软件",
                    "百度网盘下载不限速"
                ],
                "excerpt": "下载地址 http://www.enfi.cloud/ 需要搭配enfi下载助手 用P2P下载技术，支持HTTP，BT，磁力链等各种协议，高速下载让你摆脱限速的困扰，从此告别低速 这个可以挂机赚钱的，本人测试黑苹果笔记本戴尔E6430用的无线wifi2.4的网络..."
            },
            {
                "pagePath": "posts/戴尔笔记本E6430安装黑苹果的全部过程.md",
                "title": "戴尔笔记本E6430安装黑苹果的全部过程",
                "link": "posts/戴尔笔记本E6430安装黑苹果的全部过程.html",
                "date": "2019-12-08T19:21:42.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "黑苹果"
                ],
                "tags": [
                    "黑苹果",
                    "Mac",
                    "戴尔E6430",
                    "lnmp"
                ],
                "excerpt": "从黑苹果长期维护机型 EFI 及安装教程整理 https://www.jianshu.com/p/484f07b8c7fd 找到 https://github.com/kinoute/Hack-Dell-Latitude-E6430 下载EFI文件夹 下载系统 从黑果小兵下载macOS Mojave 10.14.6，自带Clover的 ht..."
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
                "pagePath": "posts/斐讯N1安Armbian安装OMV安装nginx+mysql安装typecho全过程.md",
                "title": "斐讯N1安Armbian安装OMV安装nginx+mysql安装typecho全过程",
                "link": "posts/斐讯N1安Armbian安装OMV安装nginx+mysql安装typecho全过程.html",
                "date": "2019-12-08T18:28:42.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "斐讯N1",
                    "omv",
                    "typecho",
                    "lnmp",
                    "mysql",
                    "nginx"
                ],
                "tags": [
                    "斐讯N1",
                    "omv",
                    "typecho",
                    "lnmp",
                    "mysql",
                    "nginx"
                ],
                "excerpt": "测试了很多版本的Armbian+omv，OMV经常会报错，改用了XQ7的N1首个支持FullCone Nat的Armbian系统，非常好用 下面是链接 https://www.right.com.cn/forum/thread-788004-1-1.html ROM下载地址：链接：https://share.weiyun.com/...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112165303.png"
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
            },
            {
                "pagePath": "posts/Github 绑定域名添加https的方法 2019年9月更新.md",
                "title": "Github 绑定域名添加https的方法2019年9月更新",
                "link": "posts/Github 绑定域名添加https的方法 2019年9月更新.html",
                "date": "2019-09-14T15:40:43.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "Github",
                    "hexo",
                    "域名"
                ],
                "tags": [
                    "Github",
                    "hexo",
                    "域名"
                ],
                "excerpt": "官方教程 https://help.github.com/en/articles/using-a-custom-domain-with-github-pages 打开 https://github.com/ 打开 https://github.com/waimao8/waimao8.github.io/settings 绑定域名：163168.xyz 打开你要绑定域名的项...",
                "cover": "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pLmxvbGkubmV0LzIwMTkvMDkvMTQvT3djYURRVWxMdGQxN0Z2LnBuZw?x-oss-process=image/format,png"
            },
            {
                "pagePath": "posts/hexo博客优化之文章置顶+置顶标签.md",
                "title": "hexo博客优化之文章置顶+置顶标签",
                "link": "posts/hexo博客优化之文章置顶+置顶标签.html",
                "date": "2019-09-12T13:01:23.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hexo"
                ],
                "tags": [
                    "hexo",
                    "网站"
                ],
                "excerpt": "支持置顶的仓库 可以直接用以下命令安装 $ npm uninstall hexo-generator-index --save $ npm install hexo-generator-index-pin-top --save 然后在需要置顶的文章的Front-matter中加上top: true即可。 设置置顶标志 打开：/bl..."
            },
            {
                "pagePath": "posts/chrome安装Tampermonkey，添加插件的过程.md",
                "title": "chrome安装Tampermonkey，添加插件的过程",
                "link": "posts/chrome安装Tampermonkey，添加插件的过程.html",
                "date": "2019-09-12T13:01:13.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "电脑软件",
                    "chrome",
                    "Tampermonkey",
                    "cheome插件"
                ],
                "tags": [
                    "电脑软件",
                    "chrome",
                    "Tampermonkey",
                    "cheome插件"
                ],
                "excerpt": "chrome安装Tampermonkey，添加插件的过程 安装谷歌访问助手 打开google搜索和https://play.google.com/ 的正确方式 下载谷歌访问助手 https://github.com/haotian-wang/google-access-helper 解压文件后 将谷歌访问助手_v2.3.0...",
                "cover": "https://cdn.jsdelivr.net/gh/waimao8/image@master/20191213133150.png"
            },
            {
                "pagePath": "posts/hexo博客备份迁移教程.md",
                "title": "hexo博客备份迁移教程",
                "link": "posts/hexo博客备份迁移教程.html",
                "date": "2019-09-11T13:01:13.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hexo"
                ],
                "tags": [
                    "hexo",
                    "hexo备份还原"
                ],
                "excerpt": "新建repository 在Github下创建一个新的repository，取名为myblog。(与本地的Hexo源码文件夹同名即可) 创建的时候最好为空，不要勾选创建README.md。 创建仓库 进入本地的Hexo文件夹(D:\\hexo\\blog\\myblog)，在这个地方使用git ..."
            },
            {
                "pagePath": "posts/github搭建hexo博客和绑定域名的详细过程.md",
                "title": "github搭建hexo博客和绑定域名的详细过程",
                "link": "posts/github搭建hexo博客和绑定域名的详细过程.html",
                "date": "2019-09-09T19:21:48.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hexo"
                ],
                "tags": [
                    "hexo",
                    "博客"
                ],
                "excerpt": "1、https://github.com/ 先注册账号 比如我的是 waimao8 2、New repository waimao8.github.io 3、下载git https://git-scm.com/downloads 默认安装 安装好后，用git --version 来查看一下版本 4、下载 https://nodejs.org/en/..."
            },
            {
                "pagePath": "posts/hexo安装后的使用教程.md",
                "title": "hexo安装后的使用教程",
                "link": "posts/hexo安装后的使用教程.html",
                "date": "2019-09-09T14:37:42.000Z",
                "updated": null,
                "contributors": [],
                "categories": [
                    "hexo",
                    "网站",
                    "博客"
                ],
                "tags": [
                    "hexo",
                    "网站",
                    "博客"
                ],
                "excerpt": "安装主题（next） git clone https://github.com/theme-next/hexo-theme-next themes/next 下载主题解压后放到themes目录 编辑主目录的_config.yml 查找language 设置 language: zh-CN 搜索Schemes 切换到 scheme: Gemini 搜索..."
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
