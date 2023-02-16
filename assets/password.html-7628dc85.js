import{ab as t,G as o,H as r,E as n,S as e,N as a,ad as i,W as c}from"./framework-b31a425c.js";const l={},p=i(`<h2 id="password-密码模式" tabindex="-1"><a class="header-anchor" href="#password-密码模式" aria-hidden="true">#</a> Password 密码模式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 如果使用密码模式需要开启这个，否则会报
     * <span class="token punctuation">{</span>
     *     &quot;error&quot;: &quot;unsupported_grant_type&quot;,
     *     &quot;error_description&quot;: &quot;Unsupported grant type: password&quot;
     * <span class="token punctuation">}</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={href:"https://blog.csdn.net/sinat_36454672/article/details/103647412",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"简化模式",-1),h={href:"http://localhost:8081/oauth/authorize?client_id=client&response_type=token&scope=all&redirect_uri=http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"reuseRefreshTokens(false);",-1),k=n("p",null,"refresh token有两种使用方式：重复使用(true)、非重复使用(false)，默认为true",-1),v=n("p",null,"重复使用：access token过期刷新时， refresh token过期时间未改变，仍以初次生成的时间为准 非重复使用：access token过期刷新时， refresh token过期时间延续，在refresh token有效期",-1),m=n("h2",{id:"存储在redis里面",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#存储在redis里面","aria-hidden":"true"},"#"),e(" 存储在Redis里面")],-1),b=n("p",null,"Token默认是存储在内存当中的，如果想存在Redis里面则需要:",-1);function f(w,g){const s=c("ExternalLinkIcon");return o(),r("div",null,[p,n("p",null,[e("密码模式要配置AuthorizationServerConfig "),n("a",d,[e("https://blog.csdn.net/sinat_36454672/article/details/103647412"),a(s)])]),u,n("p",null,[n("a",h,[e("http://localhost:8081/oauth/authorize?client_id=client&response_type=token&scope=all&redirect_uri=http://www.baidu.com"),a(s)])]),_,k,v,m,b])}const y=t(l,[["render",f],["__file","password.html.vue"]]);export{y as default};
