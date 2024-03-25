<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
  <view>
    <view class="uni-padding-wrap">
		<uni-icons class="left-btn" type="undo-filled" size="5vw" style="color: rgba(255,255,255,0.8)" @tap="backTo" ></uni-icons>
		<view class="mid-text">{{ detailTitle }}</view>
		<uni-icons class="right-btn" type="home-filled" size="5vw" style="color: rgba(255,255,255,0.8)" @tap="toHome"></uni-icons>
      <view class="page-section swiper">
        <view class="page-section-spacing">
          <swiper v-if="currentPageName === 'lbphpv'"
				:autoplay="false" 
				:indicator-dots="false"
				:current="currentIndex"
				:circular="false"
				:interval="3000"
				:duration="100"
				@change="swierChange">

            <swiper-item>
              <image @load="loadImg($event)" src="../static/lbphpv/1.png"
                     class="slide-image"></image>

            </swiper-item>
            <swiper-item>
              <image @load="loadImg($event)" src="../static/lbphpv/2.png"
                     class="slide-image"></image>
            </swiper-item>
            <swiper-item>
              <image @load="loadImg($event)" src="../static/lbphpv/3.png"
                     class="slide-image"></image>
            </swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/4.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/5.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/6.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/7.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/8.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/9.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/10.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/11.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/lbphpv/12.png"
			         class="slide-image"></image>
			</swiper-item>
          </swiper>
		  <swiper v-else-if="currentPageName === 'ihc'"
					:autoplay="false" 
					:indicator-dots="false"
					:current="currentIndex"
					:circular="false"
					:interval="3000"
					:duration="100"
					@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/ihc/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		  
		      <image @load="loadImg($event)" src="../static/ihc/2.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/ihc/3.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/ihc/4.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/ihc/5.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/ihc/6.png"
					 class="slide-image"></image>
			</swiper-item>
		  </swiper>
		  <swiper v-else-if="currentPageName === 'fish'"
			:autoplay="false" 
			:indicator-dots="false"
			:current="currentIndex"
			:circular="false"
			:interval="3000"
			:duration="100"
			@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/fish/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		  
		      <image @load="loadImg($event)" src="../static/fish/2.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/fish/3.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/fish/4.png"
					 class="slide-image"></image>
			</swiper-item>
		  </swiper>
		  <swiper v-else-if="currentPageName === 'bansui'"
			:autoplay="false" 
			:indicator-dots="false"
			:current="currentIndex"
			:circular="false"
			:interval="3000"
			:duration="100"
			@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/bansui/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/bansui/2.png"
		             class="slide-image"></image>
		    </swiper-item>
		  </swiper>
		  <swiper v-else-if="currentPageName === 'bingli'"
			:autoplay="false" 
			:indicator-dots="false"
			:current="currentIndex"
			:circular="false"
			:interval="3000"
			:duration="100"
			@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/bingli/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/bingli/2.png"
		             class="slide-image"></image>
		    </swiper-item>
		  </swiper>
		  <swiper v-else-if="currentPageName === 'shuzhi'"
			:autoplay="false" 
			:indicator-dots="false"
			:current="currentIndex"
			:circular="false"
			:interval="3000"
			:duration="100"
			@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/shuzhi/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/shuzhi/2.png"
		             class="slide-image"></image>
		    </swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/shuzhi/3.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/shuzhi/4.png"
			         class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/shuzhi/5.png"
			         class="slide-image"></image>
			</swiper-item>
		  </swiper>
		  <swiper v-else-if="currentPageName === 'changgui'"
			:autoplay="false" 
			:indicator-dots="false"
			:current="currentIndex"
			:circular="false"
			:interval="3000"
			:duration="100"
			@change="swierChange">
		  
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/changgui/1.png"
		             class="slide-image"></image>
		  
		    </swiper-item>
		    <swiper-item>
		      <image @load="loadImg($event)" src="../static/changgui/2.png"
		             class="slide-image"></image>
		    </swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/3.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/4.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/5.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/6.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/7.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/8.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/9.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/10.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/11.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/12.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/13.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/14.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/15.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/16.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/17.png"
					 class="slide-image"></image>
			</swiper-item>
			<swiper-item>
			  <image @load="loadImg($event)" src="../static/changgui/18.png"
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
      currentIndex: 0,
	  detailTitle: "",
	  currentPageName: ""
    }
  },
  
  onLoad(e){
	this.currentPageName = e.pageName
	if(this.currentPageName === "lbphpv"){
		this.detailTitle = "LBP-宫颈癌联检智能筛查解决方案"
	}else if(this.currentPageName === "ihc"){
		this.detailTitle = "LBP-免疫组化检测平台"
	}else if(this.currentPageName === "fish"){
		this.detailTitle = "LBP-荧光原位杂交(FISH)检测平台"
	}else if(this.currentPageName === "bansui"){
		this.detailTitle = "LBP-伴随诊断解决方案"
	}else if(this.currentPageName === "bingli"){
		this.detailTitle = "病理能力提升解决方案"
	}else if(this.currentPageName === "shuzhi"){
		this.detailTitle = "LBP-数智化解决方案"
	}else if(this.currentPageName === "changgui"){
		this.detailTitle = "LBP-常规病理解决方案"
	}
  },
  onShow(){
	  uni.showLoading({
		  title: "加载中...",
		  mask: true
	  })
  },
  

  methods: {
	loadImg (e) {
		uni.hideLoading()
	},
    swierChange (e) {
		if(this.currentPageName === "lbphpv"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-宫颈癌联检智能筛查解决方案"
			}else if(e.detail.current === 1){
				this.detailTitle = "PCR-HPV检测平台"
			}else{
				this.detailTitle = ""
			}
		}else if(this.currentPageName === "ihc"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-免疫组化检测平台"
			}else{
				this.detailTitle = ""
			}
		}else if(this.currentPageName === "fish"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-荧光原位杂交(FISH)检测平台"
			}else{
				this.detailTitle = ""
			}
		}else if(this.currentPageName === "bansui"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-伴随诊断解决方案"
			}else{
				this.detailTitle = ""
			}
		}else if(this.currentPageName === "shuzhi"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-数智化解决方案"
			}else if(e.detail.current === 1){
				this.detailTitle = "LBP-数智病理平台"
			}else{
				this.detailTitle = ""
			}
		}else if(this.currentPageName === "changgui"){
			if(e.detail.current === 0){
				this.detailTitle = "LBP-常规病理解决方案"
			}else{
				this.detailTitle = ""
			}
		}
		this.currentIndex = e.detail.current
    },
	backTo(){
		// uni.navigateBack({
		// 	delta:1
		// })
		this.currentIndex = 0
	},
	toHome(){
		// uni.redirectTo({
		// 	url: "./index/index"
		// })
		uni.navigateBack({
			delta:1
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
	.mid-text {
		color: white;
		position: absolute; 
		font-size: 3vw;
		font-weight: bold;
		left: 50%; 
		top: 2vw;
		transform: translate(-50%); 
		// -webkit-transform: translate(-50%, -50%);
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
  height: 100%;
  width: 100%;
  border-radius: 15rpx;
  // z-index: 5;
  // opacity: 0.7;
  // top: 15%;
  // margin: 0 120rpx;
  // background: red;
}

swiper {
  height: 100vh;
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