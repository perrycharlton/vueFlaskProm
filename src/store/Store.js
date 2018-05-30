import Test from "../tools/get-dummy-data"
import { testData } from "../tools/get-proMon-data"
export default {
    
    state: {
        users: [],
        currentUsers: [],
    },
    getters: {
        users (state) {return state.users} ,
        currentState (state) {return state.currentUsers},
        proMon (state) {return state.proMon}

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
        }
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

        // async updateCourseCodes({commit}) {
        //     let vm = new ProMon()
        //     let res = await vm.testData()   
        //     console.log(`ProMon Results: ${res}`)         
        //     commit('InitiateCourseCodes', res)
        //     return res
        // }  
    }
}