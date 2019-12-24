<template>
	<div class="detail-anal">
		<div class="top">
			<h2>广告发布</h2>
			<p>中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</p>
			<div>
				<p>产品数量:</p>
				<div><NumberS :num="num" @Data="numData"></NumberS></div>
			</div>
			<div>
				<p>适用地区:</p>
				<div><selecte :options="options" @showselects='selects'></selecte></div>
			</div>
			<div>
				<p>有效时间:</p>
				<div><Radio :radiomaps="radiomap" :radiostr="radio" @radiodata='radios'></Radio></div>
			</div>
			<div>
				<p>总价:</p>
				<div>{{mns}}元</div>
			</div>
			<el-button type="infor" @click='showdata'>立即购买</el-button>
		</div>
		<div class="sales-board-des">
		  <h2>产品说明</h2>
		  <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
		
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
				  <td>产品数量</td>
				  <td>适用地区</td>
				  <td>有效时间</td>
				  <td>总价</td>
			  </tr>
			  <tr>
				  <td>{{numDatas}}</td>
				  <td>{{selectsdata}}</td>
				  <td>{{radiodata}}</td>
				  <td>{{mns}}</td>
			  </tr>
		  </table>
		</el-dialog>
	</div>
</template>

<script>
	import selecte from '../../components/select'
	import NumberS from '../../components/Number'
	import check from '../../components/check'
	import Radio from '../../components/Radio'
	export default{
		components:{
			selecte,
			check,
			NumberS,
			Radio
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
				radiomap : ['一年', '半年', '三年'],
				radio: '一年' ,
				num: 1,
				numDatas:null,
				selectsdata:null,
				radiodata:null,
				dialogTableVisible:false,
				mns:500
			}
			
		},
		methods:{
			showdata(){
				console.log(this.numDatas)
				this.dialogTableVisible = true
			},
			numData(e){
				this.numDatas=e
				this.mns=this.numDatas*500
			},
			selects(e){
				this.selectsdata=e
			},
			radios(e){
				this.radiodata=e
				this.mns+=50;
			}
		}
	}
</script>

<style scoped>
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
