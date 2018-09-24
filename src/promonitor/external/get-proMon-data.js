
import axios from 'axios'

// const url = '/promonitor'

export const getCodes = async (data) => {
    console.log(data)
    try {
        const i = await axios.post(`${data.code}`, { 'url': data.url })
        console.log(i)
        return i
    } catch (err) {
        console.log(err)
    }
}

export const getCourseCodes = async (data) => {
    try {
        const i = await axios.get(`${url}/course_codes`, data)
        console.log(i)
        return i
    } catch (err) {
        console.log(err)
    }
}

// export const getCourse = async (data) => {    
//         try {
//             const i =  await axios.post(`${url}getCourse`, data)
//             console.log(i.data.d)
//             return i.data.d
//         } catch(err) {
//             console.log(err)
//         }          
//     }    

// export const getCourses = async (data) => {    
//         try {
//             const i =  await axios.post(`${url}login`, data)
//             console.log(i.data.d)
//             return i.data.d
//         } catch(err) {
//             console.log(err)
//         }          
//     }    

export const post = async (url, data) => {

    try {
        const i = await axios.post(url, data)
        // will return course codes
        // console.log(i.data)
        return i
    } catch (err) {
        console.log(err)
    }
}

export async function getImg (url, data) {
    try{
        return await  axios.post(url, { responseType: 'arraybuffer', data })

    } catch (error){
        console.log(error)
    }
}

export async function get (url, params) {
    try{
        return await  axios.get(url, params)
    } catch (error){
        console.log(error)
    }
}

export async function getStudentImg (data) {
    try{
        return await  axios.get(`${url}/student_img/`, 
            { 
                responseType: 'arraybuffer',
                params: {
                    'PMStudentID': data,
                    'Width':120,
                    'Height':120, 
                    'ShowLearnerBadges': 'False'
                }
         })

    } catch (error){
        console.log(error)
    }
}
    export async function getStudentInfo (data) {
        try{
            return await  axios.get(`${url}/student_info`,
        {
            params: {
                ilp_id: data
            }
        })    
        } catch (error){
            console.log(error)
        }           
    }

// export const getCr = async (data) => {
//     let resp = {}
//         try {
//             const i =  await axios.post(`${url}getCurric`, data)
//             // will return course codes
//             console.log(i.data)
//             resp['success'] = true
//             resp['resp'] = i.data
//             // return i.data.courses
//         } catch(err) {
//             resp['success'] = false
//             resp['err'] = err
//             console.log(err)
//             // return(err)
//         }   
//         return resp       
//     }    

// export const removeToken = () => {
//     delete axios.defaults.headers.common['Authorization']

// }
