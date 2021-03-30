<template>
    <div class="user" :key="componentKey">
        <div class="user__avatar-container">
            <img :src="userImgUrl" alt="avatar" class="user__avatar" />
        </div>
        <p class="user__name">{{ username }}</p>
        <div
            v-if="username == $store.getters.userName"
            class="user__img-upload"
        >
            <input
                type="file"
                id="myFile"
                name="filename"
                accept="image/*"
                ref="uploader"
            />
            <button @click="uploadAvatar">Upload</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userImgUrl: String,
        username: String,
    },
    components: {},
    data() {
        return {
            componentKey: 0,
        }
    },
    methods: {
        forceUpdate() {
            this.componentKey++
        },
        async uploadAvatar() {
            let form = new FormData()
            let formData = this.$refs.uploader
            form.append('image', formData.files[0])
            try {
                let key = 'f0656cc30b4fd2e4424d16257a02b98e'
                let url = `https://api.imgbb.com/1/upload?key=${key}`
                const res = await fetch(url, {
                    method: 'POST',
                    body: form,
                })
                const data = await res.json()
                let avatarUrl = data.data.url
                this.$store.state.userAvatar = avatarUrl
                await this.$store.dispatch('updateUserInfo')
                this.forceUpdate()
                location.reload()
            } catch (e) {
                console.log(e)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.user {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1050px) {
        margin-top: 4rem;
    }
    @media (min-width: 700px) {
        html {
            font-size: 50%;
        }
    }
    &__avatar-container {
        width: 12.5rem;
        height: 12.5rem;
        border-radius: 50%;
    }
    &__avatar {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__name {
        margin: 1rem;
        color: var(--color-text-100);
        font-size: 1.8rem;
        font-weight: 300;
    }
}
</style>
