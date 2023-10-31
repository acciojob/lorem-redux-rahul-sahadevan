import { FETCH_SUCCESS,FETCH_RESULT,ERROR } from "../actions/actionType";

let intialState = {
    loading:false,
    data:[],
    error:null
}

const fetchReducer = (state=intialState,action)=>{

    switch(action.type){
        case FETCH_SUCCESS:return {...state,loading:true};
        case FETCH_SUCCESS:return {...state,loading:false,data:action.value,error:null};
        case ERROR:return {...state,loading:false,data:[],error:action.value};
        default:return state;
    }

}
export default fetchReducer