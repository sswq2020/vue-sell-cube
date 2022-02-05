<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
        <tab :tabs="tabs" :initialIndex=1></tab>
    </div>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'
import Tab from './components/tab/tab'
import Goods from './pages/goods'
import Rating from './pages/rating'
import Seller from './pages/seller'

import { getSeller } from 'api/index'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
                {
          label: '评价',
          component: Rating,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
   .tab-wrapper
    position:fixed
    top:136px
    left:0
    right: 0
    bottom: 0
</style>
