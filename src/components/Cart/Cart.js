import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => 
        <CartItem  item={{ 
          id:item.id,
        key: item.id, 
        title: item.title, 
        total:item.totalPrice, 
        quantity: item.amount, 
        price: item.price }} 
        />)}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;