<template>
<div class="counter"
        :style="{ color: this.$store.state.colorCode }">
      {{this.$store.state.counter}}
    </div>
</template>
