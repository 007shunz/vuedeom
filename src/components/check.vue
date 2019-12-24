<template>
		 <div style="margin-top:5px">
		   <el-checkbox-group v-model="checkboxGroup" size="small" @change="showcheck">
		     <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
		   </el-checkbox-group>
		 </div>
</template>

<script>
	
	export default{
		props:{
			cityOptions:{
				type:Array,
				default:['红色版', '绿色版', '紫色版']
			},
			mode:{
				type:Array,
				default: ['红色版'] 
			}
		},
		data(){
			return{
				checkboxGroup:this.mode,
				cities:this.cityOptions
			}
		},
		methods:{
			showcheck(value){
				this.$emit('check',value)
			}
		}
		
	}
</script>

<style>
</style>
