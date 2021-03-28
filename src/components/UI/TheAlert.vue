<template>
    <teleport to="#app">
        <p>{{ message }}</p>
    </teleport>
</template>

<script>
export default {
    props: {
        message: String,
    },
}
</script>

<style lang="scss" scoped>
p {
    position: fixed;
    margin: 0 auto;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    max-width: 30rem;
    padding: 1rem 2rem;
    background: var(--color-primary);
    border-radius: 0.5rem;
}
</style>
