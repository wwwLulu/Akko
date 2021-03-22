<template>
    <div class="list-container">
        <p class="list__heading">{{ type }}</p>
        <section class="list">
            <div class="list__headers">
                <div class="list__headers--left">
                    <p class="list__title">Title</p>
                </div>
                <div class="list__headers--right">
                    <p class="list__score">Score</p>
                    <p class="list__progress">Progress</p>
                    <p class="list__type">Type</p>
                </div>
            </div>
            <AnimeListEntry
                :coverUrl="
                    `https://res.cloudinary.com/sfp/image/upload/oth/FunimationStoreFront/1346465/English/1346465_English_KeyArt-OfficialVideoImage_ef5f2b49-3e83-e611-80c5-0017a4776c06.jpg`
                "
                :title="'Serial Experiments Lain'"
                :score="10"
                :progress="'12/13'"
                :type="'TV'"
            />
            <AnimeListEntry
                :coverUrl="
                    `https://c.wallhere.com/photos/d0/70/anime_anime_girls_Kantai_Collection_Taihou_KanColle_loli_no_bra_stretching-70423.jpg!d`
                "
                :title="'Poopy'"
                :score="7"
                :progress="'1/1'"
                :type="'OVA'"
            />
            <AnimeListEntry
                :coverUrl="
                    `https://static.zerochan.net/Izumi.Sagiri.600.2089372.jpg`
                "
                :title="'Eromanga Sensei'"
                :score="5"
                :progress="'7/13'"
                :type="'TV'"
            />
        </section>
    </div>
</template>

<script>
import AnimeListEntry from '@/components/AnimeListEntry'

export default {
    props: {
        type: String,
    },
    components: {
        AnimeListEntry,
    },
    data() {
        return {
            animeList: [
                {
                    title: 'Serial Experiments Lain',
                    score: 10,
                    episodes: 24,
                    episodeOn: 12,
                    coverUrl: '',
                    type: '',
                    status: 'Watching',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.list {
    flex-direction: column;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 75rem;
    min-height: 1rem;
    background: white;
    * {
        color: rgba(0, 0, 0, 0.6);
    }
    &__heading {
        font-size: 2.2rem;
        font-weight: 100;
        color: var(--color-text-100);
        margin-bottom: 1rem;
    }
    &__headers {
        padding: 1rem 3rem 2rem 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        p {
            width: 8rem;
            text-align: center;
        }
        &--left {
            margin-left: 4rem;
        }
        &--right {
            display: flex;
        }
    }
}

.list-container {
    margin: 3rem 0;
}
</style>
