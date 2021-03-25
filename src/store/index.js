import { createStore } from 'vuex'

import userList from '@/store/userList'

const store = createStore({
    modules: {
        userList,
    },
    state() {
        return {
            userId: 'c3',
            userAvatar:
                'https://avatars.githubusercontent.com/u/77130682?s=460&u=091475bd4b0999c440f2f381f38dc307b79a021a&v=4',
            userName: 'wwwLulu',
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        userAvatar(state) {
            return state.userAvatar
        },
        userName(state) {
            return state.userName
        },
    },
})

export default store
