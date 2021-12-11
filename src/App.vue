<template>
  <!-- <button @click="changState">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"/> -->
  <!-- <input type="text" v-model="keyword">
  <h1>{{keyword}}</h1> -->
  <div class="app">
    <h1>我是App</h1>
    <h2>车辆信息：{{name}}---{{price}}</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h2>loading...</h2>
      </template>
    </Suspense>
    
  </div>
  
</template>

<script>
import {ref, reactive, customRef, toRefs, provide, isRef, defineAsyncComponent} from 'vue'
import Demo from './components/Demo.vue'
// import Child from './components/Child.vue'

const Child = defineAsyncComponent(() => import('./components/Child.vue')) // 异步引入组件
export default {
  name: 'App',
  components: {Demo, Child},
  setup() {
    let isShowDemo = ref(true)
    let timer
    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知vue追踪value的变化
            return value
          },
          set(newValue) {
            clearInterval(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知vue重新解析模板
            }, 500);
            
          }
        }
      })
    }
    let keyword = myRef('hello')

    function changState() {
      isShowDemo.value = !isShowDemo.value
    }

    let car = reactive({
      name: '奔驰',
      price: '40w'
    })

    provide('car', car)



    return {
      isShowDemo,
      keyword,
      changState,
      ...toRefs(car)
    }
  }
}
</script>

<style>
  .app{
    background-color: darkgray;
    padding: 5px;
  }
</style>
