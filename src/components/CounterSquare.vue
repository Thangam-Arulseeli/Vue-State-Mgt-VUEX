<template>
<div class="counter-squared">
      {{this.$store.state.counter}}
          <sup> 2 </sup> =
          {{this.$store.getters.counterSquare}}
    </div>
</template>