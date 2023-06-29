<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { hasFlag } from 'country-flag-icons'
export default {
    data(){
        return{
            getUnicodeFlagIcon,
            hasFlag
        }
    },
    props: ['info'],
}
</script>

<template>
    <hr/>
    <div>
        {{ info.titolo }}
    </div>
    <div>
        {{ info.titoloOriginale }},
    </div>
    <div>
        {{ hasFlag(info.lingua.toUpperCase()) ? getUnicodeFlagIcon(info.lingua.toUpperCase()) : info.lingua }},
    </div>
    <div>
        <i v-for="i in 5" :class="[ i <= Math.ceil(info.voto / 2) ? 'fa-solid': 'fa-regular', 'fa-star']" :key="i"></i>
    </div>
    <div>
        {{ 'https://image.tmdb.org/t/p/w300' + info.copertina }}
    </div>
</template>

<style lang="">
    
</style>