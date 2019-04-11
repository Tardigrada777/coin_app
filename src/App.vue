<template>
  <div id="app" class="container is-mobile is-centered">
    <div class="list-container">
       <h2 class="subtitle"> TOP50 </h2>
       <Pagination :currentPage="page" @change="change_page"/>
       <CoinList :coins="ordered_coins" :page="page" />
       <Pagination :currentPage="page" @change="change_page"/>
    </div>
  </div>
</template>

<script>
  import CoinList from '@/components/CoinList';
  import Pagination from '@/components/Pagination';

  import axios from 'axios';
  import config from '@/config.js'

  export default {
    name: 'app',
    components: {
      CoinList,
      Pagination
    },
    data(){
      return {
          coins: [],
          page: null
      }
    },
    computed: {
      ordered_coins(){

        let oc = this.coins

        oc.sort((coinA, coinB) => {
          let priceA = parseFloat(coinA.DISPLAY.USD.PRICE.split(' ')[1])
          let priceB = parseFloat(coinB.DISPLAY.USD.PRICE.split(' ')[1])
          return priceB - priceA 
        })

        return oc.slice((this.page - 1) * 10, this.page * 10)
      }
    },
    methods: {
      get_page(page){
        this.page = page
        let url = config.getUrl(config.limit)
        axios.get(url).then(response => {
          this.coins = response.data.Data
        }).catch(error => {
          console.log(error)
        }) 
      },
      change_page(page){
        this.page = page
      }
    },
    created(){
      this.get_page(1)
    }
  }

</script>

<style lang="scss">
#app {
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px 10px;

  .subtitle{
    text-align: center;
  }

  .list-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
}
</style>
