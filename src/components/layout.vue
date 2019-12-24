<template>
	<div>
		<div class="app-header">
			<div class="app-head-inner">
				<router-link :to="{path : '/'}"><img src="../../build/logo.png" alt="logo"></router-link>
				<div class="head-nav">
					<ul>
						<li><el-button type="text" style="color: white;" @click="dialogFormVisible = true">{{land}}</el-button></li>
						<li class="nav-pile">|</li>
						<li @click="cole"  style="cursor: pointer;">{{register}}</li>
						<li class="nav-pile">|</li>
						<li @click="dialogFormVisibles=true" style="cursor: pointer;">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
			<el-dialog title="提示" :visible.sync="dialogFormVisible">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				 <el-form-item label="用户名" prop="name">
				   <el-input v-model.number="ruleForm.name"></el-input>
				 </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass">
				    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				  </el-form-item>
				  
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')"><span>提交</span></el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
				  </el-form-item>
				</el-form>
			</el-dialog>
			
			
			
			<el-dialog title="提示" :visible.sync="dialogFormVisibles">
				<h1>这是关于我们字段</h1>
			</el-dialog>
		</div>
		<div class="app-footer">
			<p>2019fishenal MIT</p>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			 var checkname = (rule, value, callback) => {
				if (!value) {
				  return callback(new Error('用户名不能为空'));
				}
				setTimeout(() => {
				  if (Number.isInteger(value)) {
					callback(new Error('不能输入数字值'));
				  } else {
					if (value < 18) {
					  callback(new Error('必须年满18岁'));
					} else {
					  callback();
					}
				  }
				}, 1000);
			  };
			  
			  var validatePass = (rule, value, callback) => {
				if (value === '') {
				  callback(new Error('请输入密码'));
				} else {
				  if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('checkPass');
				  }
				  callback();
				}
			  };
			  var validatePass2 = (rule, value, callback) => {
				if (value === '') {
				  callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
				  callback(new Error('两次输入密码不一致!'));
				} else {
				  callback();
				}
			  };
			  return {
				  dialogTableVisible: false,
				  dialogFormVisible: false,
				  dialogFormVisibles:false,
				   land:"登陆",
				   register:'注册',
					ruleForm: {
					  pass: '',
					  checkPass: '',
					  name: ''
					},
				rules: {
					name: [
						{ validator: checkname, trigger: 'blur' }
					],
				  pass: [
					{ validator: validatePass, trigger: 'blur' }
				  ],
				  checkPass: [
					{ validator: validatePass2, trigger: 'blur' }
				  ]
				  
				}
			  };
		},
		methods:{
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					alert('提交成功!');
					this.land=this.ruleForm.name;
					this.dialogFormVisible = false;
					this.register='退出'
				  } else {
					console.log('error submit!!');
					return false;
				  }
				});
				
			  },
			  resetForm(formName) {
				this.$refs[formName].resetFields();
			  },
			  cole(){
				  if(this.register=='退出'){
					  this.land='登陆';
				  }
			  }
		}
	}
</script>

