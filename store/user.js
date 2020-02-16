export const state = () => {
    return {
        // 用户信息，存放登录后返回的数据
        userInfo: {
            user: {}
        }
    }
}

// 固定的属性，同步修改state中的值
export const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    }
}

// 固定的属性，异步修改state中的值的方法，一般存放接口的请求
export const actions = {
    login(store, data) {
        // 提交到登录接口
        // 调用后会得到一个返回值
        return this.$axios({
            url: "/accounts/login",
            method: "post",
            data
        }).then(res => {
            const data = res.data;
            console.log(res);
            // 通过commit调用mutations中的方法，把登录成功后的数据传到仓库
            store.commit('setUserInfo', data)
        })


    }
}