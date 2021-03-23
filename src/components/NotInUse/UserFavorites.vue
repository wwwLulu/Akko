<template>
    <div class="user">
        <p class="user__favorites">Favorites</p>
        <div class="user__entry">
            <div class="user__cover-container">
                <img :src="coverUrl" alt="cover" class="user__cover" />
            </div>
            <p class="user__title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            coverUrl:
                'https://res.cloudinary.com/sfp/image/upload/oth/FunimationStoreFront/1346465/English/1346465_English_KeyArt-OfficialVideoImage_ef5f2b49-3e83-e611-80c5-0017a4776c06.jpg',
            title: 'Serial Experiments Lain',
        }
    },
}
</script>

<style lang="scss" scoped>
.user {
    &__favorites {
        width: 30rem;
        padding: 1rem;
        text-align: center;
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.6);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    &__entry {
        display: flex;
        margin-top: 1rem;
    }
    &__cover-container {
        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem;
    }
    &__cover {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__title {
        margin-left: 1rem;
        align-self: center;
        font-weight: 100;
        font-size: 1.4rem;
        color: rgba(0, 0, 0, 0.6);
    }
}
</style>
