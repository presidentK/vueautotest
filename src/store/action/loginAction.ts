import {ActionContext} from 'vuex'
import {State,HttpResponse} from '../index'
import types from '../types'

export interface LoginParam{
    pwd:string,
    username:string
}
export interface UserSession{
    username:string,
    loginTime:number
}

export default {
    login(context:ActionContext<State,any>,payload:LoginParam){
        //ajax mock
        setTimeout(()=>{
            const payload:HttpResponse<UserSession>={code:0,msg:'ok',data:{username:'pf',loginTime:+Date.now()}};
            context.commit(types.LOGIN,payload);
        },2000)
    }
}