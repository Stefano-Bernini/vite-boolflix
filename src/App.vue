<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    doSearch() {
      store.listMovies.length = 0;
      store.listTvs.length = 0;
      axios.get(store.urlApiMovie, {
          params: {
            api_key: store.apiKey,
            query: store.searchText,
            language: "it-IT",
          },
        })
        .then(function (response) {
          // handle success
          let movies = response.data.results;
          for (let i = 0; i < movies.length; i++) {
            store.listMovies.push({
              titolo: movies[i].title,
              titoloOriginale: movies[i].original_title,
              lingua: movies[i].original_language,
              voto: movies[i].vote_average,
              copertina: movies[i].poster_path,
              desc: movies[i].overview
            });
          }
          console.log(movies)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        
        axios.get(store.urlApiTv, {
          params: {
            api_key: store.apiKey,
            query: store.searchText,
            language: "it-IT",
          },
        })
        .then(function (response) {
          // handle success
          let series = response.data.results;
          for (let i = 0; i < series.length; i++) {
            store.listTvs.push({
              titolo: series[i].name,
              titoloOriginale: series[i].original_name,
              lingua: series[i].original_language,
              voto: series[i].vote_average,
              copertina: series[i].poster_path,
              desc: series[i].overview
            });
          }
          console.log(series)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },
  },
};
</script>

<template>
  <div>
    <AppHeader @performSearch="doSearch" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
