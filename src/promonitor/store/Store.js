import { testData, get, getStudentImg, getCodes, getStudentInfo, post } from "../external/get-proMon-data"

export default {
    namespaced: true,

    state: {
        User: {},
        Status: false,
        login_status: false,

        myGroups: [],
        myGroups_status: false,

        area_codes: [],
        area_codes_status: false,

        college_codes: [],
        college_codes_status: false,        

        course_codes: [],
        course_codes_status: false,
        current_course_code: '',

        students: [],
        studentsPhotos: [],
        studentsDetails: [],
        student_group: [],
        student_group_status: false,


        Courses: {},
        course_code_status: false,

        btnText: '',

        Message: ''
    },
    getters: {
        User: state => state.User,
        Status(state) { return state.Status },
        login_status: (state) => state.login_status,

        myGroups(state) { return state.course_codes },
        myGroups_status: (state) => state.course_codes_status,

        course_codes(state) { return state.course_codes },
        course_codes_status: (state) => state.course_codes_status,


        area_codes(state) { return state.area_codes },
        area_codes_status: (state) => state.area_codes_status,

        college_codes(state) { return state.area_codes },
        college_codes_status: (state) => state.area_codes_status,        

        StudentDetails (state) {
            let newObject = []
            state.students.forEach(student => {
                const studentInfo = state.studentsPhotos.find(item => item.id === student.id)
                const studentMoreInfo = state.studentsDetails.find(item => item.id === student.id)
                newObject.push(Object.assign({}, studentInfo, studentMoreInfo, student))   
            })  
            return newObject
        },
        student_group(state) { return state.student_group },
        student_group_status: (state) => state.student_group_status,

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

        RemoveCurrentUser(state) {
            state.User = {}
            localStorage.removeItem('user');

        },
        login_status: (state, data) => state.login_status = data,

        Remove_area_codes(state) { state.area_codes = [] },

        myGroups(state, data) { state.myGroups = data },
        myGroups_status: (state, data) => state.myGroups_status = data,

        area_codes(state, data) { state.area_codes = data },
        area_codes_status: (state, data) => {
            state.area_codes_status = data
            state.btnText = "Select Codes"
        },


        college_codes(state, data) { state.area_codes = data },
        college_codes_status: (state, data) => {
            state.area_codes_status = data
            state.btnText = "Select Codes"
        },

        course_codes(state, data) { state.course_codes = data },
        course_codes_status: (state, msg) => { state.course_codes_status = msg },
        current_course_code: (state, code) => { state.current_course_code = code },

        students(state, data) { state.students = data },
        studentsPhotos(state, data) { state.studentsPhotos = data },
        studentsDetails(state, data) { state.studentsDetails = data },

        student_group(state, data) { state.student_group = data },

        student_group_update(state, data) { state.student_group.img = data },

        student_group_status: (state, data) => state.student_group_status = data,

        StatusUpdate(state, msg) { state.Status = msg },

        MessageUpdate(state, msg) { state.Message = msg },

        btnText(state, text) { state.btnText = text },

        get_student_info(state, data) { state.get_student_info = data },

        update_student_info: (state, data) => {
            state.student_group = data
        },
        updateStudentPhoto: (state, {index, photo}) => {
            state.student_group[index] = Object.assign({}, state.student_group[index], {'photo':photo})
        },
        updateStudent: (state, { index, data }) => {
            state.student_group[index] = Object.assign({}, state.student_group[index], data)
        },
        updateStudentTest: (state,  data ) => {
            state.student_group =  data
        },
    },


    actions: {
        async sortUsersFirstName({ commit }, { object, reverse }) {
            let property = object.split('.');
            let l = property.length;

            let res = await this.state.currentUsers.sort((a, b) => {
                var i = 0;
                while (i < l) {
                    a = a[property[i]];
                    b = b[property[i]];
                    i++;
                }
                let direction = [-1, 1][+!!reverse];
                return a == b ? 0 : direction * ((a > b) - (b > a));
                // return a < b ? -1 : 1;
            });
        },

        async userFilter({ commit }, gender) {
            let res = await this.state.users.filter(a => a.gender == gender)
        },

        async getProMonData({ commit }) {
            let res = await testData()
            console.log(`ProMon Results: ${res}`)
            commit('InitiateProMon', res)
            return res
        },

        // promonitor login
        async PromonitorLogin({ commit, dispatch, state }, user) {
            // commit('StatusUpdate', 'loading')    
            commit('MessageUpdate', "Just checking your details")
            let res = await post('promonitor/login', user)
            // res = {'status':'ok','user': user, 'token': prom_token, 'student_groups':course}
            if (res.status) {
                // console.log(state.CourseCodes)

                if (state.area_codes.length === 0) {
                    dispatch("UpdateUser", res.data)

                    // This will get area codes
                    // dispatch('get_codes', {'code':'area_codes','url':''})
                } else {
                    commit('MessageUpdate', 'No data was return')
                }

            } else {
                // commit('StatusUpdate', 'error') 
                commit('RemoveCurrentUser')
                commit('login_status', false)
                commit('MessageUpdate', 'There seems to be a problem!')
                commit('area_codes_status', msg)
                commit('current_course_code', '')
                commit('course_codes_status', msg)
            }
        },

        UpdateUser({ commit }, data) {
            // data = {'status':'ok','user': user, 'token': prom_token, 'myGroups':course}
            sessionStorage.setItem('user', JSON.stringify(data['user']))
            sessionStorage.setItem('myGroups', JSON.stringify(data['myGroups']))
            commit('saveCurrentUser', data['user'])
            commit('myGroups', data['myGroups'])
            commit('myGroups_status', true)
            commit('StatusUpdate', 'success')
            commit('login_status', true)
            let msg = `Well done ${data.user.first_name}, all seems good, so far!
            Either select your own groups or select an Area code`
            commit('MessageUpdate', msg)

            commit('main/PageTitle', `Logged in as ${data.user.username}`, { root: true })

        },

        // Get the area codes
        async get_codes({ commit, dispatch }, code) {
            commit('StatusUpdate', 'getting codes')

            let res = await get(`/promonitor/${code.code}`, { params: { url: code.href } })
            if (res.status === 200) {
                let data = res.data

                commit(code.code, data)
                commit('StatusUpdate', 'success')
                commit(`${code.code}_status`, true)

            } else {
                commit('StatusUpdate', 'error')
                commit(`${code.code}_status`, false)
                commit('Remove_' + code)
                commit('current_course_code', '')
            }
        },
        async getStudents({commit, dispatch}, CourseCode) {
            let students = await get(`/promonitor/student_group`, { params: { url: CourseCode } })
            
            
            commit('students', students.data)
            commit('student_group_status', 'true')
            // console.log("This is the student datat", students.data)
            dispatch('studentsPhotos')
            dispatch('studentsDetails')
            
        },
        async studentsPhotos({commit, state}){
            let photo = await post('promonitor/student_img', state.students)
            // console.log("This is the student photo", photo.data)
            commit('studentsPhotos', photo.data)
        },
        async studentsDetails({commit, state}){
            let details = await post('promonitor/studentinfo', state.students)            
            let moreDetails = await post('promonitor/students_more_details', state.students)
            let newObject = []
            Promise.all([ details, moreDetails]).then((response) => {
                state.students.forEach(student => {
                    const studentInfo = response[0].data.find(item => item.id === student.id)
                    const studentMoreInfo = response[1].data.find(item => item.id === student.id)
                    console.log(studentInfo['data'], studentMoreInfo['data'])
                    newObject.push(Object.assign({}, studentInfo['data'], studentMoreInfo['data'], {'id':student.id}))   
                })  
                commit('studentsDetails', newObject)
            })                
        },

        AuthLogout({ commit }) {
            commit('RemoveCurrentUser')
            commit('Remove_area_code')
            commit('StatusUpdate', 'user logged out')
        },

        UpdateMessage({ commit }, msg) { commit('MessageUpdate', msg) },
        UpdateStatus({ commit }, data) { commit('StatusUpdate', data) },
        login_status: ({ commit }, msg) => { commit('login_status', msg) },
        area_codes_status: ({ commit }, msg) => {
            commit('area_codes_status', msg)
            // commit('MessageUpdate', 'Ok, lets try anothe area')
        },
        course_codes_status: ({ commit }, msg) => {
            commit('course_codes_status', msg)

        },

        // student_group_status: ({ commit }, msg) => commit('student_group_status', msg),

        btnText: ({ commit }, text) => { commit('btnText', text) },
        current_course_code: ({ commit }, title) => commit('current_course_code', title),

        student_img: ({ commit, state }) => {
            let studentImg = []
            let studentDetails = []

            let newObject = []
            state.students.forEach((element) => {
                studentImg.push({ 'imgid': element.imgid, 'id':element.id })
                studentDetails.push({ 'pmstudentid': element.pmstudentid, 'id':element.id })

            });
            let image =  post('promonitor/student_img', studentImg)
            let info = post('promonitor/studentinfo', studentDetails)
            let moreInfo =  post('promonitor/students_more_details', studentDetails)
            let attendance =  post('promonitor/students_attendance', studentDetails)
            Promise.all([image, info, moreInfo, attendance]).then((response) => {

                state.student_group.forEach(student => {
                    const studentPhoto = response[0].data.find(item => item.id === student.id)
                    const studentInfo = response[1].data.find(item => item.id === student.id)
                    const studentMoreInfo = response[2].data.find(item => item.id === student.id)
                    const studentAttendance = response[3].data.find(item => item.id === student.id)

                    newObject.push(Object.assign({}, 
                        {'photo': studentPhoto.photo }, 
                        studentInfo['data'],  
                        studentMoreInfo['data'], 
                        studentAttendance['data'],
                        student))                    
                })
                commit('updateStudentTest', newObject)
            })
        },
        student_info: ({ commit, state }) => {
            let studentObject = []
            state.student_group.forEach((element) => {
                studentObject.push({ 'url': element.href, 'id': element.id })
            })
            let info = post('promonitor/studentinfo', studentObject)
            Promise.all([info]).then((response) => {
                let students = response[0].data
                students.forEach(student => {
                    commit('updateStudent', { 'id': student.id, 'data': student.data })
                })
            });
        },
        student_more_details: ({ commit, state }) => {
            let studentObject = []
            state.student_group.forEach((element) => {
                studentObject.push({ 'url': element.href, 'id': element.id })
            })
            let info = post('promonitor/student_more_details', studentObject)
            Promise.all([info]).then((response) => {
                let students = response[0].data
                students.forEach(student => {
                    commit('updateStudent', { 'id': student.id, 'data': student.data })
                })
            });
        },
        attendance: ({ commit }) => commit('attendance')
    }
}