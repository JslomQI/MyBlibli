import axios from "axios"

var TodoAction = {
	getData(store, that){
		axios({
		  	method:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback="
	  	}).then((data) => {
	  		let thisdata = eval(data.data)
	  		this.commit("getData", thisdata)
	  	})
	}
}

export default TodoAction