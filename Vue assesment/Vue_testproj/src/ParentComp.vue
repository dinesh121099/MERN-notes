<script>
   import { provide, ref } from 'vue';
   import childComp from './childComp.vue';
   import CardSlots from './CardSlots.vue';
   

   export default {
      components: {
         CardSlots,
         childComp
      },
      setup(){
         const message = ref("Hello, from parent");
         const counter =ref(0);
         const IncrementCounter = () => {
            counter.value++;
         }
         // Provide values for descendants
         provide('theme','dark')
         return {counter, message, IncrementCounter}
      }
   }
</script>

<!-- Parent component -->
 <template>
    <h1>Parent component</h1>
    <childComp :title="message" @increment="increment" />
    <p>Counter: {{ counter }}</p>

    <br>

    <div>
      <h1>Card slots</h1>
      <CardSlots>
         <p>Main content goes here...</p>
         <template #actions>
            <button>Action button</button>
         </template>
      </CardSlots>
    </div>
 </template>