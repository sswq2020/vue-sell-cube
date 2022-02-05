<template>
  <div class="goods">
     <div class="scroll-nav-wrapper">
      <cube-scroll-nav
      :side=true
      :data="goods"
      :options="scrollOptions"
      v-if="goods.length"
      >
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name"
        >
          <ul>
            <li
            v-for="food in good.foods"
            :key="food.name"
            class="food-item"
            >
              <div class="icon">
                <img width="57" height="57"  :src="food.icon">
              </div>
              <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              </div>

            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
     </div>
  </div>
</template>

<script>
import { getGoods } from '../api/index'

export default {
  name: 'Goods',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
        goods: [],
        scrollOptions: {
          click: false, // 这里涉及多个BS的点击，需要权衡click =false与阻止冒泡
          directionLockThreshold: 0
        }
    }
  },

  mounted() {

  },

  methods: {
    fetch() {
      getGoods().then((goods) => {
        this.goods = goods
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/mixin";
@import "~common/stylus/variable";
.goods
  position: relative
  text-align: left
  height: 100%
  .scroll-nav-wrapper
    position:absolute
    width: 100%
    top:0
    left:0
    bottom: 48px

</style>
