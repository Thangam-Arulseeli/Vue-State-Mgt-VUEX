import { createStore } from 'vuex'
//import {axios} from 'axios'

export default createStore({
  state: {       /// contails the ppty/variable which change the state
    counter: 10,
    colorCode: 'blue'
  },
  getters: {
    counterSquare(state){
      return state.counter * state.counter
    }
  },
  mutations: {     /// mutation functions that make the changes
      increaseCounter(state){
        state.counter++
      },
      
      //increaseCounter(state, randomNumber){
      //   //console.log('randomNumber: ',randomNumber)
      //   state.counter += randomNumber
      // },

      decreaseCounter(state){
        if (state.counter<= 0)
          state.counter=0
        else
          state.counter--;
      },

      setColorCode(state, newVal){
        state.colorCode = newVal
    }
    },

  actions: {       // contains asynchronous code
   // increaseCounter(){     // install in command line --- npm install axiox 
     //  state.counter++          // Google -- Random number api & copy the link and paste 
   // console.log('+') 
   // },
    // increaseCounter({commit}){
    //   axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    //       .then(response => { 
    //         commit('increaseCounter', response.data)
    //   })
    // }
    setColorCode( {commit }, newVal){
      commit('setColorCode',newVal)
    }
  },

  modules: {
  }
})


// import {reactive} from 'vue';

// const state = reactive({ name: "CGVAK Software & Exports Ltd"});
// export default { state: state};
