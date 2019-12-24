<template>
	<div class="detail-anal">
		<div class="top">
			<h2>数据统计</h2>
			<p>中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</p>
			<div>
				<p>产品类型:</p>
				<div><check :cityOptions="cityOptions" :mode="mode" @check='checkdata'></check></div>
			</div>
			<div>
				<p>适用地区:</p>
				<div><selecte :options="options" @showselects='showselect'></selecte></div>
			</div>
			<div>
				<p>有效时间:</p>
				<div>半年</div>
			</div>
			<div>
				<p>总价:</p>
				<div>{{mns}}元</div>
			</div>
			<el-button type="infor" @click="showpage">立即购买</el-button>
		</div>
		<div class="sales-board-des">
		  <h2>产品说明</h2>
		  <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
		
		  <table class="sales-board-table">
		    <tbody>
		        <tr class="ui-table-row">
		            <td class="col-first">
		                <div class="intro-pic">
		                    <label>安全安保</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>办公文教</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>彩票</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>车辆物流</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>成人用品</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>出版传媒</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>电脑硬件</label>
		                </div>
		            </td>
		        </tr>
		        <tr class="ui-table-row">
		            <td class="col-first">
		                <div class="intro-pic">
		                    <label>电子电工</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>房地产建筑装修</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>分类平台</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>服装鞋帽</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>箱包饰品</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>化工原料制品</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>机械设备</label>
		                </div>
		            </td>
		        </tr>
		        <tr class="ui-table-row">
		            <td class="col-first">
		                <div class="intro-pic">
		                    <label>家庭日用品</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>家用电器</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>教育培训</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>节能环保</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>金融服务</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>礼品</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>旅游住宿</label>
		                </div>
		            </td>
		        </tr>
		        <tr class="ui-table-row">
		            <td class="col-first">
		                <div class="intro-pic">
		                    <label>美容化妆</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>母婴护理</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>农林牧渔</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>软件</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>商务服务</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>生活服务</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>食品保健品</label>
		                </div>
		            </td>
		        </tr>
		        <tr class="ui-table-row">
		            <td class="col-first">
		                <div class="intro-pic">
		                    <label>手机数码</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>通讯服务设备</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>网络服务</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>医疗服务</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>游戏</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>运动休闲娱乐</label>
		                </div>
		            </td>
		            <td>
		                <div class="intro-pic">
		                    <label>招商加盟</label>
		                </div>
		            </td>
		        </tr>
		    </tbody>
		</table>
		</div>
		<el-dialog title="您的订单" :visible.sync="dialogTableVisible">
		  <table class="table">
			  <tr>
				  <td>产品类型</td>
				  <td>适用地区</td>
				  <td>总价</td>
			  </tr>
			  <tr>
				  <td><span v-for="item in checkdatas">{{item}},</span></td>
				  <td>{{showselects}}</td>
				  <td>{{mns}}</td>
			  </tr>
		  </table>
		</el-dialog>
	</div>
</template>

<script>
	import selecte from '../../components/select'
	import check from '../../components/check'
	export default{
		components:{
			selecte,
			check
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
				cityOptions : ['红色版', '绿色版', '紫色版'],
				mode: ['红色版'],
				showselects:null,
				checkdatas:null,
				dialogTableVisible:false,
				mns:500
			}
		},
		methods:{
			showpage(){
				console.log(this.showselects,this.checkdatas)
				this.dialogTableVisible = true
			},
			showselect(e){
				this.showselects=e;
				
			},
			checkdata(e){
				this.checkdatas=e
				this.mns+=50
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
		line-height: 45px;
	}
	.top>div div{
		line-height: 45px;
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
	

</style>
