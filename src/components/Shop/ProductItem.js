import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartArrayActions} from '../../components/reduxreducer'
import {useDispatch} from 'react-redux'
const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addTocartHandler = () => {
    console.log('Add to cart');
    const data = {
      title:title,
      price:price,
      id:Math.random(),
      quantity:1
    }
    dispatch(cartArrayActions.addItem(data))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick= {addTocartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
