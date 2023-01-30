import axios from 'axios';

let url = "http://localhost:3051"

export const getProducts =  async (page) => {
    let rs = await axios.get(url+`/products/get/page_${page}`);
    return rs.data.message;
}
export const getProduct =  async (productId) => {
    let rs = await axios.get(url+`/products/${productId}`);
    return rs.data.message;
}
export const getInventory =  async (productId) => {
    let rs = await axios.get(url+`/inventories/${"i"+productId.split("")[1]}`);
    return rs.data.message;
}
export const getCart =  async (cartId) => {
    let rs = await axios.get(url+`/carts/${cartId}`);
    return rs.data.message;
}
export const addToCart = async (productId,inventoryId,quantity) => {
    let content = {
        "product": {
            "productId" : productId,
            "userId" : "u1",
            "cartId" : "c1",
            "inventoryId":inventoryId,
            "quantity": quantity
        }
    }
    let rs = await axios.post(url+`/carts`,content);
    return rs.data.message;
}
export const removeToCart = async (productId,inventoryId,quantity)=>{
    let content = {
        "product": {
            "productId" : productId,
            "userId" : "u1",
            "cartId" : "c1",
            "inventory":inventoryId,
            "quantity": quantity
        }
    }
    let rs = await axios.post(url+`/carts/remove`,content);
    return rs.data.message;
}