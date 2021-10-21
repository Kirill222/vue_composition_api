//take in an array of posts
//create a new tag set (SET is a special type of data in JS that does not allow duplicates)
//add the tags of each post to the tag set
//return a single array based on the set

import { ref } from "@vue/reactivity"

const useTags = (posts) => {
    let tags = ref([])
    const tagSet = new Set()

    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet]

    return {tags}
}

export default useTags