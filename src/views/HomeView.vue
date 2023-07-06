<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div class="counter"
        :style="{ color: $store.state.colorCode }">
      {{$store.state.counter}}
    </div> 
    <!-- <counter /> -->
    
    <div class="counter-squared">
      {{$store.state.counter}}
          <sup> 2 </sup> =
          {{$store.getters.counterSquare}}
    </div>
     <!-- <counterSquare /> -->

    <div class="buttons">
       <button @click="$store.commit('decreaseCounter')"> - </button>
       <!-- commit is used to call mutation functions-->
         <button @click="$store.commit('increaseCounter')"> + </button>  
       <!-- <button @click="$store.dispatch('increaseCounter')"> + </button>  -->
      <!-- dispatch() method is used instead of commit method -->
    </div>
    
    <br /> <br />

  <div>
    <input type="text" placaholder="Enter color code" 
           v-model="colorCode" />
          <!-- v-model="$store.state.colorCode" /> --> 
           
           </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquare from "../components/CounterSquare.vue";
export default {
  name: 'HomeView' ,  
  components:{
    "counter": require("@/components/Counter.vue").default,
    "counterSquare": require("@/components/CounterSquare.vue").default,
    CounterSquare
},
  // data(){
  //   return{
  //     counter: 0
  //   }
  // },
  // methods:{
  //   increaseCounter(){
  //     this.counter++
  //   },
  //   decreaseCounter(){
  //     if (this.counter<= 0)
  //       this.counter=0
  //     else
  //       this.counter--;
  //   }
  // }
  computed:{
    colorCode: {
      get(){
        return this.$store.state.colorCode
      },
      set(newVal){
       // this.$store.commit('setColorCode',newVal)
      this.$store.dispatch('setColorCode', newVal)
      }
    }
  }
  }

</script>
<style>
  .div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }
  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
  .counter-squared{
    font-size: 40px;
    color:indianred
  }
</style>
