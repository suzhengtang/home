<template>
	<div id="num">
		<!--标题部分-->
		<regist-title></regist-title>

		<!--内容部分-->
		<div class="num-content">
			<h3>注册智能家居账号</h3>
			<p>我们已经发送一条验证短信至<span>+86 13538343551</span></p>
			<p class="ma">请输入短信中的验证码</p>
			<input type="text" placeholder="请输入验证码" @blur="yanMa" v-model="num">
			<input type="button" :value=" timer " @click="postShow">
		</div>

		<!--按钮部分-->
		<div class="num-btn">
			<button class="next-btn" @click="sbmites">下一步</button>
			<button class="first-btn" onclick="window.history.go(-1)">返回</button>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../static/less/index";

	.num-content {
		width: 100%;
		.padding(0, 14);
		h3 {
			text-align: center;
			.fs(20);
			color: #696969;
			.margin(30, 0);
			font-weight: 500;
		}
		p {
			color: #aaa;
			.margin(16, 0);
			span {
				color: #fe7416;
			}
		}
		input {
			border: 1px solid #ccc;
			border-radius: 10px;
			.h(44);
		}
		input[type='text'] {
			.w(216);
			.pl(10);
			box-sizing: border-box;
		}
		input[type='button'] {
			float: right;
			.w(120);
			color: #aaa;
		}
	}

	.num-btn {
		width: 100%;
		.padding(0, 14);
		button {
			.w(347);
			.h(44);
			border-radius: 44px;
			.fs(16);
			outline: none;
			border: none;
		}
		.next-btn {
			background-color: #33b4ff;
			color: #fff;
			.mt(100);
		}
		.first-btn {
			.mt(20);
			color: #33b4ff;
			border: 1px solid #33b4ff;
			background-color: #fff;
		}
	}
</style>
<script type="text/javascript">
	import title from './title.vue'

	export default {
		data() {
			return {
				timer: 120,
				num: ''
			}
		},
		created() {
			this.postShow();
		},
		computed: {},
		props: {},
		methods: {
			postShow() {
				if (this.timer == '重新发送') {
					this.timer = 121;
					this.full();
				} else {
					this.full();
				}
			},
			full() {
				this.timer--;
				if (this.timer == 0) {
					this.timer = '重新发送';
					return;
				} else {
					setTimeout(this.postShow, 1000);
				}
			},
			yanMa() {
				var re = /\d{6}/;
				if (this.num == '') {
					alert('验证码不能为空')
				}
				else if (re.test(this.num) == false) {
					alert('请输入六位数字的验证码')
				}
			},
			sbmites() {
				var re = /\d{6}/;
				if (re.test(this.num) == true) {
					this.$router.push({path: '/password'})
				}
			}

		},
		components: {
			'regist-title': title
		}
	}
</script>
