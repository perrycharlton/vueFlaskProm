import Test from "../../tools/get-dummy-data"
import { testData, getCr, removeToken } from "../../promonitor/external/get-proMon-data"
import { adminLogOut, adminLogIn } from "../../admin/external/get-admin-data"


export default {
    namespaced: true,
    state: {
        PageTitle: "",
        Image:""
    },
    getters: {  
        getPageTitle (state) {return state.PageTitle},
        getImage (state) {return state.Image}
    },
    mutations: {
        PageTitle(state, msg){
            state.PageTitle = msg
        },
        Image(state, msg){
            state.Image = msg
        },
    },
    actions: {
        updatePageTitle({commit}, msg) {
            commit('PageTitle', msg)
        }, 
        updateImage({commit}, msg) {
            commit('Image', msg)
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
        },

        async userFilter({ commit }, gender) {
            let res = await this.state.users.filter( a  =>  a.gender == gender )  
        },

                 
     
    }
}