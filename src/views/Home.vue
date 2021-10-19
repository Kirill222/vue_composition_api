<template>
  <div class="home">
    <h1>Home</h1> 
    <h2>Refs</h2> 
    <p>{{personOne.name}}----------------{{personOne.age}}</p>
    <button @click="updatedPersonOne">Update person one</button>

    <h2>Reactive</h2>
    <p>{{personTwo.name}}----------------{{personTwo.age}}</p>
    <button @click="updatedPersonTwo">Update person two</button>



    
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'

export default {
  name: 'Home',  
  setup() {
      const personOne = ref({name: 'AAA', age: 555})
      const personTwo = reactive({name: 'BBB', age: 500}) //reactive cannot work with primitive types data

      const updatedPersonOne = () => {
        personOne.value.age = 101010
      }
       const updatedPersonTwo = () => {
        personTwo.age = 800
      }
      return {personOne, personTwo, updatedPersonOne, updatedPersonTwo}
    } 
}
</script>
