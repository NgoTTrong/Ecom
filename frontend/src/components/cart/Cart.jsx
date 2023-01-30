import React,{useState,useEffect} from 'react'
import "./Cart.css"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {AiOutlineMinusSquare} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md"
import {
  getCart,
  getProduct,
  removeToCart
} from "../../request/api"

const Cart = () => {
  const [cart,setCart] = useState(null)
  const [allProduct, setAllpProduct] = useState([])
  useEffect(()=>{
    const getCurCart = async (cartId) => {
      let rs = await getCart(cartId)
      setCart(rs)
      let products = []
      for (let i = 0; i < rs.products.length;i++){
        let prod = await getProduct(rs.products[i].productId)
        prod.quantity = rs.products[i].quantity
        prod.inventoryId = rs.products[i].inventoryId
        products.push(prod);
      }
      setAllpProduct(products);
    }
    getCurCart("c1");
  },[])
  console.log(cart)
  console.log(allProduct)
  const removeCart = async (productId,inventoryId,quantity)=>{
      let rs = await removeToCart(productId,inventoryId,quantity)
      console.log(rs)
      window.location.reload();
  }
  return (
    <div className="cart-container">
      <ul className="all-items-cart">
        <p>All products are bought</p>
        {
          allProduct.map((product)=>{
            return (
              <li>
                  <input type="checkbox" className="check-item"/>
                  <img src={product.url} alt="" className="product-img"/>
                  <p className="product-name">{product.name}</p>
                  <p clasName="price">{product.price}</p>
                  <div className="quantity">
                      <AiOutlineMinusSquare className="minus"/>
                      {product.quantity}
                      <AiOutlinePlusSquare className="plus"/>
                  </div>
                  <p className="total-price">{product.quantity*product.price}</p>
                  <MdDeleteOutline className="remove-item" onClick={() => {removeCart(product.productId,product.inventoryId,product.quantity)}}/>
              </li>
            )
          })
        }
      </ul>
      <div className="payment">
        Your bill
      </div>
    </div>
  )
}

export default Cart
