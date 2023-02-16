## Password 密码模式

```java
    /**
     * 如果使用密码模式需要开启这个，否则会报
     * {
     *     "error": "unsupported_grant_type",
     *     "error_description": "Unsupported grant type: password"
     * }
     * @return
     */
    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }
```

密码模式要配置AuthorizationServerConfig
https://blog.csdn.net/sinat_36454672/article/details/103647412



简化模式

http://localhost:8081/oauth/authorize?client_id=client&response_type=token&scope=all&redirect_uri=http://www.baidu.com



reuseRefreshTokens(false);

refresh token有两种使用方式：重复使用(true)、非重复使用(false)，默认为true

重复使用：access token过期刷新时， refresh token过期时间未改变，仍以初次生成的时间为准
非重复使用：access token过期刷新时， refresh token过期时间延续，在refresh token有效期

## 存储在Redis里面

Token默认是存储在内存当中的，如果想存在Redis里面则需要:
