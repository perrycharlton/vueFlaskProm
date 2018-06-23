import Test from "../tools/get-dummy-data"
import { testData, getCr, removeToken } from "../promonitor/external/get-proMon-data"
export default {
    
    state: {
        users: [],
        currentUsers: [],
        token: localStorage.getItem('user-token') || '',
        status: '',
    },
    getters: {
        users (state) {return state.users} ,
        currentState (state) {return state.currentUsers},
        proMon (state) {return state.proMon},
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,

    },
    mutations: {
        InitiateUsers(state, users) {
            state.users = users
            state.currentUsers = users            
        },
        saveCurrentState(state, users) {
            state.currentUsers = users
        },
        updateCurrentUsers(state, users) {
            state.currentUsers = users
        },
        InitiateProMon(state, proMon) {
            state.proMon = proMon           
        },
        AuthRequest: (state) => {
            state.status = 'loading'
        },
        AuthSuccess: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AuthError: (state) => {
            state.status = 'error'
        },
    },
    actions: {
        resetCurrentState({commit}) {
            let res = this.getters.users
            commit('updateCurrentUsers', res )
            return res
        },

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
            commit('updateCurrentUsers', res )
            return res
        },

        async userFilter({ commit }, gender) {
            let res = await this.state.users.filter( a  =>  a.gender == gender )
            commit('updateCurrentUsers', res)
            return res    
        },

        async getData({commit}) {
            let vm = new Test()
            let res = await vm.testData()            
            commit('InitiateUsers', res.results)
            return res.results
        },
        
        async getProMonData({commit}) {
            // let vm = new ProMon()
            let res = await testData()   
            console.log(`ProMon Results: ${res}`)         
            commit('InitiateProMon', res)
            return res
        },

        async AuthRequest({commit, dispatch}, user) {
            // return await ((resolve, reject) => { // The Promise used for router redirect in login
                
                commit(AuthRequest)
                let res = await getCr(user)
                if(res.success){
                     const token = res.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                    commit(AuthSuccess, token)
                    
                    // dispatch(USER_REQUEST)
                } else {
                    commit(AuthError, res.err)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    // reject(err)
                }
               
            // })
        },
        AuthLogout({commit, dispatch}) {
                commit(AuthLogout)
                localStorage.removeItem('user-token') // clear your user's token from localstorage
            return "User Logged Out"
        },
        AdminLogout({commit, dispatch}) {
                commit(AdminLogout)
                localStorage.removeItem('admin-token') // clear your user's token from localstorage
            return "Admin Logged Out"
        }
    }
}