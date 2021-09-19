import './Item.css'
import seachIcon from '../Files/search-icon.png'
import ItemCard from './ItemCard'

function ItemList(){
    
    return(
        <div>
            <div className="container">
                <div className="search_wrap search_wrap_3">
                    <div className="search_box">
                        <input type="text" className="input" placeholder="search..."/>
                            <div className="btn btn_common">
                                <i className="fas fa-search">
                                    <img src={seachIcon} style={{width:"30px"}}/>
                                </i>
                            </div>
                    </div>
                </div>
            </div>
            <ItemCard/>
        </div>
       
    
    );
}
export default ItemList;