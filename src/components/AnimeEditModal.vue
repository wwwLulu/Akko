<template>
    <div class="modal">
        <div @click="$emit('closeModal')" class="modal__backdrop"></div>
        <div class="modal__info">
            <div class="modal__cover-container">
                <img :src="coverUrl" alt="" class="modal__cover" />
            </div>
            <div class="modal__edit">
                <div>
                    <label for="score">Score: </label>
                    <input type="number" max="10" min="0" :value="score" />
                </div>
                <div>
                    <label for="progress">Progress: </label>
                    <input
                        type="number"
                        :max="episodes"
                        min="1"
                        :value="currentEpisode"
                    />
                    <span> / {{ episodes }}</span>
                </div>
            </div>
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
    },
    emits: ['closeModal'],
    computed: {
        currentEpisode() {
            return this.progress.slice(0, this.progress.split('').indexOf('/'))
        },
        episodes() {
            return this.progress.slice(
                this.progress.split('').indexOf('/') + 1,
                this.progress.length
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.modal {
    z-index: 20000;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;

    &__cover-container {
        flex-shrink: 0;
        width: 10rem;
        height: 14rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 0.5rem;
    }
    &__backdrop {
        z-index: 20500;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    &__edit {
        font-weight: 300;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        * {
            margin-bottom: 1rem;
        }
    }
    &__info {
        padding: 1rem;
        z-index: 30000;
        display: flex;
        justify-content: center;
        background: #f3f3f3;
        border-radius: 1rem;
        font-size: 1.4rem;
        max-width: 50rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        input {
            width: 6rem;
            border: none;
            text-align: right;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 300;
            font-family: 'Lato', sans-serif;
        }
    }
}
</style>
