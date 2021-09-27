import ItemList from "../../Components/ItemList/ItemList";
import { connect } from "react-redux";
import { addProductToCart } from "../Services/Action/Action"

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
    addProductHandler:productData=>dispatch(addProductToCart(productData))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemList)