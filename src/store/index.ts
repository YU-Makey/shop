import { createStore } from 'vuex'
import vux from 'vuex-persistedstate'
export default createStore({
  plugins:[vux()],
  state: {
    list:[]as any,
    cks:false,
    data:[]
  },
  getters: {
    pic(state){
      var a=0
      state.list.forEach((item:any)=>{
        if(item.ck){
          a+=item.num*item.minPrice*100
        }
      })
      return a
    }
  },
  mutations: {
    add(state,val){
      state.list.push({...val,num:1,ck:false})
    },
    ckall(state){
      state.list.forEach((item:any) => item.ck=state.cks);
    },
    check(state){
      state.cks=state.list.every((value:any) =>value.ck==true )
    },
  },
  actions: {
  },
  modules: {
  }
})