<style>
	html{ color: #333; background: #FFF; }
	*{margin:0; padding:0;}
	.ellipsis{white-space:nowrap;  text-overflow:ellipsis; overflow:hidden; }
	body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, select, option, p, blockquote, th, td, figure, img { margin: 0; padding: 0; }
	table{border-collapse:collapse; border-spacing:0; }
	ul,li,h1,h2,h3,h4,h5,h6,ol,article,aside,header,footer,figure,figcaption,form,label,fieldset,legend,iframe,frameset,frame{display:block}
	fieldset, img { border: 0; }
	address, caption, cite, code, dfn, em, strong, th, var, optgroup {font-style: inherit; font-weight: inherit; }
	del, ins { text-decoration: none; }
	li { list-style: none; }
	caption, th { text-align: left; }
	h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; }
	q:before, q:after { content: ''; }
	abbr, acronym { border: 0; font-variant: normal; }
	sup { vertical-align: baseline; }
	sub { vertical-align: baseline; }
	legend { color: #000; }
	input, button, textarea, select, optgroup, option { font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; }
	input, button, textarea, select { *font-size:100%;
	}
	input, button, select { border: 0 none; outline: 0 none; }
	a { color: black; outline: 0 none; text-decoration: none; cursor: pointer; }
	a:hover { text-decoration: none; }
	input[type="text"], input[type="password"] { -webkit-box-shadow: 0 0 0px 1000px white inset; }
	input[type=text]::-ms-clear {
	display: none;
	}
	* { outline: 0 none; }
	button { background: #FFF; }
	/*字体颜色*/
	.fg{color:#333;}
	.fw{color:#fff;}
	/*文字排版*/
	.f12 { font-size: 12px; }
	.f13 { font-size: 13px; }
	.f14 { font-size: 14px; }
	.f16 { font-size: 16px; }
	.f18 { font-size: 18px; }
	.f20 { font-size: 20px; }
	.f22 { font-size: 22px; }
	.f24 { font-size: 24px; }
	.f26 { font-size: 26px; }
	.f28 { font-size: 28px; }
	.f30 { font-size: 30px; }
	.f32 { font-size: 32px; }
	.fb { font-weight: bold }
	.fn { font-weight: normal; }
	.t2 { text-indent: 2em; }
	.lh150 { line-height: 150%; }
	.lh180 { line-height: 180%; }
	.lh200 { line-height: 200%; }
	.unl { text-decoration: underline; }
	.no_unl { text-decoration: none; }
	/*传统盒模型*/
	.bb { -moz-box-sizing: border-box; box-sizing: border-box; }
	/*定位*/
	.tl { text-align: left; }
	.tc { text-align: center; }
	.tr { text-align: right; }
	.tj { text-align: justify; }
	.vm { vertical-align: middle; }
	.vt { vertical-align: top; }
	.vb { vertical-align: bottom; }
	.bc { margin-left: auto; margin-right: auto; }
	.fl { float: left; display: inline; }
	.fr { float: right; display: inline; }
	.cb { clear: both; }
	.cl { clear: left; }
	.cr { clear: right; }
	.clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }
	.pr { position: relative; }
	.pa { position: absolute; }
	/*.abs-right{position:absolute;right:0}*/
	.par { position: absolute; right: 10px; top: 10px }
	.pab { position: absolute; bottom:0;}
	.zoom { zoom: 1; }
	.hidden { visibility: hidden; }
	.none { display: none; }
	.block { display: block; }
	.ib { display: inline-block; }
	/*长度高度*/
	.w10 { width: 10px; }
	.w20 { width: 20px; }
	.w30 { width: 30px; }
	.w40 { width: 40px; }
	.w50 { width: 50px; }
	.w60 { width: 60px; }
	.w70 { width: 70px; }
	.w80 { width: 80px; }
	.w90 { width: 90px; }
	.w100 { width: 100px; }
	.w200 { width: 200px; }
	.w300 { width: 300px; }
	.w400 { width: 400px; }
	.w500 { width: 500px; }
	.w600 { width: 600px; }
	.w700 { width: 700px; }
	.w800 { width: 800px; }
	.w { width: 100% }
	.h50 { width: 50px; }
	.h80 { width: 80px; }
	.h100 { width: 100px; }
	.h200 { width: 200px; }
	.h { height: 100% }
	/*边距*/
	.m10 { margin: 10px; }
	.m15 { margin: 15px; }
	.m30 { margin: 30px; }
	.mt5 { margin-top: 5px; }
	.mt10 { margin-top: 10px; }
	.mt15 { margin-top: 15px; }
	.mt20 { margin-top: 20px; }
	.mt30 { margin-top: 30px; }
	.mt50 { margin-top: 50px; }
	.mt80 { margin-top: 80px; }
	.mt100 { margin-top: 100px; }
	.mb5 { margin-bottom: 5px; }
	.mb10 { margin-bottom: 10px; }
	.mb15 { margin-bottom: 15px; }
	.mb20 { margin-bottom: 20px; }
	.mb30 { margin-bottom: 30px; }
	.mb50 { margin-bottom: 50px; }
	.mb100 { margin-bottom: 100px; }
	.ml5 { margin-left: 5px; }
	.ml10 { margin-left: 10px; }
	.ml15 { margin-left: 15px; }
	.ml20 { margin-left: 20px; }
	.ml30 { margin-left: 30px; }
	.ml50 { margin-left: 50px; }
	.ml100 { margin-left: 100px; }
	.mr5 { margin-right: 5px; }
	.mr10 { margin-right: 10px; }
	.mr15 { margin-right: 15px; }
	.mr20 { margin-right: 20px; }
	.mr30 { margin-right: 30px; }
	.mr50 { margin-right: 50px; }
	.mr100 { margin-right: 100px; }
	.p10 { padding: 10px; }
	.p15 { padding: 15px; }
	.p30 { padding: 30px; }
	.pt5 { padding-top: 5px; }
	.pt10 { padding-top: 10px; }
	.pt15 { padding-top: 15px; }
	.pt20 { padding-top: 20px; }
	.pt30 { padding-top: 30px; }
	.pt50 { padding-top: 50px; }
	.pt100 { padding-top: 100px; }
	.pb5 { padding-bottom: 5px; }
	.pb10 { padding-bottom: 10px; }
	.pb15 { padding-bottom: 15px; }
	.pb20 { padding-bottom: 20px; }
	.pb30 { padding-bottom: 30px; }
	.pb50 { padding-bottom: 50px; }
	.pb100 { padding-bottom: 100px; }
	.pl5 { padding-left: 5px; }
	.pl10 { padding-left: 10px; }
	.pl15 { padding-left: 15px; }
	.pl20 { padding-left: 20px; }
	.pl30 { padding-left: 30px; }
	.pl50 { padding-left: 50px; }
	.pl100 { padding-left: 100px; }
	.pr5 { padding-right: 5px; }
	.pr10 { padding-right: 10px; }
	.pr15 { padding-right: 15px; }
	.pr20 { padding-right: 20px; }
	.pr30 { padding-right: 30px; }
	.pr50 { padding-right: 50px; }
	.pr100 { padding-right: 100px; }
	/*水平线*/
	hr { border-style: dashed; border-width: 1px 0; }
	.app-header{
		background:#444444;
	}
	.app-head-inner{
		width: 1200px;
		margin: 0 auto;
		
		display: flex;
		height: 80px;
		justify-content:space-between;
	}
	.app-head-inner img{
		width: 50px;
		transform: translateX(15px)translateY(15px);
		height:50px;
	}
	.head-nav ul{
		display: flex;
		line-height: 80px;
	}
	.head-nav ul li{
		width:40px;
		text-align: center;
		color:#e0e1e1;
		transform: translateX(-15px);
	}
	.app-footer{
		height: 80px;
		line-height: 80px;
		background: #f5f5f5;
		text-align: center;
		color: #9b9b9b;
	}
	.app-content{
		background: #f9f9f9;
		padding-top:40px;
	}
</style>
