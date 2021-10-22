import { ref } from "@vue/reactivity"
import {projectFirestore} from '../firebase/config.js'


const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {  
      
      try {
        const res = await projectFirestore.collection('posts').doc(id).get() //get a single post

        if (!res.exists) {
          throw new Error('The post does not exist')
        }

        //console.log(res.data())
        post.value = {...res.data(), id: res.id} //id added separetely as data() result does not contain ID
        console.log(post.value)
      } 
      catch (err) {
        console.log(err.message)
        error.value = err.message
      }      
    }  
    return {post, error, load}
}

export default getPost