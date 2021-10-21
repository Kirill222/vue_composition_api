<template>
  <div class="tag">
      <div v-if="error" style="color: red;">{{error}}</div>

      <div v-if="posts.length" class="layout">
          <PostList :posts="postsWithTag" />
          <TagCloud :posts="posts" />  
      </div>  
      <div v-else>
          <Spinner />
      </div> 
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import {useRoute} from 'vue-router'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts.js'


export default {
    
    components: {PostList, Spinner, TagCloud},
    setup() {
        const route = useRoute()
        const tag = route.params.tag

        const {posts, error, load} = getPosts()

        load()        

        const postsWithTag = computed(() => {
            return posts.value.filter(p => {
                return p.tags.includes(tag)
            })
        })

        console.log(postsWithTag)
               
        return {posts, error, postsWithTag}
    },
    
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>