import { nanoid } from "@reduxjs/toolkit";
import styles from "./foodHubMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  cartSelector,
  deleteItemFromCart,
  removeItemFromCart,
} from "../foodHubSlice";

export interface MenuDetail {
  id: string;
  title: string;
  price: number;
}

const menuList: MenuDetail[] = [
  {
    id: nanoid(),
    title: "Mutton Biriyani",
    price: 250,
  },
  {
    id: nanoid(),
    title: "Chicken Biriyani",
    price: 200,
  },
];

const FoodHubMenu = () => {
  const cartDetail = useSelector(cartSelector);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.menuSection}>
        {menuList &&
          menuList.map((data) => {
            return (
              <div key={data.title} className={styles.itemContainer}>
                <h2>{data.title}</h2>

                <div className={styles.menuActionSection}>
                  <p id={styles.menuPrice}>{"₹" + data.price}</p>
                  <input
                    type="number"
                    id={styles.menuPriceInput}
                    value={
                      data.id in cartDetail ? cartDetail[data.id].quantity : 0
                    }
                    min={0}
                    max={10}
                    readOnly={true}
                  />
                  <button
                    id={styles.addButton}
                    className={styles.menuActionButtons}
                    onClick={(_) => dispatch(addItemToCart(data))}
                  >
                    '+' Add
                  </button>
                  <button
                    id={styles.subButton}
                    className={styles.menuActionButtons}
                    onClick={(_) => dispatch(removeItemFromCart(data.id))}
                  >
                    '-' Sub
                  </button>
                  <button
                    id={styles.clearButton}
                    className={styles.menuActionButtons}
                    onClick={(_) => dispatch(deleteItemFromCart(data.id))}
                  >
                    Clear
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default FoodHubMenu;
