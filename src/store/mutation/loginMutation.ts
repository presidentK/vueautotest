import types from '../types'
import {HttpResponse} from "../index";
import {State} from '../module/login'
import {UserSession} from "../action/loginAction";

export default{
    [types.LOGIN](state:State,payload:HttpResponse<UserSession>){
        state.username=payload.data.username;
        state.loginTime=payload.data.loginTime;
        state.isLogin=true;
    }
}