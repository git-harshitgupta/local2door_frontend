import React, { Component } from 'react'
import axios from 'axios'
import ApiService from '../Service/ApiService'
import { Link } from 'react-router-dom'

class UpdateTable extends Component {
        
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            message:null,
            count:null
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        
    }

    componentDidMount() {
        ApiService.loadProductList().then(resp=>{
            this.setState({product: resp.data})
            
            console.log(this.state.product);
        })
    }

    deleteProduct(productId) {
        axios.delete("http://localhost:8080/local2door/shopkeeper/deleteproduct",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jswtoken"),
                "ProductId":productId
            }
        }).then((resp)=>{
            this.setState({product: this.state.product.filter(function(product) { 
                return  product.productId!== productId 
            })});
        })
        
    }

     editProduct(id) {
         localStorage.setItem("productId", id);
         
     }

    // addUser() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user');
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.product.map(
                        product =>
                                    <tr className="hidden" key={product.productId}>
                                        <td>{product.productName}</td>
                                        <td>{product.productPrice}</td>
                                        <td>{product.productQuantity}</td>
                                        <td>{product.productUnit}</td>
                                        
                                       
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteProduct(product.productId)}> Delete</button>
                                            <Link to="/shopkeeper/updateproduct/prouductitem" style={{textDecoration:"none"}}>
                                            <button className="btn btn-success" onClick={() => this.editProduct(product.productId)} style={{marginLeft: '20px'}}> Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <Link to="/shopkeepermenu" style={{textDecoration:"none"}}>
                <button style={{marginLeft:"43%"}} className="text-center btn btn-warning"> Home</button>
                </Link>
            </div>
        );
    }

}

export default UpdateTable;