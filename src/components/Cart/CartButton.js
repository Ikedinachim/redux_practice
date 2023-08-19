import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const amount = useSelector(state => state.cart.totalAmount)
  const dispatchCounter = useDispatch()

  const toggleCartHandler = () => {
    dispatchCounter(uiActions.toggleCart());

  }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
