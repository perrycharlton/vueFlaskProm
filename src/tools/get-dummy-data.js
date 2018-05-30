
import axios from 'axios'

export default class Test {
    async testData() {    
        try {
            // const p = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            const i =  await axios.get('https://randomuser.me/api/?results=10')
            // console.log(p)
            return i.data
        } catch(err) {
            console.log(err)
        }          
    }    
}
