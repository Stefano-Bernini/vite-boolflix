<script>
import { store } from '../store'

export default {
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div v-for="(movie, index) in store.listMovies" class="col-12" :key="index">
                    {{ movie }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>