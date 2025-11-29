import Swal from 'sweetalert2';
import { useState } from "react";
import "../styles/all.css"
import "../styles/structure.css"

function Structure(props){
    const [data,setdata]=useState([]);
    const [love,setlove]=useState([]);
    return(
        
        <>
        <div className="cards">
               
                     <div className="card">
                <div className="image">
                <img src={props.img} className="w-50" alt="" />
            </div>
             <div class="text">
                                <h4>{props.name_product}</h4>
                                <h5>{props.text_product}</h5>
                                <p>
                                    {props.title_product}
                                </p>
                                <h6>EGP {props.price} <span><del>EGP {props.delete}</del></span></h6>
            </div>
             <div class="icon">
                                <i class="fa-solid fa-star" ></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
            </div>
            <hr />
            <div className="side">
       <button className="btn btn-primary">
  <i 
    className="fa-solid fa-cart-shopping shop"
    onClick={() => {
      const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

      const newItem = {
        img: props.img,
        name: props.name_product,
        price: props.price
      };

      oldCart.push(newItem);

      localStorage.setItem("cart", JSON.stringify(oldCart));

      setdata(oldCart);
   Swal.fire({
        icon: 'success',
        title: 'Added to Card',
        text: `${ props.name_product} has been added to your favorites.`,
        footer: ' Thank you!',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top',
      });
    }}
  ></i>
</button>


                <button class="btn btn-danger"><i class="fa-regular fa-heart heart"  onClick={() => {
      const loveCart = JSON.parse(localStorage.getItem("love")) || [];

      const loveItem = {
        img: props.img,
        name: props.name_product,
        price: props.price
      };

      loveCart.push(loveItem);

      localStorage.setItem("love", JSON.stringify(loveCart));

      setlove(loveCart);
   Swal.fire({
        icon: 'success',
        title: 'Added to Favorites!',
        text: `${ props.name_product} has been added to your favorites.`,
        footer: ' Thank you!',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top',
      });
    }}></i></button>
                <button className="btn btn-success hidden"><i class="fa-solid fa-share"></i></button>
                
            </div>
            </div>

                
          
           
           
        </div>
        </>
    )
}
export default  Structure