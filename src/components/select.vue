<template>
	<div class="select">
		<el-select v-model="value" placeholder="请选择" @change="showselect">
			<el-option v-for="(item,index) in options":key="item.value" :label="item.label" :value="item.value">{{item.label}}</el-option>
		</el-select>
	</div>
</template>

<script>
	export default{
		props:{
			options:{
				type:Array,
				default:[{
				  value: '北京',
				  label: '北京'
				}, {
				  value: '上海',
				  label: '上海'
				}, {
				  value: '天津',
				  label: '天津'
				}, {
				  value: '深圳',
				  label: '深圳'
				}, {
				  value: '广州',
				  label: '广州'
				}]
			}
		},
		data(){
			return{
				value: ''
			}
		},
		methods:{
			showselect(value){
				this.$emit('showselects',value)
			}
		}
	}
</script>

<style>
</style>
