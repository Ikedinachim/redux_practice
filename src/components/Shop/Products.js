import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
  
  const DUMMY_ITEMS = [
   {
    id:'a1',
    title:'Test',
    price:6,
    description:'This is a first product - amazing!',},
    {
      id:'b1',
      title:'Test2   ',
      price:63.0,
      description:'This is a first product - amazing!',}
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      
    {  DUMMY_ITEMS.map(item => 
        <ProductItem
          key = {item.id}
          id = {item.id}
          title = {item.title}
          price = {item.price}
          description = {item.description}
       />

      )}  ;
       
      </ul>
      
    </section>
  );
};

export default Products;
