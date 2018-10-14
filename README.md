# verify-msg-code

## verify-msg-code 是基于 verify-input-code 插件开发的升级版

## 由于前端一直没时间维护 verify-input-code 所以决定将其废弃

## verify-msg-code 是基于 Vue2.5+的移动端验证码输入组件.

## 功能预览

- 输入时回调
- 结果回调
- 自定义错误处理
- 自定义验证码个数
- 样式可控
- 输入身份证验证
- 可以清空输入的验证码

## 基于

基于 Vue.js 2.5+.

## 安装和使用

```javascript
npm i verify-msg-code --save
```

- 作为全局组件使用

```javascript
//在项目入口文件
import Vue from 'vue'
import VerifyMsgCode from 'verify-msg-code'
Vue.component('verifyMsgCode', VerifyMsgCode)
```

- 作为局部组件

```javascript
//在某个组件中
import VerifyMsgCode from 'verify-msg-code'
export default {
  components: {
    VerifyMsgCode
  }
}
```

## API

| 参数        | 类型    | 说明                                                                                                      | 可选值             | 默认值  |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| code        | 数组    | 用户输入的验证码数组                                                                                      | —                  | —       |
| initInput   | 函数    | 给父组件调用初始化输入框                                                                                  | —                  | -       |
| type        | 字符串  | 用户输入类型 当 type 为 idcard 时 number 值为 18                                                          | number,text,idcard | number  |
| upper-case  | Boolean | 类型为 text 的时候可调整输入的字符串为大写                                                                | true,false         | false   |
| get-input   | 函数    | 用户每次输入后的回调函数,接受一个验证码字符串                                                             | —                  | —       |
| success     | 函数    | 用户输入完成后的回调函数,接受一个验证码字符串                                                             | —                  | —       |
| error       | 函数    | 用户输入不是预期的值的回调函数,接收一个错误的值,若返回 true 则不清除错误值并继续下一个输入,默认返回 false | —                  | —       |
| span-size   | 字符串  | 输入后的字体显示大小                                                                                      | —                  | 20px    |
| span-color  | 字符串  | 输入后的字体显示颜色                                                                                      | —                  | #f35252 |
| input-size  | 字符串  | 输入框的字体显示大小                                                                                      | —                  | 20px    |
| input-color | 字符串  | 输入框的字体显示颜色                                                                                      | —                  | #000    |
| number      | 数字    | 验证码个数                                                                                                | —                  | 6       |
| height      | 字符串  | 整个框的显示高度                                                                                          | —                  | 60px    |
