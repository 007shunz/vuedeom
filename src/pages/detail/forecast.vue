<template>
	<div class="detail-anal">
		<div class="top">
			<h2>数据预测</h2>
			<p>中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</p>
			<div>
				<p>购买数量</p>
				<div><NumberS :num="num" @Data="NumData"></NumberS></div>
			</div>
			<div>
				<p>媒介:</p>
				<div><check :cityOptions="cityOptions" :mode="mode" @check="Check"></check></div>
			</div>
			<div>
				<p>有效时间:</p>
				<div>一年</div>
			</div>
			<div>
				<p>总价:</p>
				<div>{{mns}}元</div>
			</div>
			<el-button type="infor" @click="showdata">立即购买</el-button>
		</div>
		<div class="sales-board-des">
		        <h2>产品说明</h2>
		        <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒……
		以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。
		大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。
		作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。
		关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
		      </div>
		<el-dialog title="您的订单" :visible.sync="dialogTableVisible">
		  <table class="table">
			  <tr>
				  <td>购买数量</td>
				  <td>媒介</td>
				  <td>总价</td>
			  </tr>
			  <tr>
				  <td>{{NumDatas}}</td>
				  <td><span v-for="item in Checkdata">{{item}},</span></td>
				  <td>{{mns}}</td>
			  </tr>
		  </table>
		</el-dialog>
	</div>
</template>

<script>
	import check from '../../components/check'
	import NumberS from '../../components/Number'
	export default{
		components:{
			NumberS,
			check
		},
		data(){
			return{
				cityOptions : ['详细报告', 'pdf', '页面报告','邮件'],
				mode: ['详细报告'] ,
				num: 1,
				NumDatas:null,
				Checkdata:null,
				mns:500,
				dialogTableVisible :false
			}
		},
		methods:{
			showdata(){
				console.log(this.NumDatas,this.Checkdata)
				this.dialogTableVisible = true
			},
			NumData(e){
				this.NumDatas=e
				this.mns=this.NumDatas*500
			},
			Check(e){
				this.Checkdata=e
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
	
</style>
