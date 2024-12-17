import './simple-card.css'
import img from '../assets/perfume.jpg';
import { AiFillLike } from "react-icons/ai";
import { useState } from 'react';
import { FaStar ,FaStarHalf } from "react-icons/fa";

interface Props{
    name : string
    price : string 
    img : any
}

const SimpleCard = () => {
    const [liked , setLiked] = useState(false)
  return (
    <div className='parent'>
        <div className="container">
            <div className="image-div">
                <img src={img} alt="" />
            </div>
            <div className="details-div">
                <p>name : Dolce & Gabbana</p>
                <p>price : 300$</p>
                <p>Rate : <FaStar/><FaStar/><FaStar/><FaStar/> <FaStarHalf/></p>
                <AiFillLike color={liked ? "blue" : "black"} onClick={()=>{
                    setLiked(!liked)
                }}/>
            </div>
        </div>
    </div>
  )
}

export default SimpleCard
