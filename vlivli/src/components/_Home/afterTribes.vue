<template>
	<div>
		<div class="tribes_head">
			<div class="double_btn">
				<button class="btu_left btn">
					<img src="../../assets/home_src/img/trides_btn_two.png" width="90%" />
				</button>
				<button class="btu_right btn">
					<img src="../../assets/home_src/img/trides_btn_two.png" width="90%" />
				</button>
			</div>
			<div class="double_cli">
				<div class="cli_left cli">
					<i>
						<img src="../../assets/home_src/img/small_icon/afterTribes_ico3.png" width="100%"/>
					</i>
					<span>时刻表</span>
				</div>
				<div class="cli_right cli">
					<i>
						<img src="../../assets/home_src/img/small_icon/afterTribes_ico4.png" width="100%"/>
					</i>
					<span>索引</span>
				</div>
			</div>
		</div>
		<div class="con_styleOne">
			<div class="styleOne_title">
				<div class="styleOne_title_in">
					<div class="styleOne_title_left">
						<i>
							<img src="../../assets/home_src/img/small_icon/afterTribes_ico2.png" width="100%"/>
						</i>
						<span>我的番剧</span>
					</div>
					<div class="styleOne_title_right">
						<span>查看全部</span>
						<i>></i>
					</div>
				</div>
			</div>
			<div class="styleOne_list">
				<ul class="styleOne_list_ul">
					<li class="styleOne_list_li">
						<img src="../../assets/home_src/img/trides_styleOne_pic1.png" width="100%"/>
						<p class="list_in_title">Fate/Apocrypah</p>
						<p class="now_have_series series">更新至 第19话</p>
						<p class="see_series series">看到 第19话</p>
					</li>
					<li class="styleOne_list_li">
						<img src="../../assets/home_src/img/trides_styleOne_pic1.png" width="100%"/>
						<p class="list_in_title">Fate/Apocrypah</p>
						<p class="now_have_series series">更新至 第19话</p>
						<p class="see_series series">看到 第19话</p>
					</li>
					<li class="styleOne_list_li">
						<img src="../../assets/home_src/img/trides_styleOne_pic1.png" width="100%"/>
						<p class="list_in_title">Fate/Apocrypah</p>
						<p class="now_have_series series">更新至 第19话</p>
						<p class="see_series series">看到 第19话</p>
					</li>
				</ul>
				<div class="styleOne_bunt">
					<img src="../../assets/home_src/img/trides_styleOne_pic2.png" width="100%"/>
				</div>
			</div>
		</div>
		<div class="con_styleOne">
			<div class="styleOne_title">
				<div class="styleOne_title_in">
					<div class="styleOne_title_left">
						<i>
							<img src="../../assets/home_src/img/small_icon/afterTribes_ico2.png" width="100%"/>
						</i>
						<span>番剧推荐</span>
					</div>
					<div class="styleOne_title_right">
						<span>查看全部</span>
						<i> ></i>
					</div>
				</div>
			</div>
			<div class="styleOne_list">
				<ul class="styleOne_list_ul">
					<li class="styleOne_list_li" v-for="styData in secList">
						<img src="../../assets/home_src/img/trides_styleOne_pic1.png" width="100%"/>
						<p class="list_in_title">{{styData.bangumi_title}}</p>
						<p class="see_series series">{{styData.season_title}}</p>
					</li>
					
				</ul>
				<div class="styleOne_bunt">
					<img src="../../assets/home_src/img/trides_styleOne_pic2.png" width="100%"/>
				</div>
			</div>
		</div>
		<div class="con_styleTwo">
			<div class="con_styleTwo_head">
				<i>
					<img src="../../assets/home_src/img/small_icon/afterTribes_ico1.png" width="100%"/>
				</i>
				<span class="etc_groom">编辑推荐</span>
			</div>
			<ul class="styleTwo_list_ul">
				<li class="styleTwo_list_li" v-for="secTen in secTen">
					<img src="../../assets/home_src/img/trides_styleTwo_pic1.png" width="100%"/>
					<!--<img v-bind:src="secTen.cover" width="100%"/>-->
					<p class="styleTwo_list_title">{{secTen.title}}</p>
					<p class="styleTwo_list_say">{{secTen.evaluate}}</p>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: "afterTribes",
		data: function () {
			return{
				secList: [],
				secTen:[]
			}
		},
		mounted(){
			this.$http({
				method:"get",
				params: {type: "all", content: "global", duration: "7", new: false},
				url:"https://api.imjad.cn/bilibili/v2/?get=rank"
			}).then((data)=>{
				console.log(data.data.result.list);
				var resLst = data.data.result.list;
				var aSeasonId = [];
				var aSecTenId = [];
				var aSec = [];
				var aSecTen = [];
				for(var sec in resLst){
					if(sec < 3){
						aSeasonId.push(resLst[sec].season_id)
						this.$http({
							method:"get",
							params:{season_id: resLst[sec].season_id},
							url:"https://api.imjad.cn/bilibili/v2/?get=seasoninfo"
						}).then((data) => {
							aSec.push(data.data.result)
							console.log(aSec)
							this.secList = aSec
						})
					}else if(sec <= 13){
						console.log("sec" + sec)
						aSecTenId.push(resLst[sec].season_id)
						this.$http({
							method:"get",
							params:{season_id: resLst[sec].season_id},
							url:"https://api.imjad.cn/bilibili/v2/?get=seasoninfo"
						}).then((data) => {
							aSecTen.push(data.data.result)
							console.log(aSecTen)
							this.secTen = aSecTen
						})
					}
				}
				console.log(this.secList)
			})
		},
	}
</script>

<style>
	@import url("../../assets/home_src/css/afterTribes.css");
</style>