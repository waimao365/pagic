import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/myreadme.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/myreadme.html",
    'title': "Build personal blog at top speed",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Driven by Deno + react and escorted by Vercel, build personal blog at top speed</h1>\n<blockquote>\n<p>In Chinese Kung Fu, \'in the world of kung fu speed determines the winner\'. In the world of programming, how to quickly build a blog of your own? Then pagic + versel should be a good choice!</p>\n</blockquote>\n<h2 id="pagic">Pagic<a class="anchor" href="#pagic">§</a></h2>\n<p><a href="https://github.com/xcatliu/pagic">Pagic</a> It is a static website generator driven by DeNO + react. It has simple configuration, supports rendering MD / TSX files into static pages, and has a large number of official or third-party themes and plug-ins to extend, which means that you can freely develop and customize your favorite theme style or function plug-ins. What are the advantages of pagic over other static website generators?</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th></th>\n<th>Pagic</th>\n<th>VuePress</th>\n<th>Hexo</th>\n<th>Jekyll</th>\n<th>Hugo</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Support <code>md</code></td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n</tr>\n<tr>\n<td>React/Vue</td>\n<td>✓</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>SPA</td>\n<td>✓</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Allow <code>tsx</code> in config</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>...</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p>Pagic stands on the shoulders of giants and refers to the config options and documents of some other static site generators. Hereby, <a href="https://github.com/xcatliu/pagic">Pagic</a>  would like to express her sincere thanks to these open source projects and communities.</p>\n<p>How to use such a good pagic?</p>\n<p>First, install <a href="https://github.com/denoland/deno">Deno</a>:</p>\n<pre class="language-autoit"><code class="language-autoit"># Shell <span class="token punctuation">(</span>Mac<span class="token punctuation">,</span> Linux<span class="token punctuation">)</span><span class="token punctuation">:</span>\ncurl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p><img src="../assets/myreadme/1.png" alt="Install Deno"></p>\n<p>Then, install the latest version of <a href="https://github.com/xcatliu/pagic">Pagic</a>  :</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<p><img src="../assets/myreadme/2.png" alt="Install Pagic"></p>\n<p>Initialize the <a href="https://github.com/xcatliu/pagic">Pagic</a> project :</p>\n<pre class="language-autoit"><code class="language-autoit">mkdir site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> README<span class="token punctuation">.</span>md\n</code></pre>\n<p><img src="../assets/myreadme/3.png" alt="Pagic init"></p>\n<p>Run pagic build:</p>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>Now you can see the page of <strong>Hello world</strong> by visiting <code>127.0.0.1:8000</code>：</p>\n<p><img src="../assets/myreadme/4.png" alt="Pagic build"></p>\n<h2 id="vercel">Vercel<a class="anchor" href="#vercel">§</a></h2>\n<p><a href="https://vercel.com/">Vercel</a> is a cloud platform for static sites and serverless functions, which fully conforms to your workflow. It enables developers to host websites and web services, which can be deployed instantly, expanded automatically, and without any supervision, all of which do not need to be configured.</p>\n<p>Deploy to [Versel](<a href="https://vercel.com/%EF%BC%89We">https://vercel.com/）We</a> need to create a file like <code>deploy-vercel.sh</code>:</p>\n<pre class="language-autoit"><code class="language-autoit">!<span class="token operator">/</span>bin<span class="token operator">/</span>sh\n\n# Install deno\ncurl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n\n# Install pagic\n<span class="token operator">/</span>vercel<span class="token operator">/</span><span class="token punctuation">.</span>deno<span class="token operator">/</span>bin<span class="token operator">/</span>deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n\n# Pagic build\n<span class="token operator">/</span>vercel<span class="token operator">/</span><span class="token punctuation">.</span>deno<span class="token operator">/</span>bin<span class="token operator">/</span>deno run <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts build\n</code></pre>\n<p>Then create the <code>package.json</code> :</p>\n<pre class="language-autoit"><code class="language-autoit">{\n    <span class="token string">"scripts"</span><span class="token punctuation">:</span> {\n        <span class="token string">"deploy:vercel"</span><span class="token punctuation">:</span> <span class="token string">"sh deploy-vercel.sh"</span>\n    }\n}\n</code></pre>\n<p>Vercel supports GitHub, Gitlab, Bitbucket and other login methods：</p>\n<p><img src="../assets/myreadme/5.png" alt="Vercal login"></p>\n<p>I use GitHub a lot, so I build a new repository on GitHub named <code>pagic_template</code> :</p>\n<p><img src="../assets/myreadme/6.png" alt="Creat new repository"></p>\n<p>Then submit the local code to Github：</p>\n<p><img src="../assets/myreadme/7.png" alt="Pagic commit to Github"></p>\n<p>Next, complete the following steps on the <a href="https://vercel.com/">Vercel</a> website:</p>\n<ol>\n<li>On <a href="https://vercel.com/dashboard">Home</a>, click Import Project</li>\n<li><a href="https://vercel.com/import/git">Fill in</a> warehouse address, from Github <a href="https://vercel.com/import">import</a> the warehouse to be deployed, click continue</li>\n<li>Configure project information</li>\n</ol>\n<ul>\n<li>Fill in the project name, the framework defaults to Other</li>\n<li>Packaging and output configuration, build command: <code>npm run deploy:vercel</code> Output directory: <code>dist</code> (You can also fill in according to your own configuration)</li>\n</ul>\n<p><img src="../assets/myreadme/8.png" alt="Pagic Package"></p>\n<ol start="4">\n<li>Click Deploy and wait for the deployment to complete to access 🎊 :</li>\n</ol>\n<p><img src="../assets/myreadme/9.png" alt="Vercal Deploy"></p>\n<h2 id="blog">Blog<a class="anchor" href="#blog">§</a></h2>\n<p>Currently, Pagic supports three themes: Default, DOC, Blog, we try to modify the <code>pagic.config.ts</code> file to enable Pagic\'s blog mode:</p>\n<pre class="language-autoit"><code class="language-autoit">export <span class="token keyword">default</span> {\n    theme<span class="token punctuation">:</span> <span class="token string">\'blog\'</span><span class="token punctuation">,</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'blog\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'pagic template\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'Use this template to create a Pagic site with the blog theme.\'</span><span class="token punctuation">,</span>\n    github<span class="token punctuation">:</span> <span class="token string">\'<a class="token url-link" href="https://github.com/hu-qi/pagic_template">https://github.com/hu-qi/pagic_template</a>\'</span><span class="token punctuation">,</span>\n    blog<span class="token punctuation">:</span> {\n        root<span class="token punctuation">:</span> <span class="token string">\'/posts/\'</span><span class="token punctuation">,</span>\n        social<span class="token punctuation">:</span> {\n          github<span class="token punctuation">:</span> <span class="token string">\'hu-qi/pagic_template\'</span><span class="token punctuation">,</span>\n          email<span class="token punctuation">:</span> <span class="token string">\'<a class="token email-link" href="mailto:huqi@gpdi.com">huqi@gpdi.com</a>\'</span><span class="token punctuation">,</span>\n          twitter<span class="token punctuation">:</span> <span class="token string">\'huqii\'</span><span class="token punctuation">,</span>\n          v2ex<span class="token punctuation">:</span> <span class="token string">\'huqi\'</span><span class="token punctuation">,</span>\n          zhihu<span class="token punctuation">:</span> <span class="token string">\'fashaoge\'</span>\n        }\n      }\n}<span class="token comment">;</span>\n\n</code></pre>\n<p>In the above code, we have configured Title, description and other parameters for the blog. Among them, social can configure our social accounts. By default, it supports Github, Email, Twitter, V2ex, Zhihu. Of course, you can also develop your own themes or plug-ins to customize What you want.\n<img src="../assets/myreadme/10.png" alt="Pagic Nav"></p>\n<p>Then we started to improve the navigation, classification, tags, external links, etc. that are commonly used in blogs. At this time, we need to add some directories, such as about, archive, links, etc., for unified management, we put all these folders in the src directory Below, our directory structure is as follows:</p>\n<pre class="language-autoit"><code class="language-autoit">site                          \n├─ dist                       <span class="token operator">/</span><span class="token operator">/</span> output   \n├─ src                        <span class="token operator">/</span><span class="token operator">/</span> input\n│  ├─ about                   \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ archives                \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ assets                  \n│  ├─ categories              \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ links                   \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ posts                   <span class="token operator">/</span><span class="token operator">/</span> maybe write somethings\n│  ├─ tags                    \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  └─ README<span class="token punctuation">.</span>md               <span class="token operator">/</span><span class="token operator">/</span> homepage\n├─ README<span class="token punctuation">.</span>md                  \n├─ deploy<span class="token operator">-</span>vercel<span class="token punctuation">.</span>sh           \n├─ package<span class="token punctuation">.</span>json               \n└─ pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts            \n</code></pre>\n<p>In terms of configuration, we added nav and set srcDir to src:</p>\n<pre class="language-diff"><code class="language-diff">export default {\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span>   srcDir: \'src\',\n<span class="token prefix inserted">+</span>   nav: [\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Homepage\',\n<span class="token prefix inserted">+</span>         link: \'/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-home-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Categories\',\n<span class="token prefix inserted">+</span>         link: \'/categories/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-category-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Tags\',\n<span class="token prefix inserted">+</span>         link: \'/tags/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-tag-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'About\',\n<span class="token prefix inserted">+</span>         link: \'/about/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-about-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Archives\',\n<span class="token prefix inserted">+</span>         link: \'/archives/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-box-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Friends\',\n<span class="token prefix inserted">+</span>         link: \'/links/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-link-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>     ],\n</span>}\n</code></pre>\n<p>On the mobile side, Pagic also has a good experience:\n<img src="../assets/myreadme/11.png" alt="Pagic in Mobile"></p>\n<p>Then we write articles in the form of markdown in the posts directory. We can add some fields to the header of the .md file for classification statistics, such as:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\ntitle<span class="token punctuation">:</span> Driven by DeNO <span class="token operator">+</span> react <span class="token operator">and</span> escorted by vercel<span class="token punctuation">,</span> build personal blog at top speed\nauthor<span class="token punctuation">:</span> huqi\ndate<span class="token punctuation">:</span> <span class="token number">2021</span><span class="token operator">/</span><span class="token number">02</span><span class="token operator">/</span><span class="token number">04</span>\ncover<span class="token punctuation">:</span> <span class="token string">\'<a class="token url-link" href="https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg">https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg</a>\'</span>\ncategories<span class="token punctuation">:</span>\n<span class="token operator">-</span> Blog\ntags<span class="token punctuation">:</span>\n<span class="token operator">-</span> Deno\n<span class="token operator">-</span> React\n<span class="token operator">-</span> Pagic\n<span class="token operator">-</span> Vercel\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n</code></pre>\n<p>After writing some articles, our blog looks very rich!</p>\n<p><img src="../assets/myreadme/12.png" alt="Vercal Deploy"></p>\n<p>At this point, when we submit the code to the remote warehouse, it will be automatically deployed to Vercal. In the future, every time we write an article and submit it to the remote warehouse, Vercal will be able to automatically deploy updates, which is great!</p>\n<p>Copy Code, Copy World! <a href="https://github.com/hu-qi/pagic_template">https://github.com/hu-qi/pagic_template</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Driven by Deno + react and escorted by Vercel, build personal blog at top speed"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<blockquote>\n<p>In Chinese Kung Fu, \'in the world of kung fu speed determines the winner\'. In the world of programming, how to quickly build a blog of your own? Then pagic + versel should be a good choice!</p>\n</blockquote>\n<h2 id="pagic">Pagic<a class="anchor" href="#pagic">§</a></h2>\n<p><a href="https://github.com/xcatliu/pagic">Pagic</a> It is a static website generator driven by DeNO + react. It has simple configuration, supports rendering MD / TSX files into static pages, and has a large number of official or third-party themes and plug-ins to extend, which means that you can freely develop and customize your favorite theme style or function plug-ins. What are the advantages of pagic over other static website generators?</p>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th></th>\n<th>Pagic</th>\n<th>VuePress</th>\n<th>Hexo</th>\n<th>Jekyll</th>\n<th>Hugo</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Support <code>md</code></td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n<td>✓</td>\n</tr>\n<tr>\n<td>React/Vue</td>\n<td>✓</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>SPA</td>\n<td>✓</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Allow <code>tsx</code> in config</td>\n<td>✓</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>...</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<p>Pagic stands on the shoulders of giants and refers to the config options and documents of some other static site generators. Hereby, <a href="https://github.com/xcatliu/pagic">Pagic</a>  would like to express her sincere thanks to these open source projects and communities.</p>\n<p>How to use such a good pagic?</p>\n<p>First, install <a href="https://github.com/denoland/deno">Deno</a>:</p>\n<pre class="language-autoit"><code class="language-autoit"># Shell <span class="token punctuation">(</span>Mac<span class="token punctuation">,</span> Linux<span class="token punctuation">)</span><span class="token punctuation">:</span>\ncurl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p><img src="../assets/myreadme/1.png" alt="Install Deno"></p>\n<p>Then, install the latest version of <a href="https://github.com/xcatliu/pagic">Pagic</a>  :</p>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<p><img src="../assets/myreadme/2.png" alt="Install Pagic"></p>\n<p>Initialize the <a href="https://github.com/xcatliu/pagic">Pagic</a> project :</p>\n<pre class="language-autoit"><code class="language-autoit">mkdir site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> README<span class="token punctuation">.</span>md\n</code></pre>\n<p><img src="../assets/myreadme/3.png" alt="Pagic init"></p>\n<p>Run pagic build:</p>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>Now you can see the page of <strong>Hello world</strong> by visiting <code>127.0.0.1:8000</code>：</p>\n<p><img src="../assets/myreadme/4.png" alt="Pagic build"></p>\n<h2 id="vercel">Vercel<a class="anchor" href="#vercel">§</a></h2>\n<p><a href="https://vercel.com/">Vercel</a> is a cloud platform for static sites and serverless functions, which fully conforms to your workflow. It enables developers to host websites and web services, which can be deployed instantly, expanded automatically, and without any supervision, all of which do not need to be configured.</p>\n<p>Deploy to [Versel](<a href="https://vercel.com/%EF%BC%89We">https://vercel.com/）We</a> need to create a file like <code>deploy-vercel.sh</code>:</p>\n<pre class="language-autoit"><code class="language-autoit">!<span class="token operator">/</span>bin<span class="token operator">/</span>sh\n\n# Install deno\ncurl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n\n# Install pagic\n<span class="token operator">/</span>vercel<span class="token operator">/</span><span class="token punctuation">.</span>deno<span class="token operator">/</span>bin<span class="token operator">/</span>deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n\n# Pagic build\n<span class="token operator">/</span>vercel<span class="token operator">/</span><span class="token punctuation">.</span>deno<span class="token operator">/</span>bin<span class="token operator">/</span>deno run <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts build\n</code></pre>\n<p>Then create the <code>package.json</code> :</p>\n<pre class="language-autoit"><code class="language-autoit">{\n    <span class="token string">"scripts"</span><span class="token punctuation">:</span> {\n        <span class="token string">"deploy:vercel"</span><span class="token punctuation">:</span> <span class="token string">"sh deploy-vercel.sh"</span>\n    }\n}\n</code></pre>\n<p>Vercel supports GitHub, Gitlab, Bitbucket and other login methods：</p>\n<p><img src="../assets/myreadme/5.png" alt="Vercal login"></p>\n<p>I use GitHub a lot, so I build a new repository on GitHub named <code>pagic_template</code> :</p>\n<p><img src="../assets/myreadme/6.png" alt="Creat new repository"></p>\n<p>Then submit the local code to Github：</p>\n<p><img src="../assets/myreadme/7.png" alt="Pagic commit to Github"></p>\n<p>Next, complete the following steps on the <a href="https://vercel.com/">Vercel</a> website:</p>\n<ol>\n<li>On <a href="https://vercel.com/dashboard">Home</a>, click Import Project</li>\n<li><a href="https://vercel.com/import/git">Fill in</a> warehouse address, from Github <a href="https://vercel.com/import">import</a> the warehouse to be deployed, click continue</li>\n<li>Configure project information</li>\n</ol>\n<ul>\n<li>Fill in the project name, the framework defaults to Other</li>\n<li>Packaging and output configuration, build command: <code>npm run deploy:vercel</code> Output directory: <code>dist</code> (You can also fill in according to your own configuration)</li>\n</ul>\n<p><img src="../assets/myreadme/8.png" alt="Pagic Package"></p>\n<ol start="4">\n<li>Click Deploy and wait for the deployment to complete to access 🎊 :</li>\n</ol>\n<p><img src="../assets/myreadme/9.png" alt="Vercal Deploy"></p>\n<h2 id="blog">Blog<a class="anchor" href="#blog">§</a></h2>\n<p>Currently, Pagic supports three themes: Default, DOC, Blog, we try to modify the <code>pagic.config.ts</code> file to enable Pagic\'s blog mode:</p>\n<pre class="language-autoit"><code class="language-autoit">export <span class="token keyword">default</span> {\n    theme<span class="token punctuation">:</span> <span class="token string">\'blog\'</span><span class="token punctuation">,</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'blog\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'pagic template\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'Use this template to create a Pagic site with the blog theme.\'</span><span class="token punctuation">,</span>\n    github<span class="token punctuation">:</span> <span class="token string">\'<a class="token url-link" href="https://github.com/hu-qi/pagic_template">https://github.com/hu-qi/pagic_template</a>\'</span><span class="token punctuation">,</span>\n    blog<span class="token punctuation">:</span> {\n        root<span class="token punctuation">:</span> <span class="token string">\'/posts/\'</span><span class="token punctuation">,</span>\n        social<span class="token punctuation">:</span> {\n          github<span class="token punctuation">:</span> <span class="token string">\'hu-qi/pagic_template\'</span><span class="token punctuation">,</span>\n          email<span class="token punctuation">:</span> <span class="token string">\'<a class="token email-link" href="mailto:huqi@gpdi.com">huqi@gpdi.com</a>\'</span><span class="token punctuation">,</span>\n          twitter<span class="token punctuation">:</span> <span class="token string">\'huqii\'</span><span class="token punctuation">,</span>\n          v2ex<span class="token punctuation">:</span> <span class="token string">\'huqi\'</span><span class="token punctuation">,</span>\n          zhihu<span class="token punctuation">:</span> <span class="token string">\'fashaoge\'</span>\n        }\n      }\n}<span class="token comment">;</span>\n\n</code></pre>\n<p>In the above code, we have configured Title, description and other parameters for the blog. Among them, social can configure our social accounts. By default, it supports Github, Email, Twitter, V2ex, Zhihu. Of course, you can also develop your own themes or plug-ins to customize What you want.\n<img src="../assets/myreadme/10.png" alt="Pagic Nav"></p>\n<p>Then we started to improve the navigation, classification, tags, external links, etc. that are commonly used in blogs. At this time, we need to add some directories, such as about, archive, links, etc., for unified management, we put all these folders in the src directory Below, our directory structure is as follows:</p>\n<pre class="language-autoit"><code class="language-autoit">site                          \n├─ dist                       <span class="token operator">/</span><span class="token operator">/</span> output   \n├─ src                        <span class="token operator">/</span><span class="token operator">/</span> input\n│  ├─ about                   \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ archives                \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ assets                  \n│  ├─ categories              \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ links                   \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  ├─ posts                   <span class="token operator">/</span><span class="token operator">/</span> maybe write somethings\n│  ├─ tags                    \n│  │  └─ README<span class="token punctuation">.</span>md            \n│  └─ README<span class="token punctuation">.</span>md               <span class="token operator">/</span><span class="token operator">/</span> homepage\n├─ README<span class="token punctuation">.</span>md                  \n├─ deploy<span class="token operator">-</span>vercel<span class="token punctuation">.</span>sh           \n├─ package<span class="token punctuation">.</span>json               \n└─ pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts            \n</code></pre>\n<p>In terms of configuration, we added nav and set srcDir to src:</p>\n<pre class="language-diff"><code class="language-diff">export default {\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span>   srcDir: \'src\',\n<span class="token prefix inserted">+</span>   nav: [\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Homepage\',\n<span class="token prefix inserted">+</span>         link: \'/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-home-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Categories\',\n<span class="token prefix inserted">+</span>         link: \'/categories/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-category-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Tags\',\n<span class="token prefix inserted">+</span>         link: \'/tags/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-tag-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'About\',\n<span class="token prefix inserted">+</span>         link: \'/about/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-about-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Archives\',\n<span class="token prefix inserted">+</span>         link: \'/archives/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-box-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>       {\n<span class="token prefix inserted">+</span>         text: \'Friends\',\n<span class="token prefix inserted">+</span>         link: \'/links/index.html\',\n<span class="token prefix inserted">+</span>         icon: \'czs-link-l\',\n<span class="token prefix inserted">+</span>       },\n<span class="token prefix inserted">+</span>     ],\n</span>}\n</code></pre>\n<p>On the mobile side, Pagic also has a good experience:\n<img src="../assets/myreadme/11.png" alt="Pagic in Mobile"></p>\n<p>Then we write articles in the form of markdown in the posts directory. We can add some fields to the header of the .md file for classification statistics, such as:</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\ntitle<span class="token punctuation">:</span> Driven by DeNO <span class="token operator">+</span> react <span class="token operator">and</span> escorted by vercel<span class="token punctuation">,</span> build personal blog at top speed\nauthor<span class="token punctuation">:</span> huqi\ndate<span class="token punctuation">:</span> <span class="token number">2021</span><span class="token operator">/</span><span class="token number">02</span><span class="token operator">/</span><span class="token number">04</span>\ncover<span class="token punctuation">:</span> <span class="token string">\'<a class="token url-link" href="https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg">https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg</a>\'</span>\ncategories<span class="token punctuation">:</span>\n<span class="token operator">-</span> Blog\ntags<span class="token punctuation">:</span>\n<span class="token operator">-</span> Deno\n<span class="token operator">-</span> React\n<span class="token operator">-</span> Pagic\n<span class="token operator">-</span> Vercel\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n</code></pre>\n<p>After writing some articles, our blog looks very rich!</p>\n<p><img src="../assets/myreadme/12.png" alt="Vercal Deploy"></p>\n<p>At this point, when we submit the code to the remote warehouse, it will be automatically deployed to Vercal. In the future, every time we write an article and submit it to the remote warehouse, Vercal will be able to automatically deploy updates, which is great!</p>\n<p>Copy Code, Copy World! <a href="https://github.com/hu-qi/pagic_template">https://github.com/hu-qi/pagic_template</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#pagic" }, "Pagic")),
            React.createElement("li", null,
                React.createElement("a", { href: "#vercel" }, "Vercel")),
            React.createElement("li", null,
                React.createElement("a", { href: "#blog" }, "Blog")))),
    'author': "huqi",
    'contributors': [],
    'date': "2021/02/04",
    'updated': null,
    'excerpt': "Pagic Pagic It is a static website generator driven by DeNO + react. It has simple configuration, supports rendering MD / TSX files into static pages, and has a large number of official or third-party themes an...",
    'cover': "https://assets.vercel.com/image/upload/v1595320886/front/home/globe-texture.jpg",
    'categories': [
        "Blog"
    ],
    'tags': [
        "Deno",
        "React",
        "Pagic",
        "Vercel"
    ],
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
