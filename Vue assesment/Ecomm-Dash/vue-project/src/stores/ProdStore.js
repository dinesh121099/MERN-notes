import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const ProdStore = defineStore('productsStore', {
  // Defining initial state
  state: () => ({
    categories: [],
    products: [],
  }),
  // Defining actions
  actions: {
    // Defining async function for API call
    async fetchCategories() {
      try {
        const fetchResponse = await axios.get('http://localhost:3000/shop')
        this.categories = fetchResponse.data;
      }
      catch (error) {
        console.log("Failed to fetch categories...", error)
      }
    },
    async fetchProducts() {
      try {
        const fetchResponse = await axios.get('http://localhost:3000/product')
        this.products = fetchResponse.data;
      }
      catch (error) {
        console.log("Failed to fetch categories...", error)
      }
    },
    //POST: Creating new product category
    async createCategory(category) {
      try {
        const fetchResponse = await axios.post('http://localhost:3000/shop', categories);
        this.categories.push(fetchResponse.data);
      }
      catch(error) {
        console.log("Failed to create category", error);
      }
    },
    // DELETE: Deleting product Category
    async deleteCategory(categoryId) {
      try {
        await axios.delete(`http://localhost:3000/product/${categoryId}`);
        this.categories = this.categories.filter((category) => category.id !== category)
      }
      catch(error){
        console.log("Failed to delete category", error);
      }
    },
    //POST: Create new product
    async createProduct(product, category){
      try {
        const categoryProduct = {...category, ...items[product]};
        console.log(categoryProduct);
        console.log(product);
        console.log(category);
        const response = await axios.post(`http://localhost:3000/shop`, categoryProduct);
        this.products.push([...response.data.filter(c => c.id == categoryProduct.id).map((product) => product)]);
        }
      catch(error) {
        console.log("Failed to create products", error);
      }
    },
    // UPDATE: updating products
    async updateProduct(product) {
      try{
        const response = await axios.put(`http://localhost:3000/shop/${product.id}`, product);
        const index = this.products.findIndex.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.product[index] = response.data;
        }
      }
      catch(error) {
        console.log("Failed to update products", error);
      }
    }
  }
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
