<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img :src="coinImage" alt="Coin Avatar">
            </p>
        </figure>
        <div class="media-content">
            <span class="coin_name">
                <a :href="coinProfile" target="_blank"><strong>{{ data.CoinInfo.FullName }}</strong></a>
                ({{ data.CoinInfo.Name }}) 
            </span> 
            <span class="coin_price"> {{ data.DISPLAY.USD.PRICE }} </span>
        </div>
        <div class="media-right">
            <strong>{{ number }}</strong> 
        </div>
    </article>
</template>

<script>
    import config from '@/config.js'

    export default {
        props: {
            data: {
                required: true,
                type: Object
            },
            number: {
                required: true,
                type: Number
            }
        },
        computed: {
            coinImage(){
                return config.getBaseUrl(this.data.CoinInfo.ImageUrl)
            },
            coinProfile(){
                return config.getBaseUrl(this.data.CoinInfo.Url)
            }
        }
    }
</script>

<style lang="scss" scoped>
.media{
    align-items: center;

    &-content{
        span{
            display: block;
        }
    }

    &-right{
        font-size: 36px;
    }
}
</style>