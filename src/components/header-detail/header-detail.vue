<template>
  <transition name="fade">
  <div v-show="visible" class="header-detail">
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
        <h1 class="name">{{ seller.name }}</h1>
        <div class="star-wrapper">
          <Star :size="48" :score="seller.score"></Star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
            <support-ico  :type="seller.supports[index].type"></support-ico>
            <span class="text">{{ seller.supports[index].description }}</span>
          </li>
        </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{ seller.bulletin }}</p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="visible = false">
      <span class="icon-close"></span>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import SupportIco from 'components/support-ico/support-ico'
import Star from 'components/star/star'
export default {
  name: 'header-detail',
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    show() {
      this.visible = true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  components: {
    SupportIco,
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/mixin";
@import "~common/stylus/variable";

  .header-detail
    position:fixed
    z-index:100
    top:0
    left:0
    width:100%
    height:100%
    overflow:auto
    -webkit-backdrop-filter:blur(10px)
    background: $color-background-s
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: $color-background
    .detail-wrapper
      display: inline-block
      width:100%
      min-height:100%
      .detail-main
        margin-top:64px
        padding-bottom:64px
        .name
          line-height:16px
          text-align:center
          font-size:16px
          font-weight:700
        .star-wrapper
          margin-top:18px
          margin-bottom:28px
          text-align:center
        .title
          display:flex
          width:80%
          margin:28px auto 24px auto
          .line
            flex:1
            position:relative
            top:-6px
            border-bottom:1px solid rgba(255,255,255,0.2)
          .text
            padding:0 12px
            font-weight:700
            font-size:14px
        .supports
          width:80%
          margin:0 auto
          .support-item
            padding:0 12px
            margin-bottom:12px
            font-size:0
            &:last-child
              margin-bottom:0
            .text
              font-size:12px
              line-height:16px

        .bulletin
          width:80%
          margin:0 auto
          .content
            padding:0 12px
            line-height:24px
            font-size:12px
    .detail-close
      position:relative
      width:32px
      height:32px
      margin:-64px auto 0 auto
      clear:both
      font-size:32px
</style>
