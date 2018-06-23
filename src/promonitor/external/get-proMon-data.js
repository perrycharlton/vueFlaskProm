
import axios from 'axios'
const url = 'http://localhost:5000/'

export const testData = async () => {    
        try {
            const i =  await axios.get(`${url}get`)
            console.log(i)
            return i.data
        } catch(err) {
            console.log(err)
        }          
    }    


export const updateCourseCodes = async (data) => {    
        try {
            const i =  await axios.post(`${url}getCourse`, data)
            // console.log(i.data.d)
            return i.data.d
        } catch(err) {
            console.log(err)
        }          
    }    

export const getCourse = async (data) => {    
        try {
            const i =  await axios.post(`${url}getCourse`, data)
            console.log(i.data.d)
            return i.data.d
        } catch(err) {
            console.log(err)
        }          
    }    

export const getCourses = async (data) => {    
        try {
            const i =  await axios.post(`${url}login`, data)
            console.log(i.data.d)
            return i.data.d
        } catch(err) {
            console.log(err)
        }          
    }    

export const getLogin = async (data) => {
        try {
            const i =  await axios.post(`${url}promonitor/login`, data)
            // will return course codes
            console.log(i.data)
            return i.data
        } catch(err) {
            console.log(err)
        }          
    }    

export const getCr = async (data) => {
    let resp = {}
        try {
            const i =  await axios.post(`${url}getCurric`, data)
            // will return course codes
            console.log(i.data)
            resp['success'] = true
            resp['resp'] = i.data
            // return i.data.courses
        } catch(err) {
            resp['success'] = false
            resp['err'] = err
            console.log(err)
            // return(err)
        }   
        return resp       
    }    

export const removeToken = () => {
    delete axios.defaults.headers.common['Authorization']

}
