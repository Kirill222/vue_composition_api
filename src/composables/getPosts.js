import { ref } from '@vue/reactivity'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {

      //simulate delay to show loading window
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

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
    return {posts, error, load}
}

export default getPosts