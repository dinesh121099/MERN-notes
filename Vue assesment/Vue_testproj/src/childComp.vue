<script>
import { inject } from 'vue';
export default {
   props: ['title'],
   setup(){
      const theme = inject('theme')
   }
}
</script>

 <!-- Child component -->
  <template>
   <h1>Child Component</h1>
   <h3>{{ title }}</h3>
   <button @click="$emit('increment')"> Increment </button>
  </template>