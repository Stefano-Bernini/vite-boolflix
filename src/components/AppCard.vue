<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { hasFlag } from 'country-flag-icons'
export default {
    data(){
        return{
            getUnicodeFlagIcon,
            hasFlag,
            isHover: false,
        }
    },
    props: ['info'],
    methods: {
        getFlag() {
        return `/node_modules/country-flag-icons/flags/1x1/${this.info.lingua.toUpperCase()}.svg`;
      },
    }
}
</script>

<template>
    <div class="container my-2 mx-2" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <div class="img-container">
            <img class="size" v-if="info.copertina" :src="'https://image.tmdb.org/t/p/w342' + info.copertina"/>
            <img class="size" v-else src="/src/assets/punto_interrogativo.png"/>
        </div>
        <div class="text-container">
            <div class="row">
                <div class="col">
                    Titolo: {{ info.titolo }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Titolo Originale: {{ info.titoloOriginale }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span>Lingua: </span>
                    <img v-if="hasFlag(info.lingua.toUpperCase())" id="flag" :src="getFlag()"/>
                    <span v-else> {{ info.lingua.toUpperCase() }} </span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Voto: <i v-for="i in 5" :class="[ i <= Math.ceil(info.voto / 2) ? 'fa-solid': 'fa-regular', 'fa-star']" :key="i"></i>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Overview:  {{ info.desc }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .container {
        position: relative;
        height: 600px;
        width: 342px;
    }
    .text-container {
        position: absolute;
        top: 0;
        left: 0;
        visibility: v-bind("isHover? 'visible': 'hidden'");
        overflow-y: auto;
        height: 100%;
        width: 100%;
        padding: 2em;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
    }
    .text-container::-webkit-scrollbar {
        display: none;
    }
    .img-container {
        opacity: v-bind("isHover? '0.3': '1'");
        height: 100%;
        width: 100%;
    }

    .fa-solid{
        color: gold;
    }

    .size{
        height: 600px;
        width: 342px;
    }

    #flag {
        width: 0.9em;
    }


</style>