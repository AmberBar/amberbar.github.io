# Oauth2.0
[Oauth2.0](https://www.rfc-editor.org/rfc/rfc6749) （Open Authorization）是一个关于授权(authorization)的开放网络标准,允许用户授权访问他们存在另外服务提供者上的信息，并且不需要将用户名和密码提供给第三方应用。目前Oauth有两个版本1.0和2.0

> 举个例子: 平时我们登录新浪微博时，可以使用微信授权登录。登录时，并没有告诉新浪我们在微信的用户名密码，而是进行了授权
## Oauth2.0 流程和重要角色
Oauth2.0中有4个重要角色
* 客户端(Client): 请求访问资源的服务器
* 资源拥有者（Resource Owner）: 通常是用户，或者应用程序
* 授权服务器(Authorization Server)：授权服务器（认证服务器），用于授权client访问资源和认证client有访问某个资源的权限
* 资源服务器(Resource Server): 存放资源的服务器

有时候授权服务器和资源服务器是同一个服务，比如上述例子中的微信

## Oauth2.0 的四种模式
1. 授权码模式
2. 密码模式
3. 客户端模式
4. 简化模式

### 1. 授权码模式
授权码模式是最安全的一种模式，适用于有前后端的项目。前端授权获取到授权码(code),后端通过授权码访问授权服务器获取access_token.后续可以用access_token从资源服务器获取资源

![授权码模式](/oauth/oauth.png)
### 2. 密码模式
如果高度信任某个应用，那么该client就可以用 你的 用户名和密码来申请access_token （令牌）

![密码模式](/oauth/password.jpg)
比如：在新浪的登录页面直接用微信的用户名和密码登录（假设哈）
* 使用场景: 自己公司搭建的授权服务器
### 3. 客户端模式（Client Credentials Grant）
客户端用自己的名义而不是用户的名义向授权服务器申请令牌。
* 适用于: 没有前端页面，只有纯后端的应用
![客户端模式](/oauth/credentials.jpg)

### 4. 简化模式 （implicit）
简化模式也叫隐藏式
有些服务没有后端服务，因此就不能使用上述的三种方式授权了。因此Oauth也允许向前端服务直接颁发令牌，没有授权码这一步，不过这种方式不是很安全
![简化模式](/oauth/implicit.jpg)
* 适用场景: 只有前端服务，没有后端服务

# Spring Security 项目搭建
http://127.0.0.1:8081/user/getCurrentUser

```json
{
    "authorities": [
        {
            "authority": "admin"
        }
    ],
    "details": {
        "remoteAddress": "127.0.0.1",
        "sessionId": null
    },
    "authenticated": true,
    "principal": {
        "password": null,
        "username": "amber",
        "authorities": [
            {
                "authority": "admin"
            }
        ],
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "enabled": true
    },
    "credentials": null,
    "name": "amber"
}
```
## JWTS/JWTK


# TODO
TokenEndpoint

# Scope 和 Role的区别
scope 基于客户端，而Role时基于用户。它们的作用都是访问控制。但是被授权给第三方访问的API一定可以被该用户访问，能被该用户访问的API则不一定可以被授权给第三方访问