import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { cartAction } from '../../store/cart-slice';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;
  const dispatch =useDispatch();
  const removeHandler = () =>{
    dispatch(cartAction.removeItemFromCart(props.item))
  }
  const addHandler = () => {
    dispatch(cartAction.addItemCart({
      id: props.item.id, 
      amount:props.item.quantity, 
      price:props.item.price, 
      title:props.item.title, 
      description:props.item.description, 
      totalPrice:props.item.total}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
