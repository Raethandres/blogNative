
export function fetchList(js) {
	return{
		type:"FETTCH_LIST",
		payload:js
	}
}

function Json(json){
	js=[]
		let d=0
		while (json[d]!=undefined) {
			js.push(json[d])
			d++
		}
	return(fetchList(js))
}



export function fetchData() {
	return function(dispatch) {

		fetch('http://www.cbdominio.net/apk/')
				.then((response) => response.json())
				.then((responseJson) => {
				dispatch(Json(responseJson));
				})
				.catch((error) => {
				console.error(error);
				});
				}
}

export function RefetchData() {
	return function(dispatch) {
		dispatch({type:"REFETTCH_LIST"})
		
	}
}