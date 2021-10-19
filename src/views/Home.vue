<template>
  <div class="home">
    <h1>Home</h1> 
   <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'Home',  
  components:{
    PostList
  },
  setup() {
    
    const posts = ref([
      {title: 'Hello everyone', body: 'lorem ipfhfgh fgh fgh hretyweteywet wet wet e ert ert ert dfg sfg wertwert fg dfg dfg ete edrg dfg dfg dfg dfg dfg dfg dfg dfg dfg dfg dgdgdfg dfg dfg dfg dfg dfg dfgd fg dfg dfg dffg dfgdfg dfg dfg df gdfg df gsum', id: 1},
      {title: 'Hi there', body: 'lorem ipsum2', id: 2},
    ])
    
      return {posts}
    } 
}


</script>

