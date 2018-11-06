<template>
   <div>
       <AppHeader></AppHeader>
       <router-view></router-view> 
       <!-- Calls the AuthHandlertemplate tag whichis linked to the router. -->
   </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
    name: 'App',
    components: {
        AppHeader
    }
}
</script>

<style scoped>

</style>
