<template>
  <button @click="isShow = true">点我弹窗</button>
  <teleport to="body">
      <div v-if="isShow" class="mask">
          <div class="dialog">
            <h3>我是标题</h3>
            <h4>我是内容</h4>
            <h4>我是内容</h4>
            <h4>我是内容</h4>
            <h4>我是内容</h4>
            <button @click="isShow = false">点我关闭弹窗</button>
        </div>
      </div>
  </teleport>
</template>

<script>
import { ref } from '@vue/reactivity'
    export default {
        name: 'Dialog',
        setup() {
            let isShow = ref(false)
            return {isShow}
        }

    }
</script>
    
<style>
    .dialog{
        width: 300px;
        height: 300px;
        background-color: blue;
        text-align: center;
        position: absolute;
        top: 25%;
        left: 25%;
    }
    .mask{
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>