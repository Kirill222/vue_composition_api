import { ref } from "@vue/reactivity"

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {

        //simulate delay to show loading window
        await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })


      try {
        let data = await fetch(`http://localhost:3000/posts/${id}`)
        if (!data.ok) {
          throw new Error("This post does not exist")
        }

        post.value = await data.json()
      } 
      catch (err) {
        console.log(err.message)
        error.value = err.message
      }      
    }  
    return {post, error, load}
}

export default getPost