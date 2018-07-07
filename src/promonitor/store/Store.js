import { testData, getCourseCodes, removeToken , getLogin} from "../external/get-proMon-data"


export default {
    namespaced: true,
    
    state: {
        User: {}, 
        Status: false,
        CourseCodes: [],
        Courses: {},
        Message: ''
    },
    getters: {
        User: state => state.User,
        Status (state) {return state.Status},
        CourseCodes (state) { return state.CoursesCodes},
        Message: state => state.Message
        
    },
    mutations: {
        saveCurrentUser(state, data) {
            console.log(data)
            let user = {
                first_name: data.first_name,
                surname: data.surname,
                username: data.username,
                'Logged in': new Date()
            }
            state.User = user            
            state.msg = data.reason    
        },
        RemoveCourseCodes(state) {state.CoursesCodes = []},
        RemoveCurrentUser(state) {
            state.User = {}
            localStorage.removeItem('user');
            
        },
        StatusUpdate (state, msg) {
            state.Status = msg
        },

        saveCourseCodes (state, data)  {
            console.log(data)
            state.CourseCodes = data  
        },
        MessageUpdate (state, msg) {
            state.Message = msg
        }
    },


    actions: {         
        async sortUsersFirstName({ commit }, {object, reverse} ) {     
                let property = object.split('.');
                let l = property.length;
            
                let res = await this.state.currentUsers.sort((a, b) => {
                    var i = 0;
                    while( i < l) {
                        a = a[property[i]];
                        b = b[property[i]];
                        i++;
                    }
                    let direction = [-1, 1][+!!reverse];
                    return a==b ? 0 : direction * ((a > b) - (b > a));
                    // return a < b ? -1 : 1;
                });
        
            console.log(res)
        },

        async userFilter({ commit }, gender) {
            let res = await this.state.users.filter( a  =>  a.gender == gender )  
        },
        
        async getProMonData({commit}) {
            let res = await testData()   
            console.log(`ProMon Results: ${res}`)         
            commit('InitiateProMon', res)
            return res
        },

        // async checkLogIn({commit}) {
        //     if (localStorage.getItem('user'))
        //         {
        //             let user = JSON.parse(sessionStorage.getItem('user'))
        //             UpdateUser(user)
        //         }
        // },
        // promonitor login
        async PromonitorLogin({commit, dispatch, state}, user) {   
            commit('StatusUpdate', 'loading')                
            let res = await getLogin(user)
            if(res.status){
                console.log(state.CourseCodes)
                dispatch("UpdateUser", res.data.user)
                
                if (state.CourseCodes.length === 0){
                    dispatch('get_codes')
                }
            } else {
                commit('StatusUpdate', 'error') 
                commit('RemoveCurrentUser')
            }
        },

        UpdateUser({commit}, data)       {
            sessionStorage.setItem('user', JSON.stringify(data)) 
            commit('saveCurrentUser', data)
            commit('StatusUpdate', 'success') 
            // commit('main/PageTitle', `Logged in as ${data.username}`, {root: true})
        },

        UpdateStatus({commit}, data)       {
            commit('StatusUpdate', data) 

        },
        // Get the area codes
        async get_codes({commit, dispatch}) {   
            commit('StatusUpdate', 'getting codes')  
            let res = await getCourseCodes()
            console.log(res.status)
            if(res.status === 200){
                // As coures codes are new update local storage
                let CourseCodes = res.data.course_codes
                console.log(CourseCodes)
                dispatch('saveCourseCodes', CourseCodes)
                // commit('saveCourseCodes', CourseCodes) 
                localStorage.setItem('C_Codes', JSON.stringify(CourseCodes))
            } else {
                commit('StatusUpdate', 'error') 
                commit('RemoveCourseCodes')
            } 
        },
        saveCourseCodes({commit}, data) {          
            commit('saveCourseCodes', data)
            
            commit('StatusUpdate', 'success') 
            console.log('saveCourseCodes', data)        
        },
       
        AuthLogout({commit}) {
                commit('RemoveCurrentUser')
                commit('RemoveCourseCodes')
                commit('StatusUpdate', 'user logged out')
        },
        UpdateMessage({commit}, msg) {
            commit('MessageUpdate', msg)
        }
          
     
    }
}