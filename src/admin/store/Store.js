import { adminLogOut, adminLogIn } from "../external/get-admin-data"

export default {
    namespaced: true,

    state: {
        User: {'username': '','Logged in': ''}, 
        Status: false,
        PageTitle: "",
        msg: ""
    },
    getters: {
        User (state) {return state.User},
        Status (state) {return state.Status},
        getPageTitle (state) {return state.PageTitle},
        Errors (state) {state.msg}
         
    },
    mutations: {
        PageTitle(state, msg){
            state.PageTitle = msg
        },
        saveCurrentUser(state, data) {
            let user = {
                'username': data.username,
                'Logged in': new Date()
            }
            state.User = user
            state.Status = True
            state.msg = data.msg
        },
        RemoveCurrentUser(state, data) {
            state.User = {
                'username': '',
                'Logged in': ''
            }
            state.Status = false
            state.msg = data.msg
        },
    },
    actions: {
        updatePageTitle({commit}, msg) {
            commit('PageTitle', msg)
        },       
        async AdminLogin({commit, dispatch}, user) {                
            // commit('AuthRequest')
            let res = await adminLogIn(user)
            if(res.data.status){
                commit('saveCurrentUser', res.data)
            } else {
                commit('RemoveCurrentUser', res.data)
            }
        },
        AdminLogout({commit, dispatch}) {
                commit('RemoveCurrentUser', {'msg': 'User has Logged off'})
        }
    }
}