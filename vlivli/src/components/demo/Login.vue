<template>
	<div id="login">
		<p>
			<img v-on:click="clickMe()" src="../../assets/t/f5.jpg">
			<span>登录</span>
			<span>忘记密码?</span>
		</p>
		<div>
			<img v-if="btn1" v-on:focus="isTrue" src="../../assets/t/f6.jpg">
			<img v-if="btn2" src="../../assets/t/f7.jpg">
			
		</div>
		<div>
			<p>
				<img src="../../assets/t/f8.jpg"/>
				<input  v-on:click="user()" type="text" placeholder="你的手机号/邮箱" v-model="users"/>
			</p>
			<p>
				<img src="../../assets/t/f9.jpg"/>
				<input  v-on:click="ps()" v-model="pwd" type="password" placeholder="请输入你的密码"/>
			</p>
			<p>
				<a href="javascript:;" @click="register()">注册帐号</a>
				<a href="javascript:;" class="login" @click="loginMe()">登录</a>
			</p>
		</div>
	</div>
</template>

<script>
	
	/*window.onload = function(){
		var ologin = document.getElementsByClassName("login")[0]
		var ouser = document.getElementsByClassName("user")
		var opsw = document.getElementsByClassName("psw")
		console.log(ologin)
		ologin.onclick = function(){
			console.log(1)
			
			console.log(ouser[0].value)
		}
	}*/
	export default {
		components:{
			
		},
		data(){
			return {
				btn1:true,
				btn2:false,
				isTrue:true,
				users:"",
				pwd:""
				
			}
		},
		methods:{
			
			clickMe:function(){
				history.back()
			},
			user:function(){
				this.btn1=true,
				this.btn2=false
			},
			ps:function(){
				this.btn2=true,
				this.btn1=false
			},
			loginMe:function(){
				
				console.log(typeof this.users,typeof this.pwd)
				let users = localStorage.getItem("user");
				let name = JSON.parse(users).users;
				let pwd = JSON.parse(users).pwd;
				console.log(name,pwd);
				console.log(typeof name,typeof pwd)
				console.log(this.users==name,this.pwd==pwd)
				let that = this
				if (this.users==name&&this.pwd==pwd) {
					console.log(1)
					that.$router.push({path:"/demo",query:{btn4:false}})	
				}else{
					console.log(2)
				}
				
			},register:function(){
				this.$router.push({path:"/register"})
			}
		},
		
		beforeMount(){
			this.$emit("to-parent",false);
		}
	}
</script>

<style>
	#login{
		width: 100%;
		shape-rendering: 100%;
		font-size: 0.14rem;
		color:#fff;
	}
	#login >p{
		width:100%;
		height: 0.4rem;
		background: #fb7299;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	#login >p img{
		width: 0.16rem;
		height: 0.16rem;
		margin-left: 0.2rem;
	}
	#login >p span:nth-child(2){
		flex: 1;
		text-indent: 0.2rem;
	}
	#login >p span:nth-child(3){
		margin-right: 0.1rem;
	}
	#login >div:nth-child(2){
		width: 100%;
		height: 1.4rem;
		overflow: hidden;
	}
	#login >div:nth-child(2) >img{
		width: 100%;
		height: 1.6rem;
	}
	#login >div:nth-child(3){
		width: 100%;
		background: #EAEAEA;
		height: 3.85rem;
	}
	#login >div:nth-child(3) >p:nth-child(1){
		width: 2.6rem;
		height: 0.8rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
		box-sizing: border-box;
		border-bottom: 2px solid #ccc;
	}
	#login >div:nth-child(3) >p:nth-child(1) img{
		width: 0.29rem;
		height: 0.36rem;
		
	}
	#login >div:nth-child(3) >p:nth-child(1) input{
		flex: 1;
		height: 0.5rem;
		border: none;
		margin-left: 0.2rem;
		background: #EAEAEA;
	}
	#login >div:nth-child(3) >p:nth-child(2){
		width: 2.6rem;
		height: 0.8rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
		box-sizing: border-box;
		border-bottom: 2px solid #ccc;
	}
	#login >div:nth-child(3) >p:nth-child(2) img{
		width: 0.29rem;
		height: 0.36rem;
	}
	#login >div:nth-child(3) >p:nth-child(2) input{
		flex: 1;
		height: 0.5rem;
		border: none;
		margin-left: 0.2rem;
		background: #EAEAEA;
	}
	#login >div:nth-child(3) >p:nth-child(3){
		width: 2.6rem;
		height: 0.8rem;
		display: flex;
		align-items: center;
		margin: 0 auto;
		justify-content: space-between;
	}
	#login >div:nth-child(3) >p:nth-child(3) a{
		display: block;
		width: 1rem;
		height: 0.4rem;
		background: #EFC6D1;
		text-align: center;
		line-height: 0.4rem;
		color: #fff;
	}
	#login >div:nth-child(3) >p:nth-child(3) a:nth-child(1){
		background: none;
		border: 1px solid  #FB7299;
		box-sizing: border-box;
		color:  #FB7299;
	} 
</style>