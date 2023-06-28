import { reactive } from 'vue'

export const store = reactive({
    apiKey: '6672defba5feaae0463eb1827b7d1086',
    urlApiMoivie: 'https://api.themoviedb.org/3/search/movie',
    urlApiTv: 'https://api.themoviedb.org/3/search/tv',
    listMovie: [],
    listTv: []
})