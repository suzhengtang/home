<template>
	<div id="psd">
		<!--标题部分-->
		<regist-title></regist-title>

		<!--内容部分-->
		<div class="psd-content">
			<h3>注册智能家居账号</h3>
			<p>你注册的手机号码为<span>13538343551</span></p>
			<p>请设置您的密码：</p>
			<input type="text" placeholder="请输入密码">
			<input type="text" placeholder="请输入确认密码">
			<p>密码长度8~16位，数字、字母、字符至少包含两种</p>
		</div>

		<!--提交按钮-->
		<div class="psd-btn">
			<router-link to="./login"><button>提交</button></router-link>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../static/less/index";

	.psd-content{
		width: 100%;
		.padding(0, 14);
		h3 {
			text-align: center;
			.fs(20);
			color: #696969;
			.margin(30, 0);
			font-weight: 500;
		}
		p{
			color: #aaa;

			span{
				color: #fe7416;
			}
		}
		p:nth-of-type(2){
			.margin(10,0)
		}
		p:nth-of-type(3){
			color: #666;
		}
		input{
			border: 1px solid #ccc;
			border-radius: 10px;
			.h(44);
			.w(347);
			.pl(10);
			box-sizing: border-box;
			.margin(8,0)
		}
	}

	.psd-btn{
		width: 100%;
		.padding(0,14);
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
	import title from './title';
	export default {
		data() {
			return {}
		},
		computed: {},
		props: {},
		methods: {

		},
		components: {
			'regist-title': title
		}
	}
</script>
