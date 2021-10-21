import { ref } from '@vue/reactivity'
import {projectFirestore} from '../firebase/config.js'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {

      try {
       const res = await projectFirestore.collection('posts').get()
       console.log(res.docs)

        posts.value = res.docs.map(doc => {
          console.log({...doc.data(), id: doc.id})
          return {
            ...doc.data(), id: doc.id
          }
        })

      } 
      catch (err) {
        console.log(err.message)
        error.value = err.message
      }      
    }  
    return {posts, error, load}
}

export default getPosts