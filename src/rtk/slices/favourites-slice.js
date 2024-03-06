import { createSlice } from '@reduxjs/toolkit'



export const favSlice = createSlice({
initialState:[],
  name: 'favSlice',
  reducers: {
    addToFav:(state,action)=>{
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
    deleteFromFav:(state,action)=>{
      return state.filter((product)=>product.id!=action.payload.id);
    },
    

  }
 
  }
  ,
)

// Action creators are generated for each case reducer function
export const {addToFav,deleteFromFav} = favSlice.actions;

export default favSlice.reducer;