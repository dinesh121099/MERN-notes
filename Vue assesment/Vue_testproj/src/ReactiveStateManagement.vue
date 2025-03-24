<script setup>
import {ref, reactive } from 'vue';

const count = ref(0);
const profile = reactive({
    name: "John Doe",
    age: 30
})
const increment = () => {
    count.value += 1;
}
</script>

<template>
    <h2>Reactive State Management</h2>
    <p> Count : {{ count }}</p>
    <button v-on:click="increment" >Increment counter</button>
    <div>
        <h2>User Profile</h2>
        <p>Name: {{ profile.name }}</p>
        <p>Age: {{ profile.age }}</p>
        <input type="text" v-model="profile.name" placeholder="Enter name here"/>
        <br>
        <input type="number" v-model="profile.age" placeholder="Enter age here"/>
    </div>
</template>