<template>
  <div class="home">
    <h1>Home</h1> 
    <input type="text" v-model="search">
    <p>Search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div>
    <button @click="handleClick">Stop watch</button> 
  </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',  
  setup() {
    const names = ref(['AAA', 'BBB', 'CCC', 'DDD', 'EEE'])     
    const search = ref('')

    //runs each time a certain value changes
    const stopWatch = watch(search, () => {
      console.log("Watch function ran")
    })

    //runs initially when the component first loads
    //but also it runs whenever any value inside it changes
    //this is more preferable than whatch
    const stopWatchEffect = watchEffect(() => {
      console.log("Watch effect function ran", search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    const matchingNames = computed(() => {
      return names.value.filter(n => n.includes(search.value) )  
    })


      return {names, search, matchingNames, handleClick}
    } 
}
</script>
