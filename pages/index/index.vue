<template>
	<view class="tttt">
		<view class="ellipse">
			<view class="circle">
				<view class="circle-inside inside-one" @tap="goSecondDetail('fish')">FISH</view>
			</view>
			<view class="circle2">
				<view class="circle-inside">
					<view class="content">
						<view style="transform: rotate(45deg);" @tap="goSecondDetail('shuzhi')">数智化</view>
					</view>
				</view>
			</view>
			<!-- <view class="circle1">
				<view class="circle-inside inside-two">数智化</view>
			</view> -->
		</view>
		<view class="ellipse">
			<view class="circle">
				<view class="circle-inside inside-three" @tap="goSecondDetail('ihc')">IHC</view>
			</view>
			<view class="circle2">
				<view class="circle-inside">
					<view class="content" @tap="goSecondDetail('bingli')">
						<view class="">病理合作</view>
						<view class="">建设</view>
					</view>
				</view>
			</view>
		</view>
		<view class="ellipse">
			<view class="circle">
				<view class="circle-inside">
					<view style="transform: rotate(-135deg);" @tap="goSecondDetail('bansui')">伴随诊断</view>
				</view>
			</view>
			<view class="circle2">
				<view class="circle-inside">
					<view class="content">
						<view style="transform: rotate(-45deg);" @tap="goSecondDetail('lbphpv')">LBP/HPV</view>
					</view>
				</view>
			</view>
		</view>
		<view class="ellipse">
			<view class="circle">
				<view class="circle-inside">
					<view class="content">
						<view style="transform: rotate(-180deg);" @tap="goSecondDetail('changgui')">常规病理</view>
					</view>
				</view>
			</view>
		</view>
		<view class="center-ellipse">
			<view class="center-circle">
				<image class="circle-img" src="../../static/index.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goSecondDetail(pageName){
				console.log('jjjjjjjjjjjj_',pageName)
				uni.navigateTo({
					url: "../secondDetail?pageName=" + pageName
					
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.center-ellipse{
		width: 13vw;
		height: 13vw;
		border-radius: 50%;
		background-color: rgba(255,255,255,0.5);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
		.center-circle{
			width: 11vw;
			height: 11vw;
			border-radius: 50%;
			background-color: rgba(255,255,255,0.8);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			position: absolute;
			.circle-img{
				width: 8vw;
				height: 8vw;
				position: absolute;
				top: 0;
				left: 20rpx;
				right: 0;
				bottom: 0;
				margin: auto;
			}
		}
	}
	.tttt{
		width: 100vw;
		height: 100vh;
		background-image: url('../../static/first-bg-low.png');
		background-size: 100% 100%;
		// background-color: red;
		// border: 8px solid #7B85B8;
	}
	// 设置大小
	$ellipse:48vw;
	// $ellipse:920rpx;
	
	
	//
	$circle:$ellipse/10;
	@mixin style($mod) {
	    width: $mod;
	    height: $mod;
	    border-radius: 50%;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    margin: auto;
	    position: absolute;
	}
	
	.ellipse {
	    @include style($ellipse);
	    border: 6px rgba(255,255,255,0.2) solid;
	    // border: 6px #7B85B8 solid;
	    transform-style: preserve-3d;
	    .circle {
	        @include style($circle);
	        // background: deepskyblue;
			background-color: rgba(255,255,255,0.5);
			width: 6vw;
			height: 6vw;
	        animation: move linear infinite;
			.circle-inside {
				content: '';
				width: 5vw;
				height: 5vw;
				border-radius: 50%;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				text-align: center;
				line-height: 5vw;
				font-size: 1vw;
				background-color: rgba(255,255,255,.8);
				display: table;
				.content{
					vertical-align: middle;
					display: table-cell;
				}
			}
			.inside-one {
				font-size: 1vw;
				transform: rotate(-45deg);
			}
			.inside-two {
				transform: rotate(-240deg);
			}
			.inside-three {
				font-size: 1vw;
				transform: rotate(-90deg);
			}
	    }
		.circle2 {
			@include style($circle);
			// background: deepskyblue;
			background-color: rgba(255,255,255,0.5);
			width: 6vw;
			height: 6vw;
			animation: move reverse linear infinite;
			.circle-inside {
				content: '';
				width: 5vw;
				height: 5vw;
				border-radius: 50%;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				text-align: center;
				// line-height: 180rpx;
				transform: rotate(-90deg);
				font-size: 1vw;
				background-color: rgba(255,255,255,.8);
				display: table;
				.content{
					vertical-align: middle;
					display: table-cell;
					
				}
			}
		}
		.circle1 {
			@include style($circle);
			// background: deepskyblue;
			background-color: rgba(255,255,255,0.5);
			width: 6vw;
			height: 6vw;
			animation: move linear infinite;
			.circle-inside {
				content: '';
				width: 5vw;
				height: 5vw;
				border-radius: 50%;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				text-align: center;
				// line-height: 180rpx;
				transform: rotate(-90deg);
				font-size: 1vw;
				background-color: rgba(255,255,255,.8);
				display: table;
				.content{
					vertical-align: middle;
					display: table-cell;
					
				}
			}
		}
	    @for $i from 1 through 4 {
	        &:nth-child(#{$i}) {
	            transform: rotateZ($i*45deg) rotateY(80deg);
	            .circle {
	                animation-duration: $i+20 + s;
					&:hover{
						animation-play-state:paused;
						cursor: pointer;
					}
	            }
				.circle2 {
					animation-duration: $i+30 + s;
					&:hover{
						animation-play-state:paused;
						cursor: pointer;
					}
				}
				.circle3 {
					animation-duration: $i+30 + s;
					&:hover{
						animation-play-state:paused;
						cursor: pointer;
					}
				}
	        }
	    }
	}
	// .loop(@index) when (@index < 40) {
	// 	.loop((@index + 1));
	// 	@keyframeSel: @index * 100%/40;
	// 	@{keyframeSel}{ transform: translate(160rpx*cos(360deg/40*@index),80rpx*sin(360deg/40*@index),);}
	// }
	
	@keyframes move {
		// .loop(0)
	    0% {
	        transform: rotateZ(0) translateX(24vw) rotateZ(0) rotateY(-70deg);
	    }
	    100% {
	        transform: rotateZ(360deg) translateX(24vw) rotateZ(-360deg) rotateY(-70deg);
	    }
	}
</style>