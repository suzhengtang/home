<template>
	<div id="login">
		<!--导航部分-->
		<div class="regist-title">
			<span><</span>
			<p>大陆地区</p>
		</div>
		
		<!--内容部分-->
		<div class="login-content">
			<img src="../assets/logo.png" alt="">
			<div class="user active">
				<span class="user-left"></span>
				<input type="text" placeholder="邮箱/手机号码/智能家居账号">
				<span class="user-right"></span>
			</div>
			<div class="user">
				<span class="user-left"></span>
				<input type="text" placeholder="密码">
				<span class="user-right"></span>
			</div>
		</div>

		<!--登录按钮部分-->
		<div class="login-btn">
			<button>登录</button>
			<p>
				<a href="javascript:;"><router-link to="./removepassword">忘记密码</router-link></a>
				<a href="javascript:;" class="user-regist">注册用户</a>
			</p>
		</div>
		
		<!--其他方式登录-->
		<div class="login-other">
			<div class="login-weixin">
				<p>其他方式登录</p>
			</div>
			<img src="../assets/logo.png" alt="">
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../static/less/index";

	.regist-title {
		width: 100%;
		.h(44);
		background-color: #ffffff;
		text-align: center;
		.lh(44);
		position: relative;
		span {
			position: absolute;
			.left(12);
			.top(7);
			display: block;
			.w(30);
			.h(30);
			.lh(26);
			.fs(18);
			color: #666666;
			border: 1px solid #ccc;
			border-radius: 50%;
		}
		p {
			color: #686868;
			.fs(16);
			float: right;
			.mr(12);
		}
	}

	.login-content{
		width: 100%;
		text-align: center;
		.padding(0,14);
		img{
			.w(80);
			.mt(40);
			.mb(10);
		}
		.user{
			.w(347);
			border-bottom: 1px solid #ccc;
			.mt(10);
			input{
				.w(220);
				.h(44);
			}
		}
		.active{
			border-bottom: 1px solid #05b378;
		}
		span{
			.w(30);
			.h(30);
			.mt(7);
		}
		.user-left{
			float: left;
			background: url("../assets/logo.png") 0 0 no-repeat;
			.ml(10);
			background-size: cover;
		}
		.user-right{
			float: right;
			background: url("../assets/logo.png") 0 0 no-repeat;
			.mr(10);
			background-size: cover;
		}
	}

	.login-btn{
		width: 100%;
		.padding(0,14);
		.mt(40);
		button{
			.w(347);
			.h(44);
			border-radius: 44px;
			.fs(16);
			outline:none;
			border: none;
			color: #fff;
			background-color: #05b378;
			.mb(14);
		}
		p{
			.w(310);
			margin:0 auto;
			.user-regist{
				float: right;
			}
		}
	}
	
	.login-other{
		width: 100%;
		.mt(120px);
		text-align: center;
		.login-weixin{
			.w(280);
			.h(1);
			background-color: #ccc;
			margin: 0 auto;
			p{
				position: relative;
				.top(-10);
				.w(110);
				margin: 0 auto;
				background-color: #fff;
			}
		}
		img{
			.w(50);
			.h(50);
			.mt(30);
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {}
		},
		computed: {},
		props: {},
		methods: {},
		components: {}
	}
</script>
