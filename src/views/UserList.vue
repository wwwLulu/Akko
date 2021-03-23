<template>
    <UserProfile
        :username="'wwwLulu'"
        :userImgUrl="'https://avatarfiles.alphacoders.com/262/262565.jpg'"
    />
    <div class="lists">
        <AnimeList
            :type="'Watching'"
            :animeList="
                animeList.filter(
                    (anime) =>
                        anime.episodes > anime.episodeOn && anime.episodeOn > 1
                )
            "
            @sortUserList="sortUserList"
        />
        <AnimeList
            :type="'Completed'"
            :animeList="
                animeList.filter((anime) => anime.episodes <= anime.episodeOn)
            "
            @sortUserList="sortUserList"
        />
        <AnimeList
            :type="'Plan To Watch'"
            :animeList="animeList.filter((anime) => anime.episodeOn <= 1)"
            @sortUserList="sortUserList"
        />
    </div>
</template>

<script>
import AnimeList from '@/components/AnimeList'
import UserProfile from '@/components/UserProfile'

export default {
    components: {
        AnimeList,
        UserProfile,
    },
    data() {
        return {
            sortMethod: 'score',
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
            ],
        }
    },
    mounted() {
        this.sortUserList(this.sortMethod)
    },
    methods: {
        sortUserList(method) {
            if (method == 'score') {
                this.sortByScoreDesc()
            } else {
                this.sortByTitleAZ()
            }
        },
        sortByTitleAZ() {
            this.animeList.sort((a, b) => a.title > b.title)
        },
        sortByTitleZA() {
            this.animeList.sort((a, b) => a.title < b.title)
        },
        sortByScoreAsc() {
            this.animeList.sort((a, b) => a.score - b.score)
        },
        sortByScoreDesc() {
            this.animeList.sort((a, b) => b.score - a.score)
        },
    },
}
</script>

<style lang="scss" scoped>
.lists {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;
}
.background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('https://i.redd.it/mtti5nldvlr51.png');
    background-size: cover;
    background-position: center;
    background-repeat: none;
    filter: blur(8px);
    &::after {
        content: '';
        position: fixed;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: rgba(0, 0, 0, 0.5);
    }
}
</style>
