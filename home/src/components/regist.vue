<template>
	<div id="regist">
		<!--标题导航部分-->
		<regist-title></regist-title>

		<!--内容部分-->
		<div class="regist-content">
			<h3>注册智能家居账号</h3>
			<div class="re-input">
				<span>国家/地区</span><br>
				<select name="" id="address" v-model="selectIndex">
					<option v-for="(msg,index) in msgs" :value="index" :selected="selectIndex===index">{{ msg.address }}</option>
				</select>
				<p>成功注册账号后，国家/地区将不能被改变</p>
				<span>手机号码</span><br>
				<input type="text" placeholder="请输入手机号码" @blur="modalshow()" v-model="phoneNumber">
				<select name="" id="number" v-model="selectIndex">
					<option v-for="(msg,index) in msgs" :value="index" :selected="selectIndex===index">{{ msg.value }}</option>
				</select>
			</div>
		</div>

		<!--提交按钮-->
		<div class="regist-btn">
			<button @click="submit">立即注册</button>
			<p>注册账号即表示您同意并愿意遵守智能家居
				<router-link to="javascript:;">用户协议</router-link>
				和
				<router-link to="javascript:;">隐私政策</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	import title from './title.vue';

	export default {
		data() {
			return {
				phoneNumber: '',
				selectIndex: 0,
				msgs: [
					{address: '中国', value: '+86'},
					{address: '香港', value: '+852'},
					{address: '澳门', value: '+853'},
					{address: '泰国', value: '+086'},
					{address: '美国', value: '+186'},
				],
				formData: {
					code: ''
				}
			}
		},
		components: {
			'regist-title': title
		},
		methods: {
			modalshow() {
				var telhpone = /^1(3|4|5|7|8)\d{9}$/;
				if (this.phoneNumber == '') {
					alert('请输入您的手机号码')
				}
				else if (telhpone.test(this.phoneNumber) == false) {
					alert('你输入的手机号码不正确,请重新输入！')
				}
			},
			nextShow() {
				"向后端发送请求"
			},
			submit() {
				var telhpone = /^1(3|4|5|7|8)\d{9}$/;
				if(telhpone.test(this.phoneNumber) == true){
					this.$router.push({path: '/num'})
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	@import "../../static/less/index";

	.regist-content {
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
		#address, input {
			.w(347);
			.h(44);
			border-radius: 10px;
			.margin(6, 0);
			border: 1px solid #ccc;
			.padding(0, 10);
			outline: none;
		}
		p {
			color: #aaa;
			.mb(30);
		}
		input {
			.pl(100);
			box-sizing: border-box;
		}
		#number {
			position: absolute;
			.left(22);
			.bottom(6);
			border: none;
			border-right: 1px solid #ccc;
			.w(80);
			.h(43);
			border-radius: 0;
			outline: none;
		}
	}

	.regist-btn {
		width: 100%;
		.padding(0, 14);
		button {
			.w(347);
			.h(44);
			border-radius: 44px;
			background-color: #33b4ff;
			color: #fff;
			outline: none;
			border: none;
			.mt(60);
			.fs(16);
		}
		p {
			color: #aaa;
			.mt(10);
			a {
				color: #666;
				font-weight: bold;
				.fs(15);
			}
		}
	}
</style>
