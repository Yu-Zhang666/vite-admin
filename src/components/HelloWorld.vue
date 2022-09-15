<script setup lang="ts">
import { ref } from 'vue'
import {useCartStore} from '../stores/cart'
defineProps<{ msg: string }>()
const count =ref (0)
const cart = useCartStore()
function countPlus(){
  count.value++
  cart.addItem(count.value)
}
const list=useCartStore()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button>sdees</el-button>
    <el-button>ww</el-button>
    <button type="button" @click="countPlus">count is {{ count }}</button>
    <p v-for="index in cart.items" :index="index">{{index}}</p>
    <p>
      
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
