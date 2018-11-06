<template>
    <div>
        <img v-for="image in allImages" :src="image.link"/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'ImageList',
    computed: mapGetters(['allImages']),             //computed: read data into our component and make it accessible from our template
    methods: mapActions(['fetchImages']),
    created() {                         //after we call the mapActions and access the fetchImages funciton we then call the lifecycle funciton created
                                        //to actually call the fetchImages function
                this.fetchImages();
    }
}
</script>

<style scoped>

</style>
