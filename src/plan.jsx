function Plan(props){
    return <>
   { console.log("plan")}
   <li className="shadow p-2 col-sm-9 my-2">{props.value}</li>
   <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>X</button>
    </>
}
export default Plan