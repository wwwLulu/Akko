<template>
    <AnimeList :type="'Watching'" />
    <br />
    <br />
    <AnimeList :type="'Completed'" />
</template>

<script>
import AnimeList from '@/components/AnimeList/AnimeList'

export default {
    components: {
        AnimeList,
    },
}
</script>
