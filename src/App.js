import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from '../src/components/UI/Notification';
import { cartAction } from './store/cart-slice';

let initial = true;


function App() {
  const isCartShown = useSelector(state => state.ui.isCartShown)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {

    const sendCartData = async () =>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }))
     const response = await fetch('https://react-http-dfdf1-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
        });

        if (!response.ok) {
          throw new Error('Something cart Data failed!')
          }
          dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          }))
        const responseData = await response.json();

    }
    if (initial) {
      initial = false;
      return;
      
    }
    if (cart.changed) {
       sendCartData().catch((error) =>{
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart failed!',
      }))
    })
    }
   

  },[cart, dispatch])
  useEffect(() => { 
    const getCartData = async () => {
      // dispatch(uiActions.showNotification({
      //   status: 'pending',
      //   title: 'Sending...',
      //   message: 'Sending cart data!',
      // }));
      const response = await fetch('https://react-http-dfdf1-default-rtdb.firebaseio.com/cart.json',{
        method:'GET'
      });
      if (!response.ok) {
        throw new Error('Unable to Fetch Cart Information!')
      }
      // dispatch(uiActions.showNotification({
      //   status: 'success',
      //   title: 'Success!',
      //   message: 'Senr cart data successfully!',
      // }))
      const cart = await response.json();
      dispatch(cartAction.setInitialdata(cart));

    }

    getCartData().catch((error) =>{
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart failed!',
      }))
    });


  },[])
  return (
    <React.Fragment>
  {  notification &&  <Notification 
  status = {notification.status}  
  title = {notification.title} 
  message = {notification.message} />}
    <Layout>
      { isCartShown && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
