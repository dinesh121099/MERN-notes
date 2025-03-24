import { defineStore } from "pinia";
// state is function which return a initial state
export const userCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    // computed properties for stores
    getters:{
        doubleCount:(state) => state.count * 2, 
    },
    // actions are methods that can modify state or perform side effects
    actions:{
        increment () {
            this.count++;
        }
    }
});