<template>
    <div>
        <div class="hero is-fullheight is-black has-text-centered">
            <div class="nav">
                <div class="nav-left is-flex-mobile">
                    <div class="nav-item">
                        <span class="icon is-small">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        <span class="icon is-small">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        <span class="icon is-small">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        <span class="icon is-small">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </span>
                        <span class="icon is-small">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="nav-item">
                        <span class="icon">
                            <i class="fa fa-wifi" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                <div class="nav-center">
                    <div class="nav-item">
                        {{ hour }} {{ period >= 12 ? 'AM' : 'PM' }}
                    </div>
                </div>
                <div class="nav-right">
                    <div class="nav-item">95%</div>
                    <div class="nav-item">
                        <span class="icon is-small">
                            <i class="fa fa-battery-three-quarters" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="hero-head">
                <div class="column">
                    <h1 class="title hour">{{ hour }}</h1>
                    <h1 class="subtitle date">{{ date }}</h1>
                </div>
            </div>
            <div class="hero-body"></div>
            <div class="hero-foot">
                <div class="column">
                    <router-link to="dashboard" class="button is-medium">
                        clique para desbloquear
                    </router-link>
                </div>
                <div class="column">
                    <div class="nav">
                        <div class="nav-right">
                            <div class="nav-item">
                                <span class="icon">
                                    <i class="fa fa-camera" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'Lockscreen',
        data() {
            return {
                'hour' : null,
                'period' : null,
                'date' : null
            }
        },
        mounted () {
            setInterval(this.getHour)
            this.date = this.getDate()
            console.log(this.getDate())
        },
        methods: {
            getDate(){
                this.date = moment().locale('pt-br').format('dddd, LL')
            },
            getHour() {
                this.hour = moment().format('H:mm')
            }
        }
    }
</script>

<style lang="scss">
    $blue : #CCC;
    $black : #FFF;
    @import "~bulma";
    .hero .nav {
       box-shadow: none!important;
    }
    .hero-head {
        margin-top: 5rem;
    }
    .hero-foot {
        margin-bottom: 1em;
    }
    .hour {
        font-size: 7rem!important;
    }
    .date {
        font-size: 1.1rem!important;
    }
    .is-black {
        background: #000000!important;
    }
    .hour {
        margin: 10em;
    }

    
    
    .button {
        background-color: white!important;
        color: $black;
        border: none!important;
        -webkit-border-radius: 10px!important;
        border-radius: 10px!important;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .button:hover {   
        background-color: #036564!important;
        color: white!important;
    }
    .is-centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
