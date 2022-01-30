<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabel"
      :showSlider="showSlider"
      :useTransition=false
      :data="tabs"
      ref="tabBar"
    >
    </cube-tab-bar>
    <div class="slider-wapper">
      <cube-slide
        :loop=false
        :autoPlay=false
        :show-dots=false
        :initial-index="index"
        @change="onChange"
        @scroll="onScroll"
        :options="slideOptions"
        ref="slide">
        <cube-slide-item> 我是Good </cube-slide-item>
        <cube-slide-item> 我是Rating </cube-slide-item>
        <cube-slide-item> 我是Seller </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'tab',
  data() {
    return {
      index: 0,
      showSlider: true,
      tabs: [
        {
          label: '商品'
        },
                {
          label: '评价'
        },
                {
          label: '商家'
        }
      ],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newValue) {
         this.index = this.tabs.findIndex((item, index) => {
          return item.label === newValue
         })
      }
    }
  },
  methods: {
    onChange(index) {
        console.log(index)
        this.index = index
    },
    onScroll(pos) {
        console.log(pos)
        const tabBarWidth = this.tabBarWidth || this.$refs.tabBar.$el.clientWidth
        const slideWidth = this.scrollerWidth || this.$refs.slide.slide.scrollerWidth
        const transfrom = (-pos.x / slideWidth) * tabBarWidth
        this.$refs.tabBar.setSliderTransform(transfrom)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/variable'

.tab
  display: flex
  flex-direction:column
  height: 100%
  >>>.cube-tab
       padding: 10px 0
     .slider-wapper
       flex:1
       overflow: hidden
</style>
