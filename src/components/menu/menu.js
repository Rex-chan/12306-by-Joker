const state = {
    active: ''
}

const mutations = {
    init(state, act){
        
        state.active = act
    }
}

const actions = {
    setActive(content, act){
        content.commit('init', act)
        console.log(act)
    }
}

export default {
    state,
    mutations,
    actions
}