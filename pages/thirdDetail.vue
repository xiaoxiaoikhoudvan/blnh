<template>
	<view class="bg-wrapper">
		<uni-icons class="left-btn" type="undo-filled" size="60" style="color: rgba(255,255,255,0.8)" @tap="backTo" ></uni-icons>
		<view class="mid-text">{{ thirdDetailTitle }}</view>
		<uni-icons class="right-btn" type="home-filled" size="60" style="color: rgba(255,255,255,0.8)" @tap="toHome"></uni-icons>
		<view class="content-wrapper">
			<image style="width: 80%; height: 100%;" src="../static/banner/lunbo03.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				thirdDetailTitle : 'LBP-宫颈癌联检智能筛查解决方案'
			}
		},
		onLoad(params) {
			console.log('params3=>',params)
			this.currentPageName = params.pageName
		},
		methods: {
			backTo(){
				console.log('uuuuuuuuuu')
				uni.navigateBack({
					delta:1
				})
			},
			toHome(){
				uni.redirectTo({
					url: "/pages/user/test"
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.bg-wrapper{
		width: 100vw;
		height: 100vh;
		background-image: url('../static/first-bg-low.png');
		background-size: 100% 100%;
		position: relative;
	}
	.left-btn {
		// border: 1px solid rgba(255,255,255,0.8);
		// border-radius: 20%;
		position: absolute;
		left: 25px;
		top: 25px;
		&:hover{
			cursor: pointer;
		}
	}
	.mid-text {
		color: white;
		position: absolute; 
		font-size: 40rpx;
		font-weight: bold;
		left: 50%; 
		top: 55rpx;
		transform: translate(-50%); 
		// -webkit-transform: translate(-50%, -50%);
	}
	.right-btn {
		// border: 1px solid rgba(255,255,255,0.8);
		// border-radius: 20%;
		position: absolute;
		right: 25px;
		top: 25px;
		&:hover{
			cursor: pointer;
		}
	}
	.content-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.content-text {
			font-size: 160rpx;
			font-weight: bold;
		}
	}
</style>