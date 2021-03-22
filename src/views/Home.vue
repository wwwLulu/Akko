<template>
    <div class="home">
        <div class="home__background"></div>
        <h1>Hello World</h1>
    </div>
</template>

<style lang="scss" scoped>
.home {
    &__background {
        position: fixed;
        z-index: -1;
        top: -20px;
        left: -20px;
        bottom: -20px;
        right: -20px;
        background-image: url('https://images.pexels.com/photos/6249543/pexels-photo-6249543.jpeg?cs=srgb&dl=pexels-ryutaro-tsukata-6249543.jpg&fm=jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(8px);
    }
}
</style>
