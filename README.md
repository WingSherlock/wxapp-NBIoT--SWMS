# wx-NB-IoT--SWMS
智能仓库（移动端）

大三帮师兄做的毕设
上层移动端是微信小程序 底层是stm8和NB-IoT

NB用的谷雨平台 传输协议是tcp/udp 需要注册包 注册包格式为：ep=deviceId&pw=devicePw 
相关文档：http://doc.iotxx.com/%E8%B0%B7%E9%9B%A8%E4%BA%91%E9%80%8F%E4%BC%A0%E5%B9%B3%E5%8F%B0%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97

然而微信小程序只支持websocket 
所以发送数据的话 只能自己写个接口 用的是springboot （因为不懂所以请教了另外的师兄 学习了一下）
然后接收数据 是写了个tcp客户端（wing.java）收取数据存在数据库 需要的时候直接请求数据库
