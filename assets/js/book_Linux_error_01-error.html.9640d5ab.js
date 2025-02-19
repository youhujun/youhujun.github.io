"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[7456],{6262:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,a]of i)s[e]=a;return s}},1643:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>t,data:()=>l});var a=s(641);const n={},t=(0,s(6262).A)(n,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<h1 id="linux命令报错cannot-find-a-valid-baseurl-for-repo-centos-sclo-rh-x86-64" tabindex="-1"><a class="header-anchor" href="#linux命令报错cannot-find-a-valid-baseurl-for-repo-centos-sclo-rh-x86-64"><span>linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64</span></a></h1><div class="hint-container caution"><p class="hint-container-title">警告</p><p>CentOS7的SCL源在2024年6月30日停止维护了。 当scl源里面默认使用了centos官方的地址，无法连接，需要替换为阿里云</p></div><h2 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/yum.repos.d/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>先进行备份：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS-SCLo-scl.repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS-SCLo-scl.repo.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS-SCLo-scl-rh.repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS-SCLo-scl-rh.repo.bak</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>编辑新的源文件</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CentOS-SCLo-scl-rh.repo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>黏贴以下内容</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[centos-sclo-rh]</span></span>\n<span class="line"><span>name=CentOS-7 - SCLo rh</span></span>\n<span class="line"><span>baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/rh/</span></span>\n<span class="line"><span>gpgcheck=1</span></span>\n<span class="line"><span>enabled=1</span></span>\n<span class="line"><span>gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行命令</p>',12)]))}]]),l=JSON.parse('{"path":"/book/Linux/error/01-error.html","title":"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64","lang":"zh-CN","frontmatter":{"title":"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64","icon":"fluent:cloud-error-48-filled","order":1,"category":["linux"],"tag":["报错","error"],"description":"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64 警告 CentOS7的SCL源在2024年6月30日停止维护了。 当scl源里面默认使用了centos官方的地址，无法连接，需要替换为阿里云 解决问题 先进行备份： 编辑新的源文件 黏贴以下内容 再次执行命令","head":[["meta",{"property":"og:url","content":"https://www.youhujun.com/book/Linux/error/01-error.html"}],["meta",{"property":"og:site_name","content":"游鹄君博客"}],["meta",{"property":"og:title","content":"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64"}],["meta",{"property":"og:description","content":"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64 警告 CentOS7的SCL源在2024年6月30日停止维护了。 当scl源里面默认使用了centos官方的地址，无法连接，需要替换为阿里云 解决问题 先进行备份： 编辑新的源文件 黏贴以下内容 再次执行命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-15T08:58:54.000Z"}],["meta",{"property":"article:tag","content":"报错"}],["meta",{"property":"article:tag","content":"error"}],["meta",{"property":"article:modified_time","content":"2025-02-15T08:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"linux命令报错Cannot find a valid baseurl for repo: centos-sclo-rh/x86_64\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-15T08:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"游鹄君\\",\\"url\\":\\"https://youhujun.github.io\\"}]}"]]},"headers":[{"level":2,"title":"解决问题","slug":"解决问题","link":"#解决问题","children":[]}],"git":{"createdTime":1739609934000,"updatedTime":1739609934000,"contributors":[{"name":"youhujun","username":"youhujun","email":"youhu8888@163.com","commits":1}]},"readingTime":{"minutes":0.56,"words":169},"filePathRelative":"book/Linux/error/01-error.md","localizedDate":"2025年2月15日","excerpt":"\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">警告</p>\\n<p>CentOS7的SCL源在2024年6月30日停止维护了。 当scl源里面默认使用了centos官方的地址，无法连接，需要替换为阿里云</p>\\n</div>\\n<h2>解决问题</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">cd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> /etc/yum.repos.d/</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);