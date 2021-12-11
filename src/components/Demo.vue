<template>
    <h1>当前求和值为：{{sum}}</h1>
    <button @click="sum++">addSum</button>
    <hr>
    <h1>人员信息：</h1>
    <h4>{{person}}</h4>
    <h1>姓名：{{person.name}}</h1>
    <h1>年龄：{{person.age}}</h1>
    <h1>薪资:{{person.job.j1.salary}}K</h1>
    <h1>car:{{person.car}}</h1>
    <button @click="person.name += '`'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">修改薪资</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">addCar</button>
    <button @click="person.car.name += '!'">修改车名</button>
    <button @click="person.car.price++">修改车价格</button>
    
</template>

<script>
import {ref, reactive, shallowRef, readonly, toRaw, markRaw, shallowReadonly, shallowReactive, toRef, toRefs, computed, watch, watchEffect, onMounted, onBeforeUnmount, isRef, isReadonly, isProxy, isReactive} from 'vue'
export default {
    name: 'Demo',
    setup(props, content) {
        let sum = ref(0);
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        function showRawPerson() {
            console.log(toRaw(person))
        }

        function addCar() {
            const car = {
                name: '奔驰',
                price: 40
            }
            person.car = markRaw(car);
        }
        
        console.log(isRef(sum))
        console.log(isReactive(person))
        console.log(isProxy(person))
        console.log(isReadonly(person))

        return {
            sum, person, showRawPerson, addCar
            //...toRefs(person)
        }
    },
    
}
</script>

<style>

</style>