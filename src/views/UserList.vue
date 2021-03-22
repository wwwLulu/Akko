<template>
    <UserProfile
        :username="'wwwLulu'"
        :userImgUrl="'https://avatarfiles.alphacoders.com/262/262565.jpg'"
    />
    <div class="container">
        <!-- <div class="background"></div> -->
        <AnimeList :type="'Watching'" />
        <AnimeList :type="'Completed'" />
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
}
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
