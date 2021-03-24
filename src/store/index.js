import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            animeList: [
                {
                    title: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
                    score: 8,
                    episodes: 24,
                    episodeOn: 12,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/1068/111129.jpg',
                    type: 'TV',
                },
                {
                    title: 'Made In Abyss',
                    score: 10,
                    episodes: 13,
                    episodeOn: 13,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/6/86733.webp',
                    type: 'TV',
                },
                {
                    title: 'Ore no Imouto ga Konnani Kawaii Wake ga Nai',
                    score: 8,
                    episodes: 12,
                    episodeOn: 12,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/8/24875.jpg',
                    type: 'TV',
                },
                {
                    title: 'Anohana.',
                    score: 9,
                    episodes: 11,
                    episodeOn: 11,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/5/79697.jpg',
                    type: 'TV',
                },
                {
                    title: 'Barakamon',
                    score: 8.5,
                    episodes: 11,
                    episodeOn: 11,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/12/65427.jpg',
                    type: 'TV',
                },
                {
                    title: 'Katanagatari',
                    score: 0,
                    episodes: 11,
                    episodeOn: 1,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/2/50023.jpg',
                    type: 'TV',
                },
                {
                    title: 'Little Witch Academia',
                    score: 7.5,
                    episodes: 24,
                    episodeOn: 11,
                    coverUrl:
                        'https://cdn.myanimelist.net/images/anime/13/83934.jpg',
                    type: 'TV',
                },
            ],
        }
    },
    getters: {
        watchingList(state) {
            return state.animeList.filter(
                (anime) =>
                    anime.episodes > anime.episodeOn && anime.episodeOn > 1
            )
        },
        completedList(state) {
            return state.animeList.filter(
                (anime) => anime.episodes <= anime.episodeOn
            )
        },
        planToWatchList(state) {
            return state.animeList.filter((anime) => anime.episodeOn <= 1)
        },
    },
    mutations: {
        updateScore(state, { title, newScore }) {
            state.animeList.forEach((anime) => {
                if (anime.title == title) {
                    anime.score = +newScore
                }
            })
        },
        updateProgress(state, { title, episode }) {
            state.animeList.forEach((anime) => {
                if (anime.title == title) {
                    anime.episodeOn = +episode
                }
            })
        },
        incrementEpisode(state, title) {
            state.animeList.forEach((anime) => {
                if (anime.title == title && anime.episodeOn != anime.episodes) {
                    anime.episodeOn++
                }
            })
        },
        sortUserList(state, method) {
            if (method == 'score') {
                state.animeList.sort((a, b) => b.score - a.score)
            } else {
                state.animeList.sort((a, b) => a.title > b.title)
            }
        },
        sortByTitleAZ(state) {
            state.animeList.sort((a, b) => a.title > b.title)
        },
        sortByTitleZA(state) {
            state.animeList.sort((a, b) => a.title < b.title)
        },
        sortByScoreAsc(state) {
            state.animeList.sort((a, b) => a.score - b.score)
        },
        sortByScoreDesc(state) {
            state.animeList.sort((a, b) => b.score - a.score)
        },
    },
    actions: {},
})
