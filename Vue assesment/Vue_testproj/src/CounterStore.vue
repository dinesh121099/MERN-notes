<script>
import { userCounterStore } from './store/counter';
import { storeToRefs } from 'pinia';

export default {
setup() {
    //accessing the state
    const counter = userCounterStore();
    //destructuring reactive properties for easir access
    const {count, doubleCount} = storeToRefs(counter); 
    return {counter, count, doubleCount}       
    }
}
</script>

<template>
    <p>Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
</template>