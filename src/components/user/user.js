const state ={
    username: '',
    active: '全部',
}
const mutations = {
    saveUsername(_state, _username){
        _state.username = _username;
    },
    tabFocus(_state, _tabText){
        _state.active = _tabText;
        console.log(_tabText)
    }
}
const actions = {
    saveUsername(_content, _username){
        _content.commit('saveUsername', _username)
    },
    tabFocus(_content, _tabText){  
        _content.commit('tabFocus', _tabText)
    }
}
export default {
    state,
    mutations,
    actions
}