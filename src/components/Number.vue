<template>
	<el-input-number v-model="nums" @change="handleChange" :min="1" label="描述文字"></el-input-number>
</template>

<script>
	export default{
		props:{
			num:{
				type:Number,
				default:1
			}
		},
		data(){
			return{
				 nums: this.num
			}
		},
		methods: {
		  handleChange(value) {
			this.$emit('Data',value)
		  }
		}
	}
</script>

<style>
</style>
