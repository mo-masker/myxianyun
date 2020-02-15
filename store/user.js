export const state =()=>{
    return {
        // 用户信息，存放登录后返回的数据
        userInfo:{
            user:{}
        }
    }
} 

export const mutations = {
    setUserInfo(state,data){
        state.userInfo = data
    }
}