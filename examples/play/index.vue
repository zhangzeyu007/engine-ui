<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-20 16:22:02
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-20 17:29:37
 * @FilePath: \engine-ui\examples\play\index.vue
-->
<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
     <h1>泽雨组件库</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
