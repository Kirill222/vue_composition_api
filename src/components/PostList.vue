<template>
  <div class="post-list">
      <div v-for="p in posts" :key="p">
        <SinglePost :post="p" />
      </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: {
        SinglePost,
    },
    //if we want to use propse inside setup()
    setup(props) {
        console.log(props.posts)
    }
}
</script>

<style>

</style>