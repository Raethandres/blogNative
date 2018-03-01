export default function reducer(state={
	list:[],
	error:null,
},action) {
	switch (action.type){
		case "FETTCH_LIST":{
			return{...state,list:[...action.payload]}
		}
		
	}
	return state 
}
