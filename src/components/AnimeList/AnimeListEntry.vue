<template>
    <div class="anime">
        <div class="anime__left">
            <div class="anime__cover-container">
                <img :src="coverUrl" alt="cover" class="anime__cover" />
            </div>
            <div class="anime__cover-container--hovering">
                <img :src="coverUrl" alt="cover" class="anime__cover--big" />
            </div>
            <p class="anime__title">{{ title }}</p>
        </div>
        <div class="anime__right">
            <p class="anime__score">{{ score }}</p>
            <p class="anime__progress">{{ progress }}</p>
            <p class="anime__type">{{ type }}</p>
            <!-- <i class="anime__favorite fa fa-heart"></i> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        coverUrl: String,
        title: String,
        score: Number,
        progress: String,
        type: String,
        isFavorited: Boolean,
    },
}
</script>

<style lang="scss" scoped>
.anime {
    position: relative;
    padding: 0.5rem 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background: slategray;
        color: white;
    }

    p:not(&__title) {
        width: 7rem;
        text-align: center;
    }
    &:last-child {
        outline: none;
    }
    &__left,
    &__right {
        display: flex;
        align-items: center;
    }
    &__left:not(:first-child),
    &__right:not(:first-child) {
        margin-left: 2rem;
    }

    &__cover-container {
        width: 4rem;
        height: 4rem;
    }
    &__cover-container--hovering {
        display: none;
    }
    &__cover,
    &__cover--big {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.5rem;
    }
    &:hover &__cover {
        display: none;
    }
    &:hover &__cover-container--hovering {
        display: block;
        position: absolute;
        left: -12rem;
        top: 0;
        width: 11rem;
        height: 15rem;
    }
    &__title {
        font-weight: 100;
        margin-left: 2rem;
    }
    &__score,
    &__progress,
    &__type,
    &__favorite {
        margin-right: 3rem;
        font-weight: 100;
    }
    // &__favorite {
    //     color: red;
    // }
    // &__favorited {
    //     background: red;
    // }
    @media (max-width: 800px) {
    }
}
</style>
