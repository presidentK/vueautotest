interface Order{
    orderNo:string,
    orderStatus:number,
    orderTime:number,
    userId:string
}
interface State{
    orders:Order[]
}

const state:State={
    orders:[]
}

export default {
  state
}