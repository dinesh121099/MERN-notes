<script setup>
</script>

<template>
  <div id="id">
    <h1>HeLlO WoRld</h1>

    <!-- v-bind -->
    <img v-bind:src="imageUrl" alt="Dynamic IMG" width="600px"/>
    <button @click="changeImg"> Change Image</button>
    <p :class="textClass" :style="textStyle"></p>
    <input v-model = "userName" placeholder = "Enter username">
    <p>Hello, {{ userName }}</p>

    <!-- conditional rendering -->
    <p v-if="isLoggedIn">Welcome back</p>
    <p v-else>Please Log In</p>
    <button v-on:click="toggleLogin">{{ isLoggedIn? "LogIn" : "Logout" }}</button>

    <p v-if="isLoggedIn">On</p>
    <p v-else>Off</p>

    <!-- For loop -->
     <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
     </ul>

     <!-- Computed properties -->
      <p>Message: {{ message }}</p>
      <P>Reversed message: {{ reverseMessage }}</P>

      <nav>
        <router-link to="/parent">Parent page</router-link>
        <router-link to="/lifecycle">Lifecycle page</router-link>
        <router-link to="/reactive">Reactive page</router-link>
        <router-link :to="{ name: 'User', params: {id: 1} }">User page</router-link>
      </nav>
      <hr>
      <RouterView/>
  </div>
</template>

<style>
  nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
</style>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const imageUrl= ref("https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg");
    const textClass = ref('highlight')
    const textStyle = ref({ color: 'red', fontSize: '20px'})
    const userName = ref('')
    const items = ref([1,2,3,4,5,6])
    const message = ref("Welcome Back")
    const changeImg = () =>{
      imageUrl.value = "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg";
    }
    const isLoggedIn = ref(false);
    const toggleLogin = () => {
      isLoggedIn.value= !isLoggedIn.value;
    }
    const reverseMessage = computed(() => {
      return message.value.split("").reverse().join("")
    })
    return { imageUrl, changeImg, textClass, textStyle, userName, isLoggedIn, toggleLogin, items, reverseMessage, message }
    
  }
}
</script>

