<template>
	  <div style="margin-top: 5px">
	    <el-radio-group v-model="radio" size="small" @change="showradio">
	      <el-radio-button :label="item" v-for="(item,index) in radiomap"></el-radio-button>
	    </el-radio-group>
	  </div>
</template>

<script>
	export default{
		props:{
			 radiostr:{
				 type:String,
				 default:''
			 },
			 radiomaps:{
				 type:Array,
				  default:['初级版', '中级版', '高级版', '专家版']
			 }
			 
		},
		
		data(){
			return{
				 radio: this.radiostr,
				 radiomap:this.radiomaps
			}
		},
		methods:{
			showradio(value){
				this.$emit('radiodata',value)
			}
		}
	}
</script>

<style>
</style>
