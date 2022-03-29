import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDeatil from './components/header-detail/header-detail'
import ShopCartList from './components/shop-cart-list/shop-cart-list'

createAPI(Vue, HeaderDeatil)
createAPI(Vue, ShopCartList)
