<template>
	<div class="removepsd">
		<!--标题导航部分-->
		<regist-title></regist-title>

		<!--内容部分-->
		<div class="rem-content">
			<h3>重置密码</h3>
			<div class="rem-input">
				<p>请输入注册的邮箱地址、手机号码或小米账号：</p>
				<input type="text" placeholder="邮箱/手机号码/智能家居账号">
				<input type="text" placeholder="图片验证码">
				<img src="../assets/logo.png" alt="">
				<p>用户输入手机号码时请正确选择区域前缀，如：台湾：+8869*******，香港：+8526*******</p>
				<a href="javascript:;">帮助</a>
			</div>

			<div class="rem-btn">
				<button>下一步</button>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	@import "../../static/less/index";

	.rem-content{
		width: 100%;
		.padding(0, 14);
		position: relative;
		h3 {
			text-align: center;
			.fs(20);
			color: #696969;
			.margin(30, 0);
			font-weight: 500;
		}
		.rem-input{
			p:first-of-type{
				.mb(20);
				color: #666;
			}
			input{
				border: 1px solid #ccc;
				border-radius: 10px;
				.h(44);
				.pl(10);
				box-sizing: border-box;
			}
			input:first-of-type{
				.w(347);
			}
			input:last-of-type{
				.w(200);
				.margin(14,0);
			}
			p:last-of-type{
				color: #aaa;
			}
			a{
				float: right;
				color: #33b4ff;
				text-decoration: underline;
				.margin(10,20);
			}
			img{
				.w(130);
				.h(42);
				background-color: skyblue;
				position: relative;
				.top(16);
				.left(8);
			}
		}
	}

	.rem-btn{
		width: 100%;
		.mt(80);
		button{
			.w(347);
			.h(44);
			border-radius: 44px;
			.fs(16);
			outline:none;
			border: none;
			color: #fff;
			background-color: #33b4ff;
		}
	}
</style>
<script type="text/javascript">
	import title from './title.vue';
	export default {
		data() {
			return {

			}
		},
		computed: {},
		props: {},
		methods: {},
		components: {
			'regist-title': title
		}
	}
</script>
