<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
  <view>
    <view class="uni-padding-wrap">
		<uni-icons class="left-btn" type="undo-filled" size="60" style="color: rgba(255,255,255,0.8)" @tap="backTo" ></uni-icons>
		<uni-icons class="right-btn" type="home-filled" size="60" style="color: rgba(255,255,255,0.8)" @tap="toHome"></uni-icons>
      <view class="page-section swiper">
        <view class="page-section-spacing">
          <swiper 
				:autoplay="false" 
				:indicator-dots="true"
				:current="currentIndex"
				:circular="true"
				previous-margin="140rpx"
				next-margin="240rpx"
				:interval="3000"
				:duration="100"
				@change="swierChange">

            <swiper-item>
              <image src="../static/banner/lunbo01.png"
                     class="slide-image"></image>

            </swiper-item>
            <swiper-item>

              <image src="../static/banner/lunbo02.png"
                     class="slide-image"></image>

            </swiper-item>
            <swiper-item>
              <image src="../static/banner/lunbo03.png"
                     class="slide-image"></image>
            </swiper-item>
			<swiper-item>
			  <image src="../static/banner/lunbo01.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image src="../static/banner/lunbo02.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image src="../static/banner/lunbo03.png"
			         class="slide-image"></image>
			</swiper-item>
          </swiper>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },

  methods: {
    swierChange (e) {
      this.currentIndex = e.detail.current
    },
	backTo(){
		console.log('uuuuuuuuuu')
		uni.navigateBack({
			delta:1
		})
	},
	toHome(){
		uni.redirectTo({
			url: "./index/index"
		})
	},
  }

}

</script>

<style lang="scss">
	.uni-padding-wrap{
		width: 100vw;
		height: 100vh;
		background-image: url('../static/first-bg-low.png');
		background-size: 100% 100%;
		position: relative;
	}
	.left-btn {
		// border: 1px solid rgba(255,255,255,0.8);
		border-radius: 20%;
		position: absolute;
		left: 50rpx;
		top: 50rpx;
		z-index: 999;
		&:hover{
			cursor: pointer;
		}
	}
	.right-btn {
		// border: 1px solid rgba(255,255,255,0.8);
		border-radius: 20%;
		position: absolute;
		right: 50rpx;
		top: 50rpx;
		z-index: 999;
		&:hover{
			cursor: pointer;
		}
	}
.slide-image {
  position: absolute;
  height: 1400rpx;
  width: 100%;
  border-radius: 15rpx;
  z-index: 5;
  // opacity: 0.7;
  top: 15%;
  margin: 0 120rpx;
  // background: red;
}

swiper {
  height: 1850rpx;
}

// .active {
//   opacity: 1;
//   z-index: 10;
//   height: 316rpx;
//   width: 572rpx;
//   top: 7%;
//   transition: all 0.2s ease-in 0s;
// }

</style>