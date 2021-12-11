<template>
    <div class="son">
        <h1>我是Son</h1>
        <h2>车辆信息：{{name}}---{{price}}</h2>
        <Dialog/>
    </div>
   
</template>

<script>
import { inject, toRefs } from '@vue/runtime-core'
import Dialog from './Dialog.vue'
    export default {
        name: 'Son',
        components: {Dialog},
        setup() {
            let car = inject('car')

            return {
                ...toRefs(car)
            }
        }
    }
</script>

<style>
    .son{
        background-color:chocolate;
        padding: 5px;
    }
</style>