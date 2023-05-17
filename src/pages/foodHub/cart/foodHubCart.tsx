import { useSelector } from "react-redux";
import styles from "./foodHubCart.module.css";
import { cartSelector } from "../foodHubSlice";
import { ReactNode, useRef } from "react";

const FoodHubCart = () => {
  const cartDetails = useSelector(cartSelector);

  const totalAmount = useRef(0);

  const cartItems = (): ReactNode => {
    const items = [];
    totalAmount.current = 0;

    for (let item in cartDetails) {
      totalAmount.current +=
        cartDetails[item].price * cartDetails[item].quantity;

      items.push(
        <tr key={item} className={styles.itemContainer}>
          <td className={styles.itemData}>{cartDetails[item].title}</td>
          <td className={styles.priceData}>{cartDetails[item].price}</td>
          <td className={styles.quantityData}>{cartDetails[item].quantity}</td>
          <td className={styles.totalData}>{cartDetails[item].price * cartDetails[item].quantity}</td>
        </tr>
      );
    }

    if(items.length === 0) items.push(
        <tr>
            <td colSpan={4} id={styles.noItemAdded}>No item added</td>
        </tr>
    )

    return items;
  };

  return (
    <section className={styles.cartSection}>
      <h1 className={styles.cartHeader}>Order Details</h1>
      <table id={styles.itemTable}>
        <thead id={styles.tableHeader}>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col" id={styles.totalHeader}>Total</th>
          </tr>
        </thead>
        <tbody>
            {cartItems()}
        </tbody>
        <tfoot id={styles.cartTableFooter}>
            <tr>
                <th scope="col" colSpan={3} id={styles.grandTotalText}>Grand Total : </th>
                <td id={styles.grandTotalValue}>{totalAmount.current}</td>
            </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default FoodHubCart;
