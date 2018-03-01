export default function reducer(state={
	list:[],
	fech:false,
	error:null,
},action) {
	switch (action.type){
		case "FETTCH_LIST":{
			return{...state,list:[...action.payload],fech:true}
		}
		case "REFETTCH_LIST":{
			return{...state,fech:false}
		}
		
	}
	return state 
}
