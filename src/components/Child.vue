<template>
    <div class="child">
        <h1>我是Child</h1>
        {{sum}}
        <!-- <Son/> -->
    </div>
   
</template>

<script>
import { ref } from '@vue/reactivity'
    import Son from './Son.vue'
    export default {
        name: 'Child',
        components: {Son},
        setup() {
            let sum = ref(0)

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({sum})
                }, 3000);
            })
        }
    }
</script>

<style>
    .child{
        background-color: aqua;
        padding: 5px;
    }
</style>