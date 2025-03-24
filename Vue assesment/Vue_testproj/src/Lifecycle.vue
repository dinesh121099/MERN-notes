<template>
  <p>{{ message }}</p>
  <p>{{ counter }}</p>
  <button v-on:click="increment" >Increment</button>
</template>

<script>
import { onBeforeMount } from 'vue';
import {ref, onUnmounted, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount} from 'vue'

export default {
    setup(){
        const message = ref("component is loaded....");
        const counter = ref(0)
        const increment = () => {
            counter.value += 1;
        }

        // Lifecycle methods
        function beforeCreate(){
            console.log("beforeCreate: Component instance is being initialized ")
        }
        beforeCreate()
        function created(){
            console.log("Created: Component instance has been created")
            console.log("initisl message")
        }
        created()
        onBeforeMount(() => {
            console.log("onBeforeMount: Component is about to mount")
        })
        onMounted(() => {
            console.log("onMounted: Component has been mounted to the DOM")
        })
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate: Component is about to update")
        })
        onUpdated(() => {
            console.log("onUpdated: Component has updated")
        })
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount: Component is about to be unmount")
        })
        onUnmounted(() => {
            console.log("onUnmounted: Component has been unmounted")
        })
        return { message, counter, increment }
    }
}
</script>
