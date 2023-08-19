import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux/es/hooks/useDispatch';
import { cartAction } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cartDispatch = useDispatch();

  const addToCartHandler = () =>{
    console.log(props.id, title, price, description );
    cartDispatch(cartAction.addItemCart({
      id: id, 
      amount:1,
      price:props.price, 
      title:title, 
      description:description,
      totalPrice:price}));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
