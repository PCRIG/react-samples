import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { MenuDetail } from "./menu/foodHubMenu";

interface FoodHubCartModel {
  [key: string]: {
    title: string;
    price: number;
    quantity: number;
  };
}

const initialState = {
  cart: {} as FoodHubCartModel,
  status: "ideal",
  error: null,
};

const foodHubCartSlice = createSlice({
  name: "foodHub",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<MenuDetail>) {
      const item = action.payload;

      if (item.id in state.cart) {
        state.cart[item.id].quantity++;
      } else {
        state.cart = {
          ...state.cart,
          [item.id]: {
            title: item.title,
            price: item.price,
            quantity: 1,
          },
        };
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
        const id = action.payload;

        if(!(id in state.cart)) return;

        if(state.cart[id].quantity === 1) delete state.cart[id];

        else state.cart[id].quantity--;
    },
    deleteItemFromCart(state, action: PayloadAction<string>) {
        const id = action.payload;

        if(!(id in state.cart)) return;

        delete state.cart[id];
    }
  },
});

export const cartSelector = (state: RootState) => state.foodHubCart.cart;

export const { addItemToCart, removeItemFromCart, deleteItemFromCart } = foodHubCartSlice.actions;

export default foodHubCartSlice.reducer;
