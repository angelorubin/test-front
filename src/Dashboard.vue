<template>
    <div>
        <div class="hero is-fullheight is-black">
            <div class="hero-body">
                <div class="tile is-vertical">

                    <div class="tile is-centered">
                        <img class="circle img-fluid" :src="user.avatar_url">
                    </div>

                    <div class="tile is-centered">
                        <h1 class="title is-3 is-fluid">{{ user.name }}</h1>
                    </div>

                    <div class="tile is-centered">
                        <h1 class="title is-5">{{ user.html_url }}</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Dashboard',
        data () {
            return {
                user : null
            }
        },
        mounted () {
            let userData = axios
            .get('https://api.github.com/users/angelorubin')
            .then(res => this.user = res.data)
            .catch(err => this.user = err)
        }
    }
</script>

<style lang="scss">
    @import "~bulma";
    .img-fluid {
        max-width: 50%;
        height: auto;
    }
    .title, .subtitle {
        margin: 1rem;
    }
    .hero-body {
        margin-top: -15%;
    }
    .is-centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle {
        border-radius: 50%;
    }
</style>