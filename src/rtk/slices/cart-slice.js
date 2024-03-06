import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
initialState:[],
  name: 'cartSlice',
  reducers: {
    addToCart:(state,action)=>{
      const findProduct=state.find((product)=>product.id==action.payload.id);
      if(findProduct){
        findProduct.qty+=1;

      }
      else
      {

        const productClone={...action.payload,qty:1};
        state.push(productClone);
        
      }
        
    },
    deleteFromCart:(state,action)=>{
      return state.filter((product)=>product.id!=action.payload.id);
    },
   

  }
 
  }
  ,
)

// Action creators are generated for each case reducer function
export const { addToCart,deleteFromCart,clear} = cartSlice.actions;

export default cartSlice.reducer;