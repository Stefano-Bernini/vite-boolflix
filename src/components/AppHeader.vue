<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
        }
    },
    emits: ['performSearch']
}
</script>"
<template>
    <div>
        <div class="container ">
            <div class="row">
                <div class="col-6">
                    <div class="input_film_tv_title">
                        <input type="text" v-model="store.searchText">
                        <button @click="$emit('performSearch')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>