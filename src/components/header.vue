<template>
  <div class="header">header</div>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {}
  }
}
</script>
<style>
.header {
  background-color: #3190e8;
  height: 44px;
  color: #ffffff;
  text-align: center;
  line-height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
