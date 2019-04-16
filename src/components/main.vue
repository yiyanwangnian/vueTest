<template>
  <div>
    <header></header>
    <router-view></router-view>
    <footer>
      <van-tabbar @change="changeTab">
        <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签2</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="5">标签3</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">标签4</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
import { Button, Cell, Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'
Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'mains',
  methods: {
    changeTab(dd) {
      if(dd === 1){

      }else if(dd === 2){

      }
    }
  },
  data() {
    return {
      items: [{ message: 1111 }, { message: 1111 }, { message: 1111 }]
    }
  }
}
</script>
