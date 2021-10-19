<template>
  <div class="home">
    <h1>Home</h1> 
    <input type="text" v-model="search">
    <p>Search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{name}}
    </div> 
  </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'

export default {
  name: 'Home',  
  setup() {
    const names = ref(['AAA', 'BBB', 'CCC', 'DDD', 'EEE']) 
    
    const search = ref('')

    const matchingNames = computed(() => {
      return names.value.filter(n => n.includes(search.value) )  
    })


      return {names, search, matchingNames}
    } 
}
</script>
