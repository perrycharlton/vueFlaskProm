
import axios from 'axios'
const url = 'http://localhost:5000/'


export const adminLogOut = async () => {
        try {
            const i =  await axios.delete(`${url}admin/`)
            // will return course codes
            console.log(i.data)
            return i.data
        } catch(err) {
            console.log(err)
        }          
    }  

export const adminLogIn = async (data) => {
        try {
            let i = await axios.post(`${url}admin/`, data)
            // will return token codes
            console.log(i.data)
            axios.defaults.headers.common['Admin_token'] = i.data.token
            return i.data
        } catch(err) {
            console.log(err)
        }          
    }  

export const removeToken = () => {
    delete axios.defaults.headers.common['Authorization']

}
