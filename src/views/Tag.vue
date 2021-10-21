<template>
  <div class="tag">
      <div v-if="error">{{error}}</div>

      <div v-if="postsWithTag.length">
          <PostList :posts="postsWithTag" />
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
import getPosts from '../composables/getPosts.js'


export default {
    components: {PostList, Spinner},
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
               
        return {error, postsWithTag}

    }
}
</script>

<style>

</style>