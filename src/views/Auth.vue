<template>
    <div class="container">
        <LoginSignup />
    </div>
</template>

<script>
import LoginSignup from '@/components/Auth/LoginSignup'

export default {
    components: {
        LoginSignup,
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1925px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
</style>
