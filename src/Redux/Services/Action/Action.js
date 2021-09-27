export const addProductToCart=(data)=>{
    console.log("action",data)
    return{
        type:"ADD_PRODUCT",
        productData:data
    }
}