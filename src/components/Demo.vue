<template>
    <h1>当前求和值为：{{sum}}</h1>
    <button @click="sum++">addSum</button>
    <hr>
    <h1>欢迎信息：{{msg}}</h1>
    <button @click="msg += '!'">changeMsg</button>
    <hr>
    <h1>姓名：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1>薪资：{{person.job.j1.salary}}K</h1>
    <button @click="person.age++">addAge</button>
    <button @click="person.name += '`'">changeName</button>
    <button @click="person.job.j1.salary++">addSalary</button>
</template>

<script>
import {ref, reactive, computed, watch} from 'vue'
export default {
    name: 'Demo',
    setup(props, content) {
        let sum = ref(0);
        let msg = ref('你好啊');
        let person = reactive({
            name: '张三',
            age: '18',
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // watch([sum, msg], (newValue, oldValue) => {
        //     console.log(newValue, oldValue)
        // }, {immediate: true} )

        // watch(person, (newValue, oldValue) => {
        //     console.log('person改变了', newValue, oldValue)
        // })

        // watch(() => person.name, (newValue, oldValue) => {
        //     console.log('person.name改变了', newValue, oldValue)
        // }, {immediate: true})

        watch(() => person.job, (newValue, oldValue) => {
            console.log('job改变了', newValue, oldValue)
        }, {immediate: true, deep: true})


      
        return {
            sum,
            msg,
            person
        }
    },
   
}
</script>

<style>

</style>