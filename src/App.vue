<template>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <button @click="sayHello">sayHello</button>
</template>

<script>

export default {
  name: 'App',
  setup() {

    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`hello,我是${name},我今年${age}岁了！`)
    };

    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>

</style>
