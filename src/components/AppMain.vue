<script>
import { store } from '../store'
import AppCard from './AppCard.vue'

export default {
    components: {
        AppCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div v-for="(movie, index) in store.listMovies" class="col-4" :key="index">
                    <AppCard :info="movie"/>
                </div>
            </div>
            <div class="row">
                <div v-for="(serie, index) in store.listTvs" class="col-4" :key="index">
                    <AppCard :info="serie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>