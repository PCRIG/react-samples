import { nanoid } from "@reduxjs/toolkit";
import styles from "./foodHub.module.css";

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

const FoodHub = () => {
  return (
    <>
      <section className={styles.menuSection}>
        {menuList &&
          menuList.map((data, index) => {
            return (
              <div key={data.title} className={styles.itemContainer}>
                <div>{data.title}</div>
                <div className={styles.menuActionSection}>
                  <div id={styles.menuPrice}>{"₹" + data.price}</div>
                  <input
                    type="number"
                    id={styles.menuPriceInput}
                    value={0}
                    min={0}
                    max={10}
                  />
                  <button
                    id={styles.addButton}
                    className={styles.menuActionButtons}
                  >
                    '+' Add
                  </button>
                  <button
                    id={styles.subButton}
                    className={styles.menuActionButtons}
                  >
                    '-' Sub
                  </button>
                  <button
                    id={styles.clearButton}
                    className={styles.menuActionButtons}
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

export default FoodHub;
