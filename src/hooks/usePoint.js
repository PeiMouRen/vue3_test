
import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function() {
    let point = reactive({
        x: 0,
        y: 0
    })

    function savePoint(event) { 
        console.log(event)
        point.x = event.x
        point.y = event.y
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}