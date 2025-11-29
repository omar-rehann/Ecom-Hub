import { useEffect, useState } from "react"
import "../styles/items.css"
function Love(){
    const [itemlove,setitem]=useState([]);
    useEffect(()=>{
        let all_data=JSON.parse(localStorage.getItem('love')) || [];
       if(all_data){
        setitem(all_data)
       }else{
        setitem([])
       }

    },[])
    // delete item
    function handleitem(i){
         let updatedata=itemlove.filter((_,indexx)=> indexx !==i)
        setitem(updatedata);
        localStorage.setItem('love',JSON.stringify(updatedata))

    }
  
    return(
        <>
        <div className="products mt-5">
            <div className="container">
           
  <table className="table table-hover align-middle">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name Product</th>
        <th>Img Product</th>
        <th>Price</th>
        <th>Remove Fav</th>
      </tr>
    </thead>
    <tbody>
        {itemlove.map((e,index)=>{
            return(
                <>
                 <tr>
        <td>{index+1}</td>
        <td>{e.name}</td>
        <td><img src={e.img} alt="" /></td>
<td>{parseInt(e.price)}</td>
        <td >
        <i className="fa-solid  fa-delete-left delete" onClick={()=>handleitem(index)}></i>
        </td>
      </tr>  
                </>
            )
        })}
     
    </tbody>
  </table>
</div>

        </div>
        </>
    )
}
export default Love