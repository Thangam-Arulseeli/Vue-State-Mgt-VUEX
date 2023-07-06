<!-- Use store by Composition API -->
<script setup>
    import { inject } from 'vue';
    const store = inject("store");
    // Can also destructure
   // const {state} = inject('store');
</script>
<template>
    Name: {{ store.state.name }}
</template>

<!-- Use store by Options API -->
<script>
    // export default {
    //     inject: ["store"],
    //     mounted(){
    //         console.log(this.store);
    //         console.log(this.store.state.name);
    //     }
    // }
</script>