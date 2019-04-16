<template>
  <div>
    <!-- <head-view></head-view> -->
    <div style="marginTop: 60px;">深圳</div>
    <div @click="goFirst">goFirst</div>
    <van-button type="primary">默认按钮</van-button>
    <input v-focus type="text">
  </div>
</template>

<script>
// import Header from './header'
import Vue from 'vue'
import { Button, Cell } from 'vant'

Vue.use(Button)
export default {
  name: 'HelloWorld',
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  methods: {
    goFirst: function() {
      this.$router.push('/main')
    }
  },
  data() {
    return {
      message: '232dddd'
    }
  },
  filters: {
    capitalize: function() {}
  },
  created() {
    // this.axios
    //   .get('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js')
    //   .then(data => {
    //     console.log(data, 99999999)
    //   })
    //   .catch(err => {
    //     console.log(99999999999)
    //   })
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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









