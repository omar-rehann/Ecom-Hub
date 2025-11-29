import { useEffect, useState } from "react"
import "../styles/items.css"

function Items(){
    const [allitem,setitem]=useState([]);
    useEffect(()=>{
        let all_data=JSON.parse(localStorage.getItem('cart')) || [];
       if(all_data){
        setitem(all_data)
       }else{
        setitem([])
       }
    },[])
    console.log(allitem.length)
    // delete item
    function handleitem(i){
         let updatedata=allitem.filter((_,indexx)=> indexx !==i)
        setitem(updatedata);
        localStorage.setItem('cart',JSON.stringify(updatedata))

    }
    
  console.log(allitem.length)
    // increase 
  function increasePrice(i) {
    const updated = [...allitem];
    updated[i].price +=parseInt( updated[i].price );
    setitem(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
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
        <th>Detials</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {allitem.map((e,index)=>{
            return(
                <>
                 <tr>
        <td>{index+1}</td>
        <td>{e.name}</td>
        <td><img src={e.img} alt="" /></td>
<td>{parseInt(e.price)}</td>
        <td>
            <button className="btn btn-primary w-100 mb-1" onClick={()=>increasePrice(index)}>+</button>
        </td>
        <td >
        <i className="fa-solid fa-trash delete" onClick={()=>handleitem(index)}></i>
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
export default  Items