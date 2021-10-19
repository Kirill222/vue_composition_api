<template>
  <div class="home">
    home
    <p>Name : {{name}}</p>
    <p>Age: {{age}}</p>

    <button @click="handleClick">Click</button>
  </div>
</template>

<script>


export default {
  name: 'Home',  
  setup() {
    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('button')
    }
    //only returned values are available for the use in a template
    return {name, age, handleClick}
  },
}
</script>
