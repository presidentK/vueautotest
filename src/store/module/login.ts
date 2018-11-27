import loginAction from '../action/loginAction'
import loginMutation from '../mutation/loginMutation'

export interface State{
    username: string,
    isLogin: boolean,
    loginTime: number
}

const state:State={
    username:"",
    isLogin:false,
    loginTime:0
}

export default {
    state,
    actions:loginAction,
    mutations:loginMutation
}