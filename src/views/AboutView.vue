<template>
  
  <div class="counter-squared">
    Square Value
      {{this.$store.state.counter}}
          <sup> 2 </sup> =
          {{this.$store.getters.counterSquare}}
    </div>
    
</template>
