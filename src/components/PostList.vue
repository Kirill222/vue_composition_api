<template>
  <div class="post-list">
      <div v-for="p in posts" :key="p">
        <SinglePost :post="p" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    
    setup(props) {
        onMounted(() => console.log('component mounted - composition API'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    },
    mounted() {
      console.log('component mounted - options API')
    }
}
</script>

<style>

</style>