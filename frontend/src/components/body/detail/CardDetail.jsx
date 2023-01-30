import React from 'react'
import "./CartDetail.css"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {AiOutlineMinusSquare} from "react-icons/ai"
import {BsBackspace} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

import {
    addToCart
  } from "../../../request/api"

const CardDetail = (props) => {
    const navigate = useNavigate();
    const {
        setDetail,
        currentItem,
        amount,
        setAmount,
        currentInventory
    } = props;
    const addCart = async () => {
        await addToCart(currentItem.productId,currentInventory.inventoryId, amount)
        navigate("/cart")
    }
  return (
    <div className="card-detail">
        <div className="wrapper">
            <BsBackspace className="back-home" onClick={()=>{setDetail(false);setAmount(1)}}/>
            <img src={currentItem.url} alt="" />
            <div className="card-info">
                <p>{`Tên sản phẩm: ${currentItem.name}`}</p>
                <p>{`Brand: ${currentItem.brand}`}</p>
                <p>{`Số lượng còn lại: ${currentInventory?.quantity}`}</p>
                <p>{`Mô tả: ${currentItem.description}`}</p>
                <p>{`Ngày ra mắt: ${currentItem.realease_date}`}</p>
                <p>Chi tiết sản phẩm</p>
                <ul>
                    {
                        currentItem.specs.map((e)=>{
                            return (
                                <li>
                                    {e.key} : {e.value}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="pick-amount">
                    <AiOutlineMinusSquare className="minus" onClick={()=>{
                        setAmount((amount)=>(amount - 1< 0?0:amount - 1))
                    }}/>
                    {amount}
                    <AiOutlinePlusSquare className="plus" onClick={()=>setAmount((amount) => (amount + 1))}/>
                </div>
                <div className="shopping">
                    <button className="add-to-cart" onClick={addCart}>Add to cart</button>
                    <button className="buy-now">Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetail
