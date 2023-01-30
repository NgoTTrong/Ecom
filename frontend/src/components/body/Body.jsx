import React, {useState,useEffect} from 'react'
import "./Body.css"
import CardDetail from './detail/CardDetail';
import {
  getProducts,
  getInventory
} from "../../request/api"

const Body = (props) => {
  const [isDetail,setDetail] = useState(false);
  const [currentItem,setCurrentItem] = useState(null);
  const [currentInventory,setCurrentInventory] = useState(null);
  const [amount,setAmount] = useState(1);
  const [pageId,setPageId] = useState(1);
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const pageProduct = async (page) => {
      let rs = await getProducts(page);
      setProducts((products) => ([...products,...rs]))
    }
    pageProduct(pageId)
  },[pageId])
  const getInvetory = async (product) => {
      let inventory = await getInventory(product.productId);
      setCurrentInventory(inventory);
  }
  return (
    <div className="main-page">
        <div className="introduction">
          <div className="info">
              <p className="wall-item-name">Diy Kit</p>
              <p className="description">Mô hình nhà DIY Doll House là mô hình thu bé lại những vật dụng quen thuộc. Nó tạo ra một thế giới mới, đơn giản hơn thế giới thực tế, nhưng ẩn chứa đằng sau đó là sự tinh tế khó cưỡng lại được.</p>
              <button className="shopping-now">Shopping now</button>
          </div>
          <img src={"./Diy.png"} alt="" className="img-detail"/>
        </div>
        <p className="product-space">
          PRODUCTS
        </p>
        <div className="product-container">
          {
            isDetail && currentItem && <CardDetail setDetail={setDetail} currentInventory={currentInventory} currentItem={currentItem} amount={amount} setAmount={setAmount}/>
          }
          <ul className="list-card">
            {
              products.map((product)=>{
                  return (
                    <li className="card" key={product.productId} onClick={() =>{ setCurrentItem(product);setDetail(true);getInvetory(product)}}>
                      <img src={product.url} alt="product" />
                      <p>{product.name}</p>
                      <p>{product.price + " vnđ"}</p>
                    </li>
                  )
              })
            }
          </ul>
        </div>
        <div className="load-product">
          <button className="load-more" onClick={()=>setPageId((pageId)=>(pageId + 1))}>More products</button>
        </div>
    </div>
  )
}

export default Body
