<template>
	<div>
		<div class="content-wapp">
			<div class="wapp-left">
				<div class="left-top">
					<h2>全部产品</h2>
					<h3>pc产品</h3>
					<ul>
						<router-link :to="{path : item.path}" tag="li" v-for="(item,index) in pcproduct" :class="index==3? 'bor':''">{{item.text}}<p class="hos" v-show="item.host">hos</p></router-link>
					</ul>
					<h3>应用类</h3>
					<ul>
						<li v-for="item in appdata">{{item.text}} </li>
					</ul>
				</div>
				<div class="left-button">
					<h2>最新消息</h2>
					<ul>
						<li v-for="(item,index) in nesdata">{{item.text}}{{index+1}}</li>
					</ul>
				</div>
			</div>
			
			<div class="wapp-right">
				<slideshow :slides="slids" :inv="invtime"></slideshow>
				<el-row style="margin-top: 20px;">
					<el-col :span="11" :offset="1" class="kuan"  v-for="(item,index) in datas01">
						<el-row>
							<el-col :span="8":offset="1" ><img :src="item.imgurl" alt="" class="kuan-img"></el-col>
							<el-col :span="15">
								<h4 class="kuan-h2">{{item.text01}}</h4>
								<p class="kuan-p over-text">{{item.text02}}</p>
								<router-link :to="{path : item.href}" tag="el-button" type="success">立即购买</router-link>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import slideshow from '../components/slide.vue'
	export default{
		components:{
			slideshow
		},
		data(){
			return{
				invtime:2000,
				slids:[
					{
						src:require('../assets/slideShow/pic1.jpg'),
						title1:'xxx1',
						
					},
					{
						src:require('../assets/slideShow/pic2.jpg'),
						title1:'xxx2',
					
					},
					{
						src:require('../assets/slideShow/pic3.jpg'),
						title1:'xxx3',
						
					},
					{
						src:require('../assets/slideShow/pic4.jpg'),
						title1:'xxx4',
						
					}
				],
				datas01:[
						{
								"imgurl":require("../assets/images/1.png"),
								"text01":"开放产品",
								"text02":"开放产品是一款开放产品",
								href:'detail/count'
							},
						{
								"imgurl":require("../assets/images/2.png"),
								"text01":"产品营销",
								"text02":"产品营销帮助你的产品找到更好的定位",
									href:'detail/forecast'
							},
						{
								"imgurl":require("../assets/images/3.png"),
								"text01":"开放产品",
								"text02":"开放产品是一款开放产品",
								href:'detail/analysis'
							},
						{
								"imgurl":require("../assets/images/4.png"),
								"text01":"产品营销",
								"text02":"产品营销帮助你的产品找到更好的定位",
								href:'detail/publish'
							},
				],
				pcproduct:[
					{
						"text":"数据统计",
						path:'detail/count',
						host:true
					},
					{
						"text":"产品营销",
						path:'detail/forecast',
						host:false
					},
					{
						"text":"流量分析",
						path:'detail/analysis',
						host:true
					},
					{
						"text":"广告发布",
						path:'detail/publish',
						host:false
					}
				],
				appdata:[
					{
						"text":"91助手",
					},
					{
						"text":"产品助手",
					},
					{
						"text":"智能地图",
					},
					{
						"text":"团队语音",
					}
				],
				nesdata:[
					{
						"text":"这是数据",
					},
					{
						"text":"这是数据",
					},
					{
						"text":"这是数据",
					},
					{
						"text":"这是数据",
					}
				]
			}
		},
		methods:{
			btn:function(){
				console.log(this.datas)
			}
		}
		
	}
</script>

<style>
	.kuan{
		background: white;
		height: 140px;
		margin-bottom: 20px;
	}
	.content-wapp{
		width: 80%;
		margin: 0px auto;
		display: flex;
	}		
	.wapp-left{
		width:22%;
		
	}
	.wapp-right{
		width: 78%;
	}
	 .left-top{
		 background: white;
	 }
	.wapp-left .left-top h2 ,.left-button h2{
		height: 30px;
		line-height: 30px;
		background:#5dd88e;
		font-size: 14px;
		color: white;
		text-indent: 10px;
	}
	.wapp-left .left-top h3{
		height: 30px;
		line-height: 30px;
		font-weight: bold;
		text-indent: 10px;
		font-size: 14px;
	}
	.bor{
		margin-bottom: 20px;
		border-bottom: 1px solid #ccc;
	} 
	.wapp-left .left-top ul li ,.left-button  ul li{
		height: 25px;
		line-height: 25px;
		text-indent: 20px;
		font-size: 14px;
		cursor: pointer;
		display: flex;
	}
	.left-button h2{
		margin-bottom: 15px;
	}
	.left-button{
		margin-top: 20px;
		background: white;
		height: 350px;
	}
	.kuan-h2{
		font-weight: bold;
		line-height: 30px;
		margin-top: 10px;
	}
	.kuan-p{
		font-size: 12px;
		line-height: 25px;
		margin-bottom:15px;
	}
	.kuan-img{
		margin-top: 10px;
	}
	.over-text{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.hos{
		width:30px;
		height:15px;
		display: block;
		line-height: 25px;
		background: red;
		transform: translateX(20px)translateY(5px);
		text-align: left;
		font-size: 12px;
		color: white;
		text-indent: 0;
		line-height: 15px;
		text-align: center
	}
</style>
