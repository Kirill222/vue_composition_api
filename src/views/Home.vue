<template>
  <div class="home">
    <h1>Home</h1>  
    <p>Name : {{name}}</p>
    <p>Age: {{age}}</p>

    <input type="text" v-model="name">

    <button @click="handleClick">Click</button>
    <button @click="age++">Age</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',  
  setup() {
    //these values are not reactive
    // let name = 'mario'
    // let age = 30

    //reactive values
    let name = ref('mario')
    let age = ref(30)



    const p = ref(null)

    const handleClick = () => {
      name.value = "ttt"
      age.value = 999
    }    
    return {name, age, handleClick, p}
  },
}
</script>
