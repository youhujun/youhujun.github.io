"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[2839],{6262:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,a]of s)e[i]=a;return e}},959:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>h,data:()=>n});var a=e(641);const t={},h=(0,e(6262).A)(t,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<h2 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置"><span>git配置</span></a></h2><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;用户名&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 邮箱</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置秘钥" tabindex="-1"><a class="header-anchor" href="#配置秘钥"><span>配置秘钥</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;邮箱&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>指定路径和名称</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该示例是在Linux下指定路径和文件名称</p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;邮箱&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/.ssh/id_rsa_git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配合前端防止报错" tabindex="-1"><a class="header-anchor" href="#配合前端防止报错"><span>配合前端防止报错</span></a></h3><p>这是因为npm包也放在了github上的缘故</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> url.&quot;https://&quot;.insteadOf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git://</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.sslVerify</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',13)]))}]]),n=JSON.parse('{"path":"/book/git/git-config/01-config.html","title":"配置与秘钥","lang":"zh-CN","frontmatter":{"title":"配置与秘钥","icon":"flat-color-icons:document","order":1,"category":["git"],"tag":["git"],"description":"git配置 全局配置 配置秘钥 指定路径和名称 提示 该示例是在Linux下指定路径和文件名称 配合前端防止报错 这是因为npm包也放在了github上的缘故","head":[["meta",{"property":"og:url","content":"https://www.youhujun.com/book/git/git-config/01-config.html"}],["meta",{"property":"og:site_name","content":"游鹄君博客"}],["meta",{"property":"og:title","content":"配置与秘钥"}],["meta",{"property":"og:description","content":"git配置 全局配置 配置秘钥 指定路径和名称 提示 该示例是在Linux下指定路径和文件名称 配合前端防止报错 这是因为npm包也放在了github上的缘故"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-13T08:47:37.000Z"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:modified_time","content":"2025-02-13T08:47:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置与秘钥\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-13T08:47:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"游鹄君\\",\\"url\\":\\"https://youhujun.github.io\\"}]}"]]},"headers":[{"level":2,"title":"git配置","slug":"git配置","link":"#git配置","children":[{"level":3,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":3,"title":"配置秘钥","slug":"配置秘钥","link":"#配置秘钥","children":[]},{"level":3,"title":"配合前端防止报错","slug":"配合前端防止报错","link":"#配合前端防止报错","children":[]}]}],"git":{"createdTime":1739403591000,"updatedTime":1739436457000,"contributors":[{"name":"youhujun","username":"youhujun","email":"2900976495@qq.com","commits":2}]},"readingTime":{"minutes":0.41,"words":124},"filePathRelative":"book/git/git-config/01-config.md","localizedDate":"2025年2月13日","excerpt":"<h2>git配置</h2>\\n<h3>全局配置</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> user.name</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"用户名\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);