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
    <header>
        <div class="container ">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="logo_boolflix">
                        <h1>BOOLFLIX</h1>
                    </div>
                    <div class="input_film_tv_title">
                        <input type="text" v-model="store.searchText" placeholder="inserisci titolo">
                        <button class="mx-1 btn btn-outline-danger" @click="$emit('performSearch')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .logo_boolflix h1{
        color: red;
        padding: 15px 0;
    }

    .inline_block{
        display: inline-block;
    }
</style>