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
    <div>
        {{ info.titolo }}, {{ info.titoloOriginale }}, {{ hasFlag(info.lingua.toUpperCase()) ? getUnicodeFlagIcon(info.lingua.toUpperCase()) : info.lingua }}, {{ info.voto }}
    </div>
</template>

<style lang="">
    
</style>