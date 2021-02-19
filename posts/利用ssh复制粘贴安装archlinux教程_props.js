import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/利用ssh复制粘贴安装archlinux教程.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/利用ssh复制粘贴安装archlinux教程.html",
    'title': "利用ssh复制粘贴安装archlinux教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%AE%98%E6%96%B9%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B">官方安装教程<a class="anchor" href="#%E5%AE%98%E6%96%B9%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B">§</a></h2>\n<p><a href="https://wiki.archlinux.org/index.php/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)">https://wiki.archlinux.org/index.php/Installation_guide_(简体中文)</a></p>\n<h2 id="%E6%89%8B%E6%95%B2%E9%94%AE%E7%9B%98%E9%83%A8%E5%88%86">手敲键盘部分<a class="anchor" href="#%E6%89%8B%E6%95%B2%E9%94%AE%E7%9B%98%E9%83%A8%E5%88%86">§</a></h2>\n<p>开启SSH</p>\n<p>首先设置root的密码 passwd</p>\n<p>回车之后输入root的密码即可</p>\n<p>打开sshd</p>\n<p>systemctl start sshd</p>\n<p>查看ip地址</p>\n<p>ip addr</p>\n<p>4、安装工具\npacman -Syy\npacman -S net-tools openssh</p>\n<p>5、启动 ssh</p>\n<p>systemctl start sshd</p>\n<p>dhcpcd  #网线\nwifi-menu # wifi\nping <a href="http://www.baidu.com">www.baidu.com</a></p>\n<p>ctrt+c  #退出ping</p>\n<h2 id="%E5%A4%8D%E5%88%B6%E7%B2%98%E5%B8%96%E9%83%A8%E5%88%86">复制粘帖部分<a class="anchor" href="#%E5%A4%8D%E5%88%B6%E7%B2%98%E5%B8%96%E9%83%A8%E5%88%86">§</a></h2>\n<p>用ssh软件登录</p>\n<p>windows推荐Xshell        linux推荐putty</p>\n<p>登录后就可以复制下面代码敲回车就可以了。</p>\n<h3 id="%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA">硬盘分区<a class="anchor" href="#%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA">§</a></h3>\n<p>查看磁盘信息  sda</p>\n<p>fdisk -l  # 查看磁盘信息  我查看的是sda 下面请把sda改成你的就可以了</p>\n<p>硬盘分区有两种方法，请选一种 cfdisk是图像化的  fdisk是纯命令的\n#方法一：图像化的操作\ncfdisk /dev/sda\n分别用new新建三个分区 分别选择Type 选择类型\nsda1   512M  EFI system\nsda3    4G      linux swap      # 不要大于虚拟机实际内存\nsda2   默认剩余全部 linux filesystem<br>\n分好后选择Write写入 选择\nQuit退出</p>\n<p>#方法二：纯命令的操作</p>\n<p>fdisk /dev/sda\n输入m #显示菜单\n输入p #显示硬盘情况\n输入M 输入g   # 硬盘更改成GPT分区</p>\n<p>输入n # 分区\n先选择1 回车再回车再输入+512M\n输入t 输入1  # 可以输入L查看格式\n输入W\n输入m<br>\n输入n输入n # 分区\n先选择3 回车再回车再输入+4G\n输入t 输入19\n输入W\n输入m<br>\n输入n输入n # 分区\n先选择2 回车再回车再回车<br>\n#剩余目录会自动全部分配到这里\nsda2无需更改格式 默认是就是linux filesystem\n输入W\n最后输入q退出分区\n下面命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的</p>\n<p>#上面是两种硬盘分区教程，随便选一种吧，下面要格式化硬盘\nfdisk -l  # 查看磁盘信息\n下面的命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的</p>\n<h3 id="%E6%8C%82%E8%BD%BD%E5%B9%B6%E6%A0%BC%E5%BC%8F%E5%8C%96">挂载并格式化<a class="anchor" href="#%E6%8C%82%E8%BD%BD%E5%B9%B6%E6%A0%BC%E5%BC%8F%E5%8C%96">§</a></h3>\n<p>mkfs.fat -F32 /dev/sda1\nmkfs.ext4 /dev/sda2\nmkswap /dev/sda3\nswapon /dev/sda3</p>\n<p>挂载根分区到/mnt下</p>\n<p>mount /dev/sda2 /mnt</p>\n<p>创建 boot 文件夹 来挂载EFI分区</p>\n<p>mkdir /mnt/boot</p>\n<p>挂载EFI分区到 /mnt/boot 下</p>\n<p>mount /dev/sda1 /mnt/boot</p>\n<p>df 查看挂载情况</p>\n<h3 id="%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6%E6%BA%90">编辑软件源<a class="anchor" href="#%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6%E6%BA%90">§</a></h3>\n<p>nano /etc/pacman.d/mirrorlist  #fdisk -k 删除多余的源，fdisk -x 退出 y 回车\n我选了下面三个，选一个也行\n<a href="https://mirrors.tuna.tsinghua.edu.cn/">https://mirrors.tuna.tsinghua.edu.cn/</a>\n<a href="http://mirrors.tuna.tsinghua.edu.cn">mirrors.tuna.tsinghua.edu.cn</a>\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/">https://mirrors.tuna.tsinghua.edu.cn/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux/">http://mirrors.163.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.aliyun.com/archlinux/">http://mirrors.aliyun.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch</p>\n<p>Server = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/">https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/">https://mirrors.tuna.tsinghua.edu.cn/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux/">http://mirrors.163.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux-cn/">http://mirrors.163.com/archlinux-cn/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch</p>\n<p>更新系统\npacman -Syy</p>\n<h3 id="%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F">安装系统<a class="anchor" href="#%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>安装必须的软件包 （不建议）</p>\n<p>pacstrap /mnt base linux linux-firmware</p>\n<p>安装加强版的软件包 （建议）</p>\n<p>pacstrap /mnt base linux linux-firmware base-devel networkmanager intel-ucode vim git openssh net-tools</p>\n<p>用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置UUID 或卷标)：</p>\n<p>genfstab -U /mnt &gt;&gt; /mnt/etc/fstab</p>\n<p>cat /mnt/etc/fstab\n检查\nvim /mnt/etc/fstab</p>\n<h3 id="change-root-%E5%88%B0%E6%96%B0%E5%AE%89%E8%A3%85%E7%9A%84%E7%B3%BB%E7%BB%9F">Change root 到新安装的系统<a class="anchor" href="#change-root-%E5%88%B0%E6%96%B0%E5%AE%89%E8%A3%85%E7%9A%84%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>arch-chroot /mnt</p>\n<p>#设置时区：\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</p>\n<p>#同步时区\nhwclock --systohc</p>\n<p>安装vim\npacman -S vim</p>\n<p>本地化：</p>\n<p>设置系统语言</p>\n<p>vim /etc/locale.gen\nnano /etc/locale.gen</p>\n<p>把 en_US.UTF-8 UTF-8和zh_CN.UTF-8 UTF-8注释都去掉之后 按esc退出编辑模式，然后 :wq 保存退出</p>\n<p>生成一下语言</p>\n<p>locale-gen</p>\n<p>最后设置缺省的语言，这里推荐使用英文，不然到时候进入命令模式的时候会出现中文乱码</p>\n<p>echo LANG=en_US.UTF-8 &gt;&gt; /etc/locale.conf\necho LANG=zh_CN.UTF-8 &gt;&gt; /etc/locale.conf\nsudo vim /etc/locale.conf</p>\n<p>这里使用一个箭头或者两个箭头都可以</p>\n<p>设置 主机名</p>\n<p>echo archlinux &gt;&gt; /etc/hostname</p>\n<p>#网络配置\nvim /etc/hosts  #输入下面内容</p>\n<p>127.0.0.1 localhost\n::1 localhost\n127.0.1.1 archlinux.localdomain archlinux</p>\n<p>127.0.0.1    localhost    localhost\n::1          localhost   localhost\n127.0.1.1    archlinux.localdomain    archlinux</p>\n<p>保存并退出</p>\n<p>安装网络管理（如果不安装这个服务的话，每次开机都得重新设置网络）\npacman -S networkmanager\npacman -S net-tools openssh\n开机启动\nsystemctl enable NetworkManager sshd</p>\n<p>设置root密码\npasswd</p>\n<p>安装一个其他用户\nuseradd -m -g wheel chenan</p>\n<p>passwd chenan</p>\n<p>pacman -S sudo</p>\n<p>visudo   # 去掉%wheel=（ALL）ALL 前面的#号</p>\n<h3 id="%E5%AE%89%E8%A3%85grub">安装grub<a class="anchor" href="#%E5%AE%89%E8%A3%85grub">§</a></h3>\n<p>重新生成ramdisk环境\nmkinitcpio -p linux</p>\n<p>pacman -S grub efibootmgr\ngrub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg</p>\n<p>exit 或按 Ctrl+d 退出 chroot 环境。</p>\n<p>可选用 umount -R /mnt 手动卸载被挂载的分区：这有助于发现任何「繁忙」的分区，并通过 fuser(1) 查找原因。</p>\n<p>最后，通过执行 reboot 重启系统</p>\n<h2 id="%E5%86%8D%E7%94%A8ssh%E8%BD%AF%E4%BB%B6%E7%99%BB%E5%BD%95%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E5%92%8C%E6%9C%8D%E5%8A%A1">再用ssh软件登录，安装桌面和服务<a class="anchor" href="#%E5%86%8D%E7%94%A8ssh%E8%BD%AF%E4%BB%B6%E7%99%BB%E5%BD%95%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E5%92%8C%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h3 id="%E6%B7%BB%E5%8A%A0%E6%B8%85%E5%8D%8E%E6%BA%90">添加清华源<a class="anchor" href="#%E6%B7%BB%E5%8A%A0%E6%B8%85%E5%8D%8E%E6%BA%90">§</a></h3>\n<p>sudo vim /etc/pacman.conf\n把multilib和它下面一行的 # 去掉，具体是把光标移到 # 那，按 x ，然后在文件里添加 archlinuxcn 源，按 i 输入\n[archlinuxcn]\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch">https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch</a></p>\n<p>sudo pacman -Syu</p>\n<p>sudo pacman -S archlinuxcn-keyring</p>\n<p>sudo pacman -Syyu   #更新到最新系统</p>\n<h3 id="%E5%AE%89%E8%A3%85x-%E6%9C%8D%E5%8A%A1">安装x 服务<a class="anchor" href="#%E5%AE%89%E8%A3%85x-%E6%9C%8D%E5%8A%A1">§</a></h3>\n<p>sudo pacman -S xorg</p>\n<h3 id="%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83">安装桌面环境<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83">§</a></h3>\n<p>sudo pacman -S xfce4 xfce4-goodies</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93">安装字体<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93">§</a></h3>\n<p>sudo pacman -S ttf-dejavu wqy-bitmapfont wqy-microhei wqy-zenhei noto-fonts noto-fonts-emoji</p>\n<h3 id="%E5%AE%89%E8%A3%85ligthdm">安装ligthdm<a class="anchor" href="#%E5%AE%89%E8%A3%85ligthdm">§</a></h3>\n<p>pacman -S lightdm lightdm-gtk-greeter</p>\n<p>sudo pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings\nsystemctl enable lightdm</p>\n<p>systemctl enable lightdm.service</p>\n<p>从图形界面进入到命令行界面</p>\n<p>systemctl disable lightdm.service\n从命令行进入到图形界面</p>\n<p>systemctl enable lightdm.service\n然后</p>\n<p>systemctl start lightdm.service</p>\n<h3 id="%E6%B5%8B%E8%AF%95%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">测试开启桌面<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">§</a></h3>\n<p>sudo systemctl start lightdm.service</p>\n<h3 id="%E8%87%AA%E5%8A%A8%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">自动开启桌面<a class="anchor" href="#%E8%87%AA%E5%8A%A8%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">§</a></h3>\n<p>systemctl enable lightdm.service</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%A3%B0%E5%8D%A1%E9%A9%B1%E5%8A%A8">安装声卡驱动<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%A3%B0%E5%8D%A1%E9%A9%B1%E5%8A%A8">§</a></h3>\n<p>sudo pacman -S alsa-utils pulseaudio-alsa</p>\n<h3 id="%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8">虚拟机显卡驱动<a class="anchor" href="#%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8">§</a></h3>\n<p>pcaman -S xf86-video-vesa</p>\n<h3 id="%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E5%95%86%E5%BA%97">安装软件商店<a class="anchor" href="#%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E5%95%86%E5%BA%97">§</a></h3>\n<p>sudo pacman -S pamac</p>\n<h3 id="%E5%AE%89%E8%A3%85yay">安装yay<a class="anchor" href="#%E5%AE%89%E8%A3%85yay">§</a></h3>\n<p>sudo pacman -S yay\nsudo pacman -S pcaman</p>\n<h3 id="%E8%8B%B1%E6%96%87%E6%94%B9%E4%B8%AD%E6%96%87">英文改中文<a class="anchor" href="#%E8%8B%B1%E6%96%87%E6%94%B9%E4%B8%AD%E6%96%87">§</a></h3>\n<p>sudo vim /etc/locale.conf\nLANG=en_US.UTF-8  改成 LANG=zh_CN.UTF-8</p>\n<h3 id="%E6%8C%89%E7%85%A7%E5%AE%98%E7%BD%91%E6%95%99%E7%A8%8B%E5%AE%89%E8%A3%85vmware-tools">按照官网教程安装VMware Tools<a class="anchor" href="#%E6%8C%89%E7%85%A7%E5%AE%98%E7%BD%91%E6%95%99%E7%A8%8B%E5%AE%89%E8%A3%85vmware-tools">§</a></h3>\n<p><a href="https://wiki.archlinux.org/index.php/VMware/Install_Arch_Linux_as_a_guest">https://wiki.archlinux.org/index.php/VMware/Install_Arch_Linux_as_a_guest</a></p>\n<p>sudo pacman -S xf86-input-vmmouse xf86-video-vmware mesa</p>\n<p>sudo pacman -S open-vm-tools gtkmm3</p>\n<p>sudo systemctl start vmtoolsd.service</p>\n<p>sudo systemctl enable vmtoolsd.service</p>\n<p>sudo systemctl start vmware-vmblock-fuse.service</p>\n<p>sudo systemctl enable vmware-vmblock-fuse.service</p>\n<p>sudo pacman -S gtkmm gtk2</p>\n<p>sudo vim /etc/mkinitcpio.conf\nMODULES=(）前面加# 下一行加上下面的代码\nMODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)</p>\n<h3 id="xorg%E8%AE%BE%E7%BD%AE">Xorg设置<a class="anchor" href="#xorg%E8%AE%BE%E7%BD%AE">§</a></h3>\n<p>pacman -S xf86-input-vmmouse xf86-video-vmware mesa\nyay -S xf86-input-vmmouse xf86-video-vmware mesa</p>\n<p>vim /etc/X11/Xwrapper.config</p>\n<p>needs_root_rights=yes</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%B0%8F%E4%BC%81%E9%B9%85">安装小企鹅<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%B0%8F%E4%BC%81%E9%B9%85">§</a></h3>\n<p>sudo pacman -S fcitx fcitx-im fcitx-configtool</p>\n<p>sudo pacman -S fcitx fcitx-im</p>\n<h3 id="%E9%85%8D%E7%BD%AE%E5%B0%8F%E4%BC%81%E9%B9%85%E8%BE%93%E5%85%A5%E6%B3%95">配置小企鹅输入法<a class="anchor" href="#%E9%85%8D%E7%BD%AE%E5%B0%8F%E4%BC%81%E9%B9%85%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo vim ~/.xprofile</p>\n<p>在文件中加入如下几行配置：</p>\n<p>#fcitx\nexport LC_ALL=zh_CN.UTF-8\nexport GTK_IM_MODULE=fcitx<br>\nexport QT_IM_MODULE=fcitx<br>\nexport XMODIFIERS=&quot;@im=fcitx&quot;</p>\n<h3 id="%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95">安装搜狗输入法<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo pacman -S yay\nyay -S fcitx-sogoupinyin\nyay -S fcitx-qt4</p>\n<p>从AUR下载安装包并安装\n打开https://aur.archlinux.org/\n<a href="https://aur.archlinux.org/packages/deepin.com.qq.im.light/">https://aur.archlinux.org/packages/deepin.com.qq.im.light/</a>\n解压\ntar -zxvf deepin.com.qq.im.light.tar.gz\n在解压后的目录输入\nmakepkg -s\n编译完成后会生成一个.pkg.tar.xz的文件,再用pacman -U执行本地安装\npacman -U deepin.com.qq.im.light-7.9.14308deepin8-4-x86_64.pkg.tar.zst</p>\n<p>tar -zxvf  deepin-wine-wechat.tar.gz</p>\n<p>pacman -U deepin.com.qq.im.light.tar.gz</p>\n<h3 id="%E8%B0%B7%E6%AD%8C%E8%BE%93%E5%85%A5%E6%B3%95">谷歌输入法<a class="anchor" href="#%E8%B0%B7%E6%AD%8C%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo pacman -S fcitx-googlepinyin</p>\n<h3 id="%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85">常用软件安装<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85">§</a></h3>\n<p>wps</p>\n<p><a href="https://linux.wps.cn/">https://linux.wps.cn/</a>\nyay -S wps-office\n安装中文\nyay -S wps-office-mui-zh-cn</p>\n<p>可以到软件商店设置里面开启AUR\n找到wps-office-mui-zh-cn 点击构建  耐心等待几分钟，安装后 新建一个文档\n右上角有个A字，点击，就可以选择中文，重启WPS 就是中文的了</p>\n<p>yaourt -S <a href="http://deepin.com.qq.im">deepin.com.qq.im</a></p>\n<p>yaourt -S deepin-wine deepin-wine32</p>\n<p>wps 依赖字体</p>\n<p>sudo pacman -S ttf-wps-fonts</p>\n<p>google-chrome\nsudo pacman -S google-chrome</p>\n<p>Markdown编辑器\nsudo pacman -S typora</p>\n<p>网易云音乐\nsudo pacman -S netease-cloud-music\nyaourt -S netease-cloud-music</p>\n<p><a href="https://www.bilibili.com/video/BV14J411i72o?from=search&amp;seid=10908065740456618903">https://www.bilibili.com/video/BV14J411i72o?from=search&amp;seid=10908065740456618903</a>\n<a href="https://github.com/xylzq/arch">https://github.com/xylzq/arch</a></p>\n<h3 id="%E5%85%B3%E4%BA%8Earch%E7%9A%84%E4%B8%80%E4%BA%9B%E5%AE%9E%E7%94%A8%E8%BD%AF%E4%BB%B6">关于arch的一些实用软件<a class="anchor" href="#%E5%85%B3%E4%BA%8Earch%E7%9A%84%E4%B8%80%E4%BA%9B%E5%AE%9E%E7%94%A8%E8%BD%AF%E4%BB%B6">§</a></h3>\n<p>1.录屏软件</p>\n<p>sudo pacman -S simplescreenrecorder\n2.显示按键软件</p>\n<p>sudo pacman -S screenkey\n3.剪辑视频软件</p>\n<p>sudo pacman -S kdenlive\n汉化\nsudo mv <a href="http://kdenlive.mo">kdenlive.mo</a> /usr/share/locale/zh_CN/LC_MESSAGES/</p>\n<p><a href="http://pan.baidu.com/s/1dFF8kp">pan.baidu.com/s/1dFF8kp</a>\n4.修图软件</p>\n<p>sudo pacman -S gimp</p>\n<p>安装坚果云\nsudo pacman -S nutstore</p>\n<p>安装微信\nsudo pacman -S electronic-wechat</p>\n<p>安装\nsudo pacman -S yaourt</p>\n<p>网盘同步Rclone\nsudo pacman -S rclone</p>\n<p>gitkraken -Git管理工具</p>\n<p>sudo pacman -S gitkraken\nVscode:visual-studio-code-bin\nyay -S visual-studio-code-bin</p>\n<p>Virtualbox\nsudo pacman -S virtualbox</p>\n<p>aur qq\n<a href="https://aur.archlinux.org/packages/deepin.com.qq.im.light/">https://aur.archlinux.org/packages/deepin.com.qq.im.light/</a></p>\n<p><a href="https://github.com/orangbus/tool">https://github.com/orangbus/tool</a></p>\n<p>画图软件 KRITA</p>\n<p>安装AppImage软件\n添加可执行权限\nchmod a+x <em>.AppImage\n执行它！\n./</em>.AppImage</p>\n<p>chmod a+x Qv2ray.v2.7.0-pre1.linux-x64.AppImage\n./Qv2ray.v2.7.0-pre1.linux-x64.AppImage</p>\n<h3 id="%E4%B8%80%E4%B8%AA%E5%B0%86deb%E5%8C%85%E8%BD%AC%E6%8D%A2%E6%88%90pkg%E5%8C%85%E7%9A%84%E8%BD%AF%E4%BB%B6">一个将deb包转换成pkg包的软件<a class="anchor" href="#%E4%B8%80%E4%B8%AA%E5%B0%86deb%E5%8C%85%E8%BD%AC%E6%8D%A2%E6%88%90pkg%E5%8C%85%E7%9A%84%E8%BD%AF%E4%BB%B6">§</a></h3>\n<p>debtap配置安装\nsudo pacman -S pkgfile\ngit clone <a href="https://github.com/helixarch/debtap">https://github.com/helixarch/debtap</a>\ncd debtap\nsudo cp debtap /usr/local/bin\nsudo debtap -u</p>\n<p>sudo vim /usr/bin/debtap</p>\n<p>使用方法\nsudo debtap xxxx.deb</p>\n<p>安装时会提示输入包名，以及license。包名随意，license就填GPL</p>\n<p>安装转换好的本地包\nsudo pacman -U xxx.tar.xz</p>\n<p>sudo debtap wps-office_11.1.0.9719_amd64.deb</p>\n<p>sudo pacman -U wps-office-11.1.0.9719-1-x86_64.pkg.tar.zst</p>\n<p>sudo debtap Tenvideo_universal_1.0.10_amd64.deb</p>\n<p>sudo pacman -U tenvideo-universal-1.0.10-1-x86_64.pkg.tar.zst</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8xdroid">安装安卓模拟器xDroid<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8xdroid">§</a></h3>\n<p><a href="https://www.linzhuotech.com/">https://www.linzhuotech.com/</a></p>\n<p>系统更新\nsudo pacman -Syu</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%AE%98%E6%96%B9%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B">官方安装教程<a class="anchor" href="#%E5%AE%98%E6%96%B9%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B">§</a></h2>\n<p><a href="https://wiki.archlinux.org/index.php/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)">https://wiki.archlinux.org/index.php/Installation_guide_(简体中文)</a></p>\n<h2 id="%E6%89%8B%E6%95%B2%E9%94%AE%E7%9B%98%E9%83%A8%E5%88%86">手敲键盘部分<a class="anchor" href="#%E6%89%8B%E6%95%B2%E9%94%AE%E7%9B%98%E9%83%A8%E5%88%86">§</a></h2>\n<p>开启SSH</p>\n<p>首先设置root的密码 passwd</p>\n<p>回车之后输入root的密码即可</p>\n<p>打开sshd</p>\n<p>systemctl start sshd</p>\n<p>查看ip地址</p>\n<p>ip addr</p>\n<p>4、安装工具\npacman -Syy\npacman -S net-tools openssh</p>\n<p>5、启动 ssh</p>\n<p>systemctl start sshd</p>\n<p>dhcpcd  #网线\nwifi-menu # wifi\nping <a href="http://www.baidu.com">www.baidu.com</a></p>\n<p>ctrt+c  #退出ping</p>\n<h2 id="%E5%A4%8D%E5%88%B6%E7%B2%98%E5%B8%96%E9%83%A8%E5%88%86">复制粘帖部分<a class="anchor" href="#%E5%A4%8D%E5%88%B6%E7%B2%98%E5%B8%96%E9%83%A8%E5%88%86">§</a></h2>\n<p>用ssh软件登录</p>\n<p>windows推荐Xshell        linux推荐putty</p>\n<p>登录后就可以复制下面代码敲回车就可以了。</p>\n<h3 id="%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA">硬盘分区<a class="anchor" href="#%E7%A1%AC%E7%9B%98%E5%88%86%E5%8C%BA">§</a></h3>\n<p>查看磁盘信息  sda</p>\n<p>fdisk -l  # 查看磁盘信息  我查看的是sda 下面请把sda改成你的就可以了</p>\n<p>硬盘分区有两种方法，请选一种 cfdisk是图像化的  fdisk是纯命令的\n#方法一：图像化的操作\ncfdisk /dev/sda\n分别用new新建三个分区 分别选择Type 选择类型\nsda1   512M  EFI system\nsda3    4G      linux swap      # 不要大于虚拟机实际内存\nsda2   默认剩余全部 linux filesystem<br>\n分好后选择Write写入 选择\nQuit退出</p>\n<p>#方法二：纯命令的操作</p>\n<p>fdisk /dev/sda\n输入m #显示菜单\n输入p #显示硬盘情况\n输入M 输入g   # 硬盘更改成GPT分区</p>\n<p>输入n # 分区\n先选择1 回车再回车再输入+512M\n输入t 输入1  # 可以输入L查看格式\n输入W\n输入m<br>\n输入n输入n # 分区\n先选择3 回车再回车再输入+4G\n输入t 输入19\n输入W\n输入m<br>\n输入n输入n # 分区\n先选择2 回车再回车再回车<br>\n#剩余目录会自动全部分配到这里\nsda2无需更改格式 默认是就是linux filesystem\n输入W\n最后输入q退出分区\n下面命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的</p>\n<p>#上面是两种硬盘分区教程，随便选一种吧，下面要格式化硬盘\nfdisk -l  # 查看磁盘信息\n下面的命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的</p>\n<h3 id="%E6%8C%82%E8%BD%BD%E5%B9%B6%E6%A0%BC%E5%BC%8F%E5%8C%96">挂载并格式化<a class="anchor" href="#%E6%8C%82%E8%BD%BD%E5%B9%B6%E6%A0%BC%E5%BC%8F%E5%8C%96">§</a></h3>\n<p>mkfs.fat -F32 /dev/sda1\nmkfs.ext4 /dev/sda2\nmkswap /dev/sda3\nswapon /dev/sda3</p>\n<p>挂载根分区到/mnt下</p>\n<p>mount /dev/sda2 /mnt</p>\n<p>创建 boot 文件夹 来挂载EFI分区</p>\n<p>mkdir /mnt/boot</p>\n<p>挂载EFI分区到 /mnt/boot 下</p>\n<p>mount /dev/sda1 /mnt/boot</p>\n<p>df 查看挂载情况</p>\n<h3 id="%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6%E6%BA%90">编辑软件源<a class="anchor" href="#%E7%BC%96%E8%BE%91%E8%BD%AF%E4%BB%B6%E6%BA%90">§</a></h3>\n<p>nano /etc/pacman.d/mirrorlist  #fdisk -k 删除多余的源，fdisk -x 退出 y 回车\n我选了下面三个，选一个也行\n<a href="https://mirrors.tuna.tsinghua.edu.cn/">https://mirrors.tuna.tsinghua.edu.cn/</a>\n<a href="http://mirrors.tuna.tsinghua.edu.cn">mirrors.tuna.tsinghua.edu.cn</a>\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/">https://mirrors.tuna.tsinghua.edu.cn/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux/">http://mirrors.163.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.aliyun.com/archlinux/">http://mirrors.aliyun.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch</p>\n<p>Server = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/">https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/">https://mirrors.tuna.tsinghua.edu.cn/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux/">http://mirrors.163.com/archlinux/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch\nServer = <a href="http://mirrors.163.com/archlinux-cn/">http://mirrors.163.com/archlinux-cn/</a><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>e</mi><mi>p</mi><mi>o</mi><mi mathvariant="normal">/</mi><mi>o</mi><mi>s</mi><mi mathvariant="normal">/</mi></mrow><annotation encoding="application/x-tex">repo/os/</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">e</span><span class="mord mathnormal">p</span><span class="mord mathnormal">o</span><span class="mord">/</span><span class="mord mathnormal">o</span><span class="mord mathnormal">s</span><span class="mord">/</span></span></span></span>arch</p>\n<p>更新系统\npacman -Syy</p>\n<h3 id="%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F">安装系统<a class="anchor" href="#%E5%AE%89%E8%A3%85%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>安装必须的软件包 （不建议）</p>\n<p>pacstrap /mnt base linux linux-firmware</p>\n<p>安装加强版的软件包 （建议）</p>\n<p>pacstrap /mnt base linux linux-firmware base-devel networkmanager intel-ucode vim git openssh net-tools</p>\n<p>用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置UUID 或卷标)：</p>\n<p>genfstab -U /mnt &gt;&gt; /mnt/etc/fstab</p>\n<p>cat /mnt/etc/fstab\n检查\nvim /mnt/etc/fstab</p>\n<h3 id="change-root-%E5%88%B0%E6%96%B0%E5%AE%89%E8%A3%85%E7%9A%84%E7%B3%BB%E7%BB%9F">Change root 到新安装的系统<a class="anchor" href="#change-root-%E5%88%B0%E6%96%B0%E5%AE%89%E8%A3%85%E7%9A%84%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>arch-chroot /mnt</p>\n<p>#设置时区：\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</p>\n<p>#同步时区\nhwclock --systohc</p>\n<p>安装vim\npacman -S vim</p>\n<p>本地化：</p>\n<p>设置系统语言</p>\n<p>vim /etc/locale.gen\nnano /etc/locale.gen</p>\n<p>把 en_US.UTF-8 UTF-8和zh_CN.UTF-8 UTF-8注释都去掉之后 按esc退出编辑模式，然后 :wq 保存退出</p>\n<p>生成一下语言</p>\n<p>locale-gen</p>\n<p>最后设置缺省的语言，这里推荐使用英文，不然到时候进入命令模式的时候会出现中文乱码</p>\n<p>echo LANG=en_US.UTF-8 &gt;&gt; /etc/locale.conf\necho LANG=zh_CN.UTF-8 &gt;&gt; /etc/locale.conf\nsudo vim /etc/locale.conf</p>\n<p>这里使用一个箭头或者两个箭头都可以</p>\n<p>设置 主机名</p>\n<p>echo archlinux &gt;&gt; /etc/hostname</p>\n<p>#网络配置\nvim /etc/hosts  #输入下面内容</p>\n<p>127.0.0.1 localhost\n::1 localhost\n127.0.1.1 archlinux.localdomain archlinux</p>\n<p>127.0.0.1    localhost    localhost\n::1          localhost   localhost\n127.0.1.1    archlinux.localdomain    archlinux</p>\n<p>保存并退出</p>\n<p>安装网络管理（如果不安装这个服务的话，每次开机都得重新设置网络）\npacman -S networkmanager\npacman -S net-tools openssh\n开机启动\nsystemctl enable NetworkManager sshd</p>\n<p>设置root密码\npasswd</p>\n<p>安装一个其他用户\nuseradd -m -g wheel chenan</p>\n<p>passwd chenan</p>\n<p>pacman -S sudo</p>\n<p>visudo   # 去掉%wheel=（ALL）ALL 前面的#号</p>\n<h3 id="%E5%AE%89%E8%A3%85grub">安装grub<a class="anchor" href="#%E5%AE%89%E8%A3%85grub">§</a></h3>\n<p>重新生成ramdisk环境\nmkinitcpio -p linux</p>\n<p>pacman -S grub efibootmgr\ngrub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg</p>\n<p>exit 或按 Ctrl+d 退出 chroot 环境。</p>\n<p>可选用 umount -R /mnt 手动卸载被挂载的分区：这有助于发现任何「繁忙」的分区，并通过 fuser(1) 查找原因。</p>\n<p>最后，通过执行 reboot 重启系统</p>\n<h2 id="%E5%86%8D%E7%94%A8ssh%E8%BD%AF%E4%BB%B6%E7%99%BB%E5%BD%95%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E5%92%8C%E6%9C%8D%E5%8A%A1">再用ssh软件登录，安装桌面和服务<a class="anchor" href="#%E5%86%8D%E7%94%A8ssh%E8%BD%AF%E4%BB%B6%E7%99%BB%E5%BD%95%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E5%92%8C%E6%9C%8D%E5%8A%A1">§</a></h2>\n<h3 id="%E6%B7%BB%E5%8A%A0%E6%B8%85%E5%8D%8E%E6%BA%90">添加清华源<a class="anchor" href="#%E6%B7%BB%E5%8A%A0%E6%B8%85%E5%8D%8E%E6%BA%90">§</a></h3>\n<p>sudo vim /etc/pacman.conf\n把multilib和它下面一行的 # 去掉，具体是把光标移到 # 那，按 x ，然后在文件里添加 archlinuxcn 源，按 i 输入\n[archlinuxcn]\nServer = <a href="https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch">https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch</a></p>\n<p>sudo pacman -Syu</p>\n<p>sudo pacman -S archlinuxcn-keyring</p>\n<p>sudo pacman -Syyu   #更新到最新系统</p>\n<h3 id="%E5%AE%89%E8%A3%85x-%E6%9C%8D%E5%8A%A1">安装x 服务<a class="anchor" href="#%E5%AE%89%E8%A3%85x-%E6%9C%8D%E5%8A%A1">§</a></h3>\n<p>sudo pacman -S xorg</p>\n<h3 id="%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83">安装桌面环境<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%A1%8C%E9%9D%A2%E7%8E%AF%E5%A2%83">§</a></h3>\n<p>sudo pacman -S xfce4 xfce4-goodies</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93">安装字体<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93">§</a></h3>\n<p>sudo pacman -S ttf-dejavu wqy-bitmapfont wqy-microhei wqy-zenhei noto-fonts noto-fonts-emoji</p>\n<h3 id="%E5%AE%89%E8%A3%85ligthdm">安装ligthdm<a class="anchor" href="#%E5%AE%89%E8%A3%85ligthdm">§</a></h3>\n<p>pacman -S lightdm lightdm-gtk-greeter</p>\n<p>sudo pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings\nsystemctl enable lightdm</p>\n<p>systemctl enable lightdm.service</p>\n<p>从图形界面进入到命令行界面</p>\n<p>systemctl disable lightdm.service\n从命令行进入到图形界面</p>\n<p>systemctl enable lightdm.service\n然后</p>\n<p>systemctl start lightdm.service</p>\n<h3 id="%E6%B5%8B%E8%AF%95%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">测试开启桌面<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">§</a></h3>\n<p>sudo systemctl start lightdm.service</p>\n<h3 id="%E8%87%AA%E5%8A%A8%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">自动开启桌面<a class="anchor" href="#%E8%87%AA%E5%8A%A8%E5%BC%80%E5%90%AF%E6%A1%8C%E9%9D%A2">§</a></h3>\n<p>systemctl enable lightdm.service</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%A3%B0%E5%8D%A1%E9%A9%B1%E5%8A%A8">安装声卡驱动<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%A3%B0%E5%8D%A1%E9%A9%B1%E5%8A%A8">§</a></h3>\n<p>sudo pacman -S alsa-utils pulseaudio-alsa</p>\n<h3 id="%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8">虚拟机显卡驱动<a class="anchor" href="#%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%98%BE%E5%8D%A1%E9%A9%B1%E5%8A%A8">§</a></h3>\n<p>pcaman -S xf86-video-vesa</p>\n<h3 id="%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E5%95%86%E5%BA%97">安装软件商店<a class="anchor" href="#%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6%E5%95%86%E5%BA%97">§</a></h3>\n<p>sudo pacman -S pamac</p>\n<h3 id="%E5%AE%89%E8%A3%85yay">安装yay<a class="anchor" href="#%E5%AE%89%E8%A3%85yay">§</a></h3>\n<p>sudo pacman -S yay\nsudo pacman -S pcaman</p>\n<h3 id="%E8%8B%B1%E6%96%87%E6%94%B9%E4%B8%AD%E6%96%87">英文改中文<a class="anchor" href="#%E8%8B%B1%E6%96%87%E6%94%B9%E4%B8%AD%E6%96%87">§</a></h3>\n<p>sudo vim /etc/locale.conf\nLANG=en_US.UTF-8  改成 LANG=zh_CN.UTF-8</p>\n<h3 id="%E6%8C%89%E7%85%A7%E5%AE%98%E7%BD%91%E6%95%99%E7%A8%8B%E5%AE%89%E8%A3%85vmware-tools">按照官网教程安装VMware Tools<a class="anchor" href="#%E6%8C%89%E7%85%A7%E5%AE%98%E7%BD%91%E6%95%99%E7%A8%8B%E5%AE%89%E8%A3%85vmware-tools">§</a></h3>\n<p><a href="https://wiki.archlinux.org/index.php/VMware/Install_Arch_Linux_as_a_guest">https://wiki.archlinux.org/index.php/VMware/Install_Arch_Linux_as_a_guest</a></p>\n<p>sudo pacman -S xf86-input-vmmouse xf86-video-vmware mesa</p>\n<p>sudo pacman -S open-vm-tools gtkmm3</p>\n<p>sudo systemctl start vmtoolsd.service</p>\n<p>sudo systemctl enable vmtoolsd.service</p>\n<p>sudo systemctl start vmware-vmblock-fuse.service</p>\n<p>sudo systemctl enable vmware-vmblock-fuse.service</p>\n<p>sudo pacman -S gtkmm gtk2</p>\n<p>sudo vim /etc/mkinitcpio.conf\nMODULES=(）前面加# 下一行加上下面的代码\nMODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)</p>\n<h3 id="xorg%E8%AE%BE%E7%BD%AE">Xorg设置<a class="anchor" href="#xorg%E8%AE%BE%E7%BD%AE">§</a></h3>\n<p>pacman -S xf86-input-vmmouse xf86-video-vmware mesa\nyay -S xf86-input-vmmouse xf86-video-vmware mesa</p>\n<p>vim /etc/X11/Xwrapper.config</p>\n<p>needs_root_rights=yes</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%B0%8F%E4%BC%81%E9%B9%85">安装小企鹅<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%B0%8F%E4%BC%81%E9%B9%85">§</a></h3>\n<p>sudo pacman -S fcitx fcitx-im fcitx-configtool</p>\n<p>sudo pacman -S fcitx fcitx-im</p>\n<h3 id="%E9%85%8D%E7%BD%AE%E5%B0%8F%E4%BC%81%E9%B9%85%E8%BE%93%E5%85%A5%E6%B3%95">配置小企鹅输入法<a class="anchor" href="#%E9%85%8D%E7%BD%AE%E5%B0%8F%E4%BC%81%E9%B9%85%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo vim ~/.xprofile</p>\n<p>在文件中加入如下几行配置：</p>\n<p>#fcitx\nexport LC_ALL=zh_CN.UTF-8\nexport GTK_IM_MODULE=fcitx<br>\nexport QT_IM_MODULE=fcitx<br>\nexport XMODIFIERS=&quot;@im=fcitx&quot;</p>\n<h3 id="%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95">安装搜狗输入法<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo pacman -S yay\nyay -S fcitx-sogoupinyin\nyay -S fcitx-qt4</p>\n<p>从AUR下载安装包并安装\n打开https://aur.archlinux.org/\n<a href="https://aur.archlinux.org/packages/deepin.com.qq.im.light/">https://aur.archlinux.org/packages/deepin.com.qq.im.light/</a>\n解压\ntar -zxvf deepin.com.qq.im.light.tar.gz\n在解压后的目录输入\nmakepkg -s\n编译完成后会生成一个.pkg.tar.xz的文件,再用pacman -U执行本地安装\npacman -U deepin.com.qq.im.light-7.9.14308deepin8-4-x86_64.pkg.tar.zst</p>\n<p>tar -zxvf  deepin-wine-wechat.tar.gz</p>\n<p>pacman -U deepin.com.qq.im.light.tar.gz</p>\n<h3 id="%E8%B0%B7%E6%AD%8C%E8%BE%93%E5%85%A5%E6%B3%95">谷歌输入法<a class="anchor" href="#%E8%B0%B7%E6%AD%8C%E8%BE%93%E5%85%A5%E6%B3%95">§</a></h3>\n<p>sudo pacman -S fcitx-googlepinyin</p>\n<h3 id="%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85">常用软件安装<a class="anchor" href="#%E5%B8%B8%E7%94%A8%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85">§</a></h3>\n<p>wps</p>\n<p><a href="https://linux.wps.cn/">https://linux.wps.cn/</a>\nyay -S wps-office\n安装中文\nyay -S wps-office-mui-zh-cn</p>\n<p>可以到软件商店设置里面开启AUR\n找到wps-office-mui-zh-cn 点击构建  耐心等待几分钟，安装后 新建一个文档\n右上角有个A字，点击，就可以选择中文，重启WPS 就是中文的了</p>\n<p>yaourt -S <a href="http://deepin.com.qq.im">deepin.com.qq.im</a></p>\n<p>yaourt -S deepin-wine deepin-wine32</p>\n<p>wps 依赖字体</p>\n<p>sudo pacman -S ttf-wps-fonts</p>\n<p>google-chrome\nsudo pacman -S google-chrome</p>\n<p>Markdown编辑器\nsudo pacman -S typora</p>\n<p>网易云音乐\nsudo pacman -S netease-cloud-music\nyaourt -S netease-cloud-music</p>\n<p><a href="https://www.bilibili.com/video/BV14J411i72o?from=search&amp;seid=10908065740456618903">https://www.bilibili.com/video/BV14J411i72o?from=search&amp;seid=10908065740456618903</a>\n<a href="https://github.com/xylzq/arch">https://github.com/xylzq/arch</a></p>\n<h3 id="%E5%85%B3%E4%BA%8Earch%E7%9A%84%E4%B8%80%E4%BA%9B%E5%AE%9E%E7%94%A8%E8%BD%AF%E4%BB%B6">关于arch的一些实用软件<a class="anchor" href="#%E5%85%B3%E4%BA%8Earch%E7%9A%84%E4%B8%80%E4%BA%9B%E5%AE%9E%E7%94%A8%E8%BD%AF%E4%BB%B6">§</a></h3>\n<p>1.录屏软件</p>\n<p>sudo pacman -S simplescreenrecorder\n2.显示按键软件</p>\n<p>sudo pacman -S screenkey\n3.剪辑视频软件</p>\n<p>sudo pacman -S kdenlive\n汉化\nsudo mv <a href="http://kdenlive.mo">kdenlive.mo</a> /usr/share/locale/zh_CN/LC_MESSAGES/</p>\n<p><a href="http://pan.baidu.com/s/1dFF8kp">pan.baidu.com/s/1dFF8kp</a>\n4.修图软件</p>\n<p>sudo pacman -S gimp</p>\n<p>安装坚果云\nsudo pacman -S nutstore</p>\n<p>安装微信\nsudo pacman -S electronic-wechat</p>\n<p>安装\nsudo pacman -S yaourt</p>\n<p>网盘同步Rclone\nsudo pacman -S rclone</p>\n<p>gitkraken -Git管理工具</p>\n<p>sudo pacman -S gitkraken\nVscode:visual-studio-code-bin\nyay -S visual-studio-code-bin</p>\n<p>Virtualbox\nsudo pacman -S virtualbox</p>\n<p>aur qq\n<a href="https://aur.archlinux.org/packages/deepin.com.qq.im.light/">https://aur.archlinux.org/packages/deepin.com.qq.im.light/</a></p>\n<p><a href="https://github.com/orangbus/tool">https://github.com/orangbus/tool</a></p>\n<p>画图软件 KRITA</p>\n<p>安装AppImage软件\n添加可执行权限\nchmod a+x <em>.AppImage\n执行它！\n./</em>.AppImage</p>\n<p>chmod a+x Qv2ray.v2.7.0-pre1.linux-x64.AppImage\n./Qv2ray.v2.7.0-pre1.linux-x64.AppImage</p>\n<h3 id="%E4%B8%80%E4%B8%AA%E5%B0%86deb%E5%8C%85%E8%BD%AC%E6%8D%A2%E6%88%90pkg%E5%8C%85%E7%9A%84%E8%BD%AF%E4%BB%B6">一个将deb包转换成pkg包的软件<a class="anchor" href="#%E4%B8%80%E4%B8%AA%E5%B0%86deb%E5%8C%85%E8%BD%AC%E6%8D%A2%E6%88%90pkg%E5%8C%85%E7%9A%84%E8%BD%AF%E4%BB%B6">§</a></h3>\n<p>debtap配置安装\nsudo pacman -S pkgfile\ngit clone <a href="https://github.com/helixarch/debtap">https://github.com/helixarch/debtap</a>\ncd debtap\nsudo cp debtap /usr/local/bin\nsudo debtap -u</p>\n<p>sudo vim /usr/bin/debtap</p>\n<p>使用方法\nsudo debtap xxxx.deb</p>\n<p>安装时会提示输入包名，以及license。包名随意，license就填GPL</p>\n<p>安装转换好的本地包\nsudo pacman -U xxx.tar.xz</p>\n<p>sudo debtap wps-office_11.1.0.9719_amd64.deb</p>\n<p>sudo pacman -U wps-office-11.1.0.9719-1-x86_64.pkg.tar.zst</p>\n<p>sudo debtap Tenvideo_universal_1.0.10_amd64.deb</p>\n<p>sudo pacman -U tenvideo-universal-1.0.10-1-x86_64.pkg.tar.zst</p>\n<h3 id="%E5%AE%89%E8%A3%85%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8xdroid">安装安卓模拟器xDroid<a class="anchor" href="#%E5%AE%89%E8%A3%85%E5%AE%89%E5%8D%93%E6%A8%A1%E6%8B%9F%E5%99%A8xdroid">§</a></h3>\n<p><a href="https://www.linzhuotech.com/">https://www.linzhuotech.com/</a></p>\n<p>系统更新\nsudo pacman -Syu</p>'
        } }),
    'toc': true,
    'author': undefined,
    'contributors': [],
    'date': "2021-02-15T08:55:30.000Z",
    'updated': null,
    'excerpt': "官方安装教程 https://wiki.archlinux.org/index.php/Installation_guide_(简体中文) 手敲键盘部分 开启SSH 首先设置root的密码 passwd 回车之后输入root的密码即可 打开sshd systemctl start sshd 查看ip地址 ip addr 4、安装...",
    'cover': undefined,
    'comments': true,
    'categories': [
        "archlinux",
        "linux",
        "电脑系统"
    ],
    'tags': [
        "archlinux",
        "linux",
        "电脑系统"
    ],
    'abbrlink': 27,
    'slug': 27,
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
