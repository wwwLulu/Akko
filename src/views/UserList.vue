<template>
    <div class="row">
        <UserProfile
            class="col-4"
            :username="'wwwLulu'"
            :userImgUrl="
                'https://avatars.githubusercontent.com/u/77130682?s=460&u=091475bd4b0999c440f2f381f38dc307b79a021a&v=4'
            "
        />
        <section class="lists col-8">
            <AnimeList
                v-if="watchingList.length != 0"
                :type="'Watching'"
                :animeList="watchingList"
            />
            <AnimeList
                v-if="completedList.length != 0"
                :type="'Completed'"
                :animeList="completedList"
            />
            <AnimeList
                v-if="planToWatchList.length != 0"
                :type="'Planning'"
                :animeList="planToWatchList"
            />
        </section>
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
    mounted() {
        this.$store.commit('sortUserList', this.sortMethod)
    },
    computed: {
        watchingList() {
            return this.$store.getters.watchingList
        },
        completedList() {
            return this.$store.getters.completedList
        },
        planToWatchList() {
            return this.$store.getters.planToWatchList
        },
    },
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    $columns: 12;
    [class^='col-'] {
        flex-basis: 100%;
    }

    @media (min-width: 1050px) {
        @for $i from 1 through $columns {
            .col-#{$i} {
                flex: 0 0 (100% / ($columns / $i));
            }
            .col-offset-#{$i} {
                margin-left: 100% / (($columns / $i));
            }
        }
    }
}

.lists {
    user-select: none;
    width: 100%;
    align-items: center;
    padding-bottom: 10rem;
    @media (max-width: 1050px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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
        background: rgba(255, 255, 255, 0.5);
    }
}
</style>
