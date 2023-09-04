import styles from './cart.module.css';

import { useAppSelector } from "../../redux-store/hooks";
import {
  selectCount,
} from "../../features/counter/counterSlice";

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {

  const count = useAppSelector(selectCount);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!  { count }</h1>
    </div>
  );
}

export default Cart;
