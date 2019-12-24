<template>
	<div class="detail-anal">
		<div class="top">
			<h2>流量分析</h2>
			<p>中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</p>
			<div>
				<p>购买数量:</p>
				<div><NumberS :num="num"@Data="NumData"></NumberS></div>
			</div>
			<div>
				<p>产品类型:</p>
				<div><selecte :options="options"@showselects="select"></selecte></div>
			</div>
			<div>
				<p>有效时间:</p>
				<div><Radio :radiostr='radio' :radiomaps='radiomap' @radiodata='radiodatas'></Radio></div>
			</div>
			<div>
				<p>产品版型:</p>
				<div><check :cityOptions="cityOptions1" :mode="modes" @check='Check'></check></div>
			</div>
			<div>
				<p>总价:</p>
				<div>{{mns}}元</div>
			</div>
			<el-button type="infor" @click="showpage">立即购买</el-button>
		</div>
		<div class="sales-board-des">
		  <h2>产品说明</h2>
		  <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>
		
		  <h3>用户行为指标</h3>
		  <ul>
		    <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
		    <li>用户在网站的停留时间；</li>
		    <li>用户来源网站（也叫“引导网站”）；</li>
		    <li>用户所使用的搜索引擎及其关键词；</li>
		    <li>在不同时段的用户访问量情况等。</li>
		  </ul>
		
		  <h3>浏览网站方式</h3>
		  <ul>
		    <li>用户上网设备类型</li>
		    <li>用户浏览器的名称和版本</li>
		    <li>访问者电脑分辨率显示模式</li>
		    <li>用户所使用的操作系统名称和版本</li>
		    <li>用户所在地理区域分布状况等</li>
		  </ul>
		</div>
		<el-dialog title="您的订单" :visible.sync="dialogTableVisible">
		  <table class="table">
			  <tr>
				  <td>产品数量</td>
				  <td>适用地区</td>
				  <td>有效时间</td>
				  <td>产品版型</td>
				  <td>总价</td>
			  </tr>
			  <tr>
				  <td>{{NumDatas}}</td>
				  <td>{{selectdata}}</td>
				  <td>{{radiodata}}</td>
				  <td><span v-for="item in Checkdata">{{item}},</span></td>
				  <td>{{mns}}</td>
			  </tr>
		  </table>
		  <h3 class="buy-dialog-title">请选择银行</h3>
		  <bank-chooser @on-change="onChangeBanks"></bank-chooser>
		  <el-button type="success" @click='show'>确认购买</el-button>
		</el-dialog>
		<el-dialog title="支付中" :visible.sync="dialogTableVisibles">
			<el-button :type="payments" :loading="paymentloading">{{paymenttext}}</el-button>
		</el-dialog>
	</div>
</template>

<script>
	import selecte from '../../components/select'
	import NumberS from '../../components/Number'
	import Radio from '../../components/Radio'
	import check from '../../components/check'
	import BankChooser from '../../components/bankChooser'
	export default{
		components:{
			selecte,
			check,
			NumberS,
			Radio,
			BankChooser
		},
		data(){
			return{
				options: [{
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
				}],
				cityOptions1 : ['客户版', '代理商版', '专家版'],
				modes: ['客户版'] ,
				num: 1,
				radiomap:['半年', '一年', '三年'],
				radio:'一年',
				NumDatas:null,
				selectdata:null,
				radiodata:null,
				Checkdata:null,
				dialogTableVisible:false,
				dialogTableVisibles:false,
				mns:500,
				payments:'primary',
				paymentloading:true,
				paymenttext:'支付中'
			}
		},
		methods:{
			showpage(){
				this.dialogTableVisible = true
				
			},
			NumData(e){
				this.NumDatas=e
				this.mns+=500
			},
			select(e){
				this.selectdata=e
				
			},
			radiodatas(e){
				this.radiodata=e
				this.mns+=50
			},
			Check(e){
				this.Checkdata=e
				this.mns+=50
			},
			onChangeBanks (bankObj) {
			  this.bankId = bankObj.id
			},
			show(){
				this.dialogTableVisible=false;
				this.dialogTableVisibles=true;
				setTimeout(()=>{
					this.payments=''
					this.paymentloading=false
					this.dialogTableVisibles=false
					this.paymenttext='支付完成'
					this.$router.push({path:'../orderList'})
				},2000)
			}
		}
	}
</script>

<style>
.detail-anal{
		margin-left: 20px;
	}
	.top{
		background: white;
		margin-bottom: 20px;
		
		padding: 20px;
	}
	.top h2{
		font-size: 20px;
		margin-bottom: 20px;
	}
	.top>p{
		line-height: 25px;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.top>div {
		display: flex;
		line-height: 30px;
	}
	.top>div:last-of-type{
		margin-bottom: 20px;
	}
	.top>div p{
		width: 100px;
	}
	.buttom{
		background: white;
		padding: 20px;
	}
	.buttom h4{
		font-size: 20px;
		color: #CCCCCC;
	}
	.buttom h3{
		font-size: 18px;
		line-height: 35px;
	}
	.buttom p{
		font-size: 14px;
		line-height: 25px;
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
