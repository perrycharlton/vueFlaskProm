
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
            const i =  await axios.post(`${url}login`, data)
            console.log(i.data.d)
            return i.data.d
        } catch(err) {
            console.log(err)
        }          
    }    
