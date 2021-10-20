<template>
  <div class="home">
    <h1>Home</h1> 
    <div v-if="error" style="color: red;">{{error}}</div> 
    <div v-if="posts.length">
      <PostList :posts="posts" /> 
    </div>
    <div v-else>Loading...</div>    
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'Home',  
  components: { PostList },
  setup() {    
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw new Error("Data could not be fetched")
        }

        posts.value = await data.json()
      } 
      catch (err) {
        console.log(err.message)
        error.value = err.message
      }
    } 
    
    load()

    return {posts, error}
    } 
}


</script>

