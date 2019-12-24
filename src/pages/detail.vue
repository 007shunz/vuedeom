<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img :src="producicon" alt="">
				<ul>
					<router-link v-for="(item,index) in product" 
					tag="li" 
					active-class="active"
					:to="{path : item.path}"
					>
						{{item.name}}
					</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view>
					
				</router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import slideshow from '../components/slide.vue'
	export default{
		data(){
			return{
				product:[
					{
						name:'数据统计',
						path:'count',
						icon:'require("../assets/images/1.png")',
						active:false
					},
					{
						name:'数据预测',
						path:'forecast',
						icon:'require("../assets/images/2.png")',
						active:false
					},
					{
						name:'流量分析',
						path:'analysis',
						icon:'require("../assets/images/3.png")',
						active:false
					},
					{
						name:'广告发布',
						path:'publish',
						icon:'require("../assets/images/4.png")',
						active:false
					}
				],
				imgMap:{
					'/detail/count':require("../assets/images/1.png"),
					'/detail/forecast':require("../assets/images/2.png"),
					'/detail/analysis':require("../assets/images/3.png"),
					'/detail/publish':require("../assets/images/4.png"),
				}
			}
		},
		computed:{
			producicon(){
				return this.imgMap[this.$route.path]
			}
		}
		
	}
</script>

<style>
.detail-wrap{
	width: 1200px;
	display: flex;
	margin: 0 auto;
	
}
.detail-left{
	width: 25%;
	background: white;
}
.detail-right{
	width: 75%;
}
.product-board ul li{
	width: 100%;
	text-indent: 20px;
	height: 35px;
	line-height: 35px;
	cursor: pointer;
}
.product-board ul li:hover,.active{
	background: #4fc08d;
	color: white;
}
.product-board  img{
	display: block;
	margin: 0 auto;
}
.sales-board-des {
  padding: 15px 20px;
  background: white;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}


.table{
		width: 100%;
		
	}
	.table td{
		border: 1px solid #CCCCCC;
		text-align: center;
		height: 30px;
		line-height: 30px;
	}
	.table tr:nth-child(1){
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: white;
		background:#4fc08d;
	}
	.table tr:nth-child(1) td{
		border: none;
	}
</style>
