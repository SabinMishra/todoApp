import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[],
    temp:[],
    completed:[],
    cancelled:[],
    all:[],
    cancelCount:0,
    completeCount:0,
    totalCount:0
  },
  getters:{
    cancelled: state=>{
      return state.cancelCount;

     
    },
    completed:state=>{
      return state.completeCount;
    },
    total:state=>{return state.totalCount},
    stat:state=>{return state.all}
    
    
  },
  mutations: {
    remove : (state,payload) =>{
      let getIndex = state.tasks.map(item=>{return item.title}).indexOf(payload);
      state.tasks[getIndex].status = 'cancelled';
      state.cancelled.push(state.tasks[getIndex]);
      state.tasks.splice(getIndex,1);
      state.cancelCount +=1;
      
      
    },
    addTask:(state,payload)=>{
      state.tasks.push(payload);
      state.temp.push(payload);
      state.totalCount += 1;
    },
    completed : (state,payload) =>{
      let getIndex = state.tasks.map(item=>{return item.title}).indexOf(payload);
      state.tasks[getIndex].status = 'completed'
      state.completed.push(state.tasks[getIndex]);
      state.tasks.splice(getIndex,1);  
      state.completeCount += 1
    },
    displayStats : state =>{
      if(state.temp.length > 0){
        state.all.push(...state.temp);
        console.log('Hello')
      }
      else if(state.cancelled.length > 0){
        state.all.push(...state.cancelled);
      }
      else if(state.completed.length > 0){
        state.all.push(...state.completed);
      }
      
      state.temp = [];
      state.completed = [];
      state.cancelled = [];
    }
    

    },
  actions: {
    remove:({commit},payload)=>{commit('remove');},
    addTask:({commit},payload)=>{commit('addTask')},
    cancelled:({commit})=>{commit('cancelled')},
    completed:({commit},payload)=>{commit('completed')},
    displayStats:({commit})=>{commit('displayStats')}
  },
  modules: {
  }
})
