import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchApi } from "../redux/actions/actionFunction";



function Lorem(){

    const {loading,data,error} = useSelector(state => state);
    const dispatch = useDispatch()

    console.log(loading,data,error)

    useEffect(()=>{
        dispatch(fetchApi())
    },[])

    return (
        <div>
            
               {
                data && data.map(item =>
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <hr />
                    </div>
                )   
            }
            

        </div>
    )
}
export default Lorem