<template>
    <div class="coin-list">
        <Coin 
            v-for="(coin, i) in coins_list" 
            :key="i"
            :data="coin"
            :number="(i + 1) + N">
        </Coin>
    </div>
</template>

<script>
    import Coin from '@/components/Coin'

    export default {
        components: {
            Coin
        },
        props: {
            coins: {
                required: false,
                type: Array
            },
            page: {
                required: true,
                type: Number
            }
        },
        computed: {
            coins_list(){
                return this.coins
            },
            N(){
                return 10 * (this.page - 1)
            }
        },
        beforeMount(){

        }
    }
</script>

<style lang="scss" scoped>
.coin-list{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    margin-bottom: 15px;
}

</style>