<template>
	<div class="dtzl">
		<ul v-for="data in list">
			<li>
				<p>
					<img :src="data.cover">
					<span>{{data.bangumi_id}}</span>
					<time>{{data.pub_time}}</time>
				</p>
				<div>
					<img :src="data.newest_ep_cover">
					<div>
						<p>{{data.title}}</p>
						<p>{{data.bangumi_id}}</p>
						<p>
							<span>光看人数：{{data.total_count}}</span>
							
						</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Dtzhuanlan",
		
		data(){
			return {
				list: []
			}
		},
		
		
		mounted:function(){
			this.$http({
				method:"get",
				url:"https://api.imjad.cn/bilibili/v2/?get=seasonrecommend&season_id=5800"
			}).then((data)=>{
				//console.log(this.list)
				console.log(data.data.result.list);
				this.list = data.data.result.list;
				console.log(this.list[0].tags[0].tag_name)
			})
		}
		
	}
</script>

<style>
	.dtzl{
		width: 100%;
	}
	.dtzl ul li{
		width: 100%;
		height: 1.36rem;
		
		border-top: 1px solid #ddd;
	}
	.dtzl ul li >p:nth-child(1){
		height: 0.36rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.dtzl ul li >p:nth-child(1) img {
		width: 0.24rem;
		height: 0.24rem;
		border-radius: 0.12rem;
		margin: 0 0.1rem;
	}
	.dtzl ul li >p:nth-child(1) span{
		color: #000;
		font-size: 0.12rem;
	}
	.dtzl ul li >p:nth-child(1) time{
		font-size: 0.12rem;
		color: #ccc;
		margin: 0 0.1rem;
	}
	.dtzl ul li >div:nth-child(2){
		display: flex;
		width: 100%;
	}
	.dtzl ul li >div:nth-child(2) img{
		height: 1rem;
		width: 1.5rem;
		margin: 0  0.1rem;
	}
	.dtzl ul li >div:nth-child(2) div{
		margin-right: 0.1rem;
		color: #000;
	}
	.dtzl ul li >div:nth-child(2) div >p{
		line-height: 0.24rem;
		font-size: 0.12rem;
	}
	.dtzl ul li >div:nth-child(2) div >p:nth-child(3){
		color: #ccc;
		
	}
	.dtzl ul li >div:nth-child(2) div >p:nth-child(3) >span:nth-child(2){
		margin: 0 0 0 0.2rem;
	}
</style>