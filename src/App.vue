<template>
  <div id="app">
    <header class="header">
      <div class="h-box">
        小摇歌
        <a class="link" href="https://xiaoyaoge.github.io/msgCode/">插件说明文档</a>
      </div>
    </header>
    <div class="main">
      <h1>短信验证码</h1>
      <p>
        输入{{msg.number}}四位验证码
        <a @click="resetInput('msgCode')">重置</a>
      </p>
      <verify-msg-code
        ref="msgCode"
        :code="msg.code"
        :type="msg.msgType"
        :number="msg.number"
        s-size="28px"
        input-size="28px"
        height="45px"
        s-color="#000"
        input-color="#000"
        :get-input="getInput"
        :success="success"
      ></verify-msg-code>
      <h1>字符验证码</h1>
      <p>
        输入{{txt.number}}四位验证码
        <a @click="resetInput('txtCode')">重置</a>
      </p>
      <verify-msg-code
        ref="txtCode"
        :code="txt.code"
        :type="txt.msgType"
        :number="txt.number"
        s-size="28px"
        input-size="28px"
        height="45px"
        s-color="#000"
        input-color="#000"
        :get-input="getInput"
        :success="success"
      ></verify-msg-code>
      <h1>证码身份证</h1>
      <p>
        输入身份证验证码
        <a @click="resetInput('idcardCode')">重置</a>
      </p>
      <verify-msg-code
        ref="idcardCode"
        :code="idcard.code"
        :type="idcard.msgType"
        :number="idcard.number"
        s-size="15px"
        input-size="15px"
        height="45px"
        s-color="#000"
        input-color="#000"
        :get-input="getInput"
        :success="success"
      ></verify-msg-code>
    </div>
  </div>
</template>

<script>
// import verify-msg-code from 'verify-msg-code'
export default {
  name: 'app',
  // components: {
  //   verify-msg-code
  // },
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
  created() { },
  methods: {
    resetInput(opst) {
      this.$refs[opst].initInput()
    },
    getInput(e) {
      // console.log('getInput', e)
    },
    success(e) {
      // console.log('success', e)
    }
  }
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.header {
  background: #f5f5f5;
  font-size: 24px;
  .h-box {
    height: 58px;
    line-height: 58px;
    .link {
      font-size: 16px;
      margin-left: 15%;
    }
  }
}
.main {
  padding: 0 8px;
}
p {
  color: #c8c8c8;
  text-align: center;
  margin: 0.75rem 0;
}
h1,
h2 {
  font-weight: normal;
  margin-bottom: 0.75rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 0.75rem;
}

a {
  color: #42b983;
}
</style>
