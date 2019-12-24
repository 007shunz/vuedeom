<template>
	<div class="slide-show" @mouseover="clearinv" @mouseout="runinv">
		<div class="slide-img">
			<a :href="slides[noewindex].href">
				<transition name="slide-trans">
					<img :src="slides[noewindex].src" alt="" v-if="isshow">
				</transition>
				<transition name="slide-trans-old">
						<img :src="slides[noewindex].src" alt="" v-if="!isshow">
				</transition>
				
			</a>
		</div>
			<h2>{{slides[noewindex].title1}}</h2>
			<ul>
				<li @click="goto(previndex)">&lt;</li>
				<li v-for="(item,index) in slides" @click="goto(index)">
					<a :class="index===noewindex?'on':''">{{index+1}}</a>
				</li>
				<li @click="goto(nextindex)">&gt;</li>
			</ul>
	</div>
</template>

<script>
	export default{
		props:{
			slides:{
				type:Array,
				default:[]
			},
			inv:{
				type:Number,
				default:10000
			}
		},
		
		data () {
			return{
				noewindex:1,
				isshow:true
			}
		},
		methods:{
			goto(index){
				this.isshow=false;
				setTimeout(()=>{
					this.isshow=true;
					this.noewindex=index
				},10)
				
			},
			runinv(){
				this.invid=setInterval(()=>{
					this.goto(this.nextindex)
				},this.inv)
			},
			clearinv(){
				clearInterval(this.invid)
			}
		},
		computed:{
			previndex(){
				if(this.noewindex===0){
					return this.slides.length-1
				}else{
					return this.noewindex - 1
				}
				
			},
			nextindex(){
				if(this.noewindex=== this.slides.length-1){
					return 0
				}
				return this.noewindex+1
			}
			
		},
		mounted(){
			this.runinv()
			console.log(this.slides)
		}
	}
</script>

<style>
	.slide-trans-enter-active{
		transition: all .5s;
	}
	.slide-trans-enter{
		transform: translateX(900px);
	}
	.slide-trans-old-leave-active{
		transition: all .5s;
		transform: translateX(-900px);
	}
	.slide-show{
		overflow: hidden;
		margin-left: 35px;
		position: relative;
	}
	.slide-img a{
		display: block;
		height:305px;
	}
	.slide-img a img{
		width: 100%;
		height:335px
	}
	.slide-show h2{
		width: 100%;
		background: rgba(0,0,0,0.5);
		position: relative;
		bottom: 0;
		left: 0;
		height: 30px;
		color: white;
		line-height: 30px;
		text-indent: 15px;
	}
	.slide-show ul{
		width: 120px;
		position: absolute;
		display: flex;
		bottom: 5px;
		right: 20px;
		text-align: right;
		color: white;
	}
	.slide-show ul li{
		width:30px
	}
	.slide-show ul li a{
		color: white;
	}
	.on{
		color: orange !important; 
	}
</style>
