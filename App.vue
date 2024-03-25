<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  uni-swiper .uni-swiper-dot {
		width: 100rpx;
		height: 100rpx;
    /* background: ; */
    margin:0 100rpx;
    position: relative;
   
	}
  /* .uni-swiper-dot::before{
    content:"";
    position: absolute;
    width: 70rpx;
    height: 1rpx;
    background: rgba(255,255,255,0.8);
    top: 50%;
    left: -90rpx;

  } */
  /* .uni-swiper-dot:first-child:before{
    display: none;
  }
  uni-swiper .uni-swiper-dots-horizontal{
    bottom: 0;
  }
  uni-swiper .uni-swiper-dot:nth-child(1){
    background: url(./static/btn/1.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot:nth-child(2){
    background: url(./static/btn/2.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot:nth-child(3){
    background: url(./static/btn/3.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot:nth-child(4){
    background: url(./static/btn/4.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot:nth-child(5){
    background: url(./static/btn/5.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot:nth-child(6){
    background: url(./static/btn/6.png) ;
    background-size:100% ;
	border-radius: 50%;
	background-color: rgba(255,255,255,0.8);
  }
  uni-swiper .uni-swiper-dot-active{
	  
  } */
</style>
