<template>
  <div id="app">
    <h1>短信验证码</h1>
    <p>输入{{msg.number}}四位验证码 <a @click="resetInput('msgCode')">重置</a></p>
    <verify-msg-code ref="msgCode" :code="msg.code" :type="msg.msgType" :number="msg.number" s-size="28px" input-size="28px" height="45px" s-color="#000" input-color="#000" :get-input="getInput" :success="success"></verify-msg-code>
    <h1>字符验证码</h1>
    <p>输入{{txt.number}}四位验证码 <a @click="resetInput('txtCode')">重置</a></p>
    <verify-msg-code ref="txtCode" :code="txt.code" :type="txt.msgType" :number="txt.number" s-size="28px" input-size="28px" height="45px" s-color="#000" input-color="#000" :get-input="getInput" :success="success"></verify-msg-code>
    <h1>证码身份证</h1>
    <p>输入身份证验证码 <a @click="resetInput('idcardCode')">重置</a></p>
    <verify-msg-code ref="idcardCode" :code="idcard.code" :type="idcard.msgType" :number="idcard.number" s-size="14px" input-size="14px" height="45px" s-color="#000" input-color="#000" :get-input="getInput" :success="success"></verify-msg-code>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: {
        code: [],
        msgType: 'number',
        number: 4
      },
      txt: {
        code: [],
        msgType: 'txt',
        number: 6
      },
      idcard: {
        code: [],
        msgType: 'idcard',
        number: 18
      }
    }
  },
  created() {},
  methods: {
    resetInput(opst) {
      this.$refs[opst].initInput()
    },
    getInput(e) {
      console.log('getInput', e)
    },
    success(e) {
      console.log('success', e)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 50px;
  margin-top: 60px;
}
p {
  color: #c8c8c8;
  text-align: center;
  margin: 10px 0;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
