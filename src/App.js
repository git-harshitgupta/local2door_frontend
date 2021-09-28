import './App.css';
import Login from './Components/Login/Login'
import {BrowserRouter,Route} from 'react-router-dom'
import CustomerOrShopkeeper from './Components/SignUp/CustomerOrShopkeeper';

import MapBox from './Components/Maps/MapBox';
import ShopkeeperHome from './Components/Shopkeeper/ShopkeeperHome';
import Home from './Components/Customer/Home/Home'
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import UpdateProductItem from './Components/UpdateProduct/UpdateProductItem';
import ShopItem from './Components/ItemList/ShopItem';
import { CartProvider } from './Components/Context/CartContext';
import { FormProvider } from './Components/Context/SignUpFormContext';
import Cart from './Components/Cart/Cart';
import { CheckOut } from './Components/Checkout/CheckOut';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import OrderProductListController from './Components/OrderDetails/OrderProductListController';
import FormForShopkeeper from './Components/SignUp/FormForShopkeeper'
import { Error } from './Components/ErrorPage/Error';
import { CustomerHome } from './Components/Customer/Home/CustomerHome';
import { ItemListController } from './Components/ItemList/ItemListController';
import { ShopItemController } from './Components/ItemList/ShopItemController';
import { OrderDetailsController } from './Components/OrderDetails/OrderDetailsController';
import { ShopkeeperOrderController } from './Components/ShopkeeperOrder/ShopkeeperOrderController';
import { ShopkeeperOrderHistroyController } from './Components/ShopkeeperOrder/ShopkeeperOrderHistroyController';
import { OrderProductDetailsController } from './Components/ShopkeeperOrder/OrderProductDetailsController';
import ChangeYourDetails from './Components/Setting/ChangeYourDetails'
import ChangePhoneNumber from './Components/Setting/ChangePhoneNumber'
import Setting from './Components/Setting/Setting';
import ChangePassword from './Components/Setting/ChangePassword'
import SettingMapBox from './Components/Maps/SettingMapBox';
import { ShopkeeperSetting } from './Components/Setting/ShopkeeperSetting';
import { ShopkeeperChangeDetails } from './Components/Setting/ShopkeeperChangeDetails';
import ShopkeeperChangePassword from './Components/Setting/ShopkeeperChangePassword';
import { ToastContainer } from 'react-toastify';
import FromForCustomer from './Components/SignUp/FormForCustomer';
function App(){
  
  return (
    <FormProvider>
    <ToastContainer />
    <CartProvider>
    <BrowserRouter>
      <div>
       
        <Route exact path="/">
        <Login/>
        </Route>
        <Route exact path='/signup'>
          <CustomerOrShopkeeper/>
        </Route>
       
        <Route path='/signup/customer'>
          <FromForCustomer/>
        </Route>
      
        <Route path='/signup/shopkeeper'>
          <FormForShopkeeper/>
        </Route>
        <Route path='/signup/location'>
          <MapBox/>
        </Route>
        <Route path='/shopkeepermenu'>
          <ShopkeeperHome/>
        </Route>
        <Route path='/shopkeeper/addproduct'>
          <AddProduct/>
        </Route>
        <Route exact path='/shopkeeper/updateproduct'>
          <UpdateProduct/>
        </Route>
        <Route path='/shopkeeper/updateproduct/prouductitem'>
          <UpdateProductItem/>
        </Route>
        <Route exact path="/customermenu">
          <CustomerHome/>
        </Route>
        <Route path="/customer/shopproducts">
          <ShopItemController/> 
        </Route>
        <Route path="/customer/cart">
          <Cart/>
        </Route>
        <Route path="/customer/checkout">
          <CheckOut/>
        </Route>
        <Route exact path="/customer/orderdetails">
          <OrderDetailsController/>
        </Route>
        <Route exact path="/customer/orderdetails/info">
          <OrderProductListController/>
        </Route>
        <Route path="/shopkeeper/orders">
          <ShopkeeperOrderController/>
        </Route>
        <Route path="/shopkeeper/orderhistory">
          <ShopkeeperOrderHistroyController/>
        </Route>
        <Route path="/shopkeeper/orderdetails/info">
          <OrderProductDetailsController/>
        </Route>
        <Route exact path="/customer/setting">
          <Setting/>
        </Route>
        <Route path="/customer/setting/details">
          <ChangeYourDetails/>
        </Route>
        <Route path="/customer/setting/password">
          <ChangePassword/>
        </Route><Route path="/customer/setting/number">
          <ChangePhoneNumber/>
        </Route>
       <Route path="/customer/setting/location">
          <SettingMapBox/>
        </Route>
        <Route exact path="/shopkeeper/setting">
          <ShopkeeperSetting/>
        </Route>
        <Route path="/shopkeeper/setting/details">
          <ShopkeeperChangeDetails/>
        </Route>
        <Route path="/shopkeeper/setting/password">
          <ShopkeeperChangePassword/>
        </Route>
        <Route path="/error">
          <Error/>
        </Route>
      </div>  
    </BrowserRouter>
    </CartProvider>
    </FormProvider>
    );
  } 


  
export default App;
