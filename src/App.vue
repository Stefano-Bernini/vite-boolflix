<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'

export default {
  components:{
    AppHeader,
    AppMain,
    AppCard
  }
  
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
