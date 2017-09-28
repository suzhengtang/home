<template>
	<div class="regist-title">
		<span onclick="window.history.go(-1)"><</span>
		<h2>{{title}}</h2>
	</div>
</template>
<style lang="less">
	@import "../../static/less/index";
	.regist-title {
		width: 100%;
		.h(44);
		background-color: #ffffff;
		border-bottom: 1px solid #eee;
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
		h2 {
			color: #4b4b4b;
			.fs(16);
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				title:'账号-注册'
			}
		},
		computed: {},
		props: {},
		methods: {},
		components: {}
	}
</script>
