<template>
  <h1 v-show="person.name">{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <h1>{{person.job}}</h1>
  <h1 v-show="person.sex">{{person.sex}}</h1>
  <h1>{{person.hobby}}</h1>
  <button @click="changeJob">changeHobby</button>
  <button @click="addSex">addSex</button>
  <button @click="delName">delName</button>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: 'java开发',
      hobby: ['抽烟', '喝酒', '烫头']
    })

    function changeJob() {
      person.hobby[0] = '吃饭'
    }
    function addSex() {
      person.sex = '男'
    }
    function delName() {
      console.log(person)
      delete person.name
      console.log(person)
    }

    return {
      person,
      changeJob,
      addSex,
      delName
    }
  }
}
</script>

<style>

</style>
