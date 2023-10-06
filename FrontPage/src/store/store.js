import {createStore} from "vuex";


const store = createStore({
    state(){
        return{
            selectKey: 'M1',
        }
    },
    mutations:{
        toggleItem(state,value){
            state.selectKey = value
        }
    }
})

export default store