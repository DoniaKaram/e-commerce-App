import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slices/product-slices'
import cartSlice from './slices/cart-slice'
import favSlice from './slices/favourites-slice'
export const store = configureStore({
    reducer: {
      products:productSlice,
      carts:cartSlice,
     fav:favSlice,
    },
  })
  