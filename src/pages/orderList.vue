<template>
	<div class="orderlist-wrap">
		<div class="top">
			<div>
				<p>选择产品:&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<div><selects :options="selectdata" @showselects='showselect'></selects></div>
			</div>
			<div>
				<p>选择日期:&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<div> <el-date-picker
						  v-model="value"
						  type="daterange"
						  start-placeholder="开始日期"
						  end-placeholder="结束日期"
						  :default-time="['00:00:00', '23:59:59']">
						</el-date-picker>
				</div>
			</div>
			<div>
				<p>关键词:&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<div><el-input placeholder="请输入内容"v-model="input"clearable></el-input></div>
			</div>
		</div>
		<div class="bottom">
			<table class="table">
				<tr>
					<td>订单号</td>
					<td>版本类型</td>
					<td>购买产品</td>
					<td>有效时间</td>
					<td>购买日期</td>
					<td>数量</td>
					<td>总价</td>
				</tr>
				<tr v-for="(item,index) in viewdata">
					<td>{{item.Ordernumber}}</td>
					<td>{{item.Versiontype}}</td>
					<td>{{item.Purchaseproduct}}</td>
					<td>{{item.Effectivetime}}</td>
					<td>{{item.Dateofpurchase}}</td>
					<td>{{item.Numbers}}</td>
					<td>{{item.Totalprice}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import selects from '../components/select.vue'
	export default{
		created:function(){
			this.$http.get('http://localhost:3001/orderdata')
			.then((data)=>{
				this.orderdata=data.body
				this.viewdata=data.body
				
			},(err)=>{
				console.log(err)
			})
		},
		components:{
			selects
		},
		data(){
			return{
				selectdata:[{
				  value: '数据统计',
				  label: '数据统计'
				}, {
				  value: '流量分析',
				  label: '流量分析'
				}, {
				  value: '数据预测',
				  label: '数据预测'
				}, {
				  value: '广告发布',
				  label: '广告发布'
				}],
				input:'',
				value:'',
				orderdata:[],
				viewdata:[]
			}
		},
		methods:{
			showselect(e){
				for(let i=0; i<this.orderdata.length; i++){
					if(this.orderdata[i].Purchaseproduct==e){
						// this.viewdata.push(this.orderdata[i])
						console.log(this.orderdata[i])
					}
				}
				
			}
		}
		
	}
</script>

<style>
	.orderlist-wrap{
		width: 1200px;
		margin: 0 auto;
	}
	.orderlist-wrap .top{
		height: 42px !important;
		display: flex;
		justify-content:space-around;
		margin-top: 0;
	}
	.orderlist-wrap .top div{
		display: flex;
		line-height: 43px;
	}
	.bottom{
		padding-bottom: 40px;
	}
	.table{
			width: 100%;
			margin-top: 20px;
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
