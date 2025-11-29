import "../styles/all.css"
function Card(props){
    return(
        <>
        <div className="cards details_box m-2 ">
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <div className="text">
                <h2>{props.text}</h2>
            </div>

        </div>
        </>

    )
}
export default Card