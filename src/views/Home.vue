<template>
  <div class="home">
    home
    <p ref="p">Name : {{name}}</p>
    <p>Age: {{age}}</p>

    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',  
  setup() {
    let name = 'mario'
    let age = 30

    const p = ref(null)

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hi'
    }    
    //only returned values are available for the use in a template
    return {name, age, handleClick, p}
  },
}
</script>
