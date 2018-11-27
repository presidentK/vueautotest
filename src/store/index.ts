import login,{State as LoginState} from './module/login'
import order from './module/order'

export interface State{
    login: LoginState
}
export interface HttpResponse<T> {
    code?:number,
    msg?:string,
    data?:T
}

export default {
    modules:{
        login,
        order
    }
}