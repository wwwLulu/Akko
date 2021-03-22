<template>
    <router-view />
</template>

<style lang="scss">
:root {
    --color-primary: #58abda;
    --color-text-100: rgba(0, 0, 0, 0.6);
    --color-text-200: rgba(0, 0, 0, 0.6);
}
html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    @media (max-width: 650px) {
        font-size: 50%;
    }
}
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: Meiryo, sans-serif, monospace;
    background: #eaeaea;
    max-width: 1925px;
    margin: 0 auto;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    min-height: 100vh;
}
</style>
