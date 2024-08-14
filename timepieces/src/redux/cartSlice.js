import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        watch:{},
        watches:[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.cart.push({...action.payload,quantity:1})
        },
        setWatch:(state,action)=>{
            state.watch=action.payload
        },
        setWatches:(state,action)=>{
            state.watches=action.payload
        },
        setCart:(state,action)=>{
            state.cart=action.payload
        },
        increament:(state,action)=>{
            state.cart=state.cart.map((item)=>(
                action.payload.id===item.id?({...item,quantity:item.quantity+1}):item
            ))
        },
        decreament:(state,action)=>{
            state.cart=state.cart.map((item)=>{
                if(action.payload.id===item.id){
                    if(item.quantity==0)
                        return item
                    else
                        return ({...item,quantity:item.quantity-1})
                }
                else
                    return item
            })
        },
        remove:(state,action)=>{
            state.cart=state.cart.filter((item)=>(
                action.payload.id!==item.id
            ))
        }
    }
})

export const {addCart,setWatch,increament,decreament,remove,setWatches,setCart}=cartSlice.actions
export default cartSlice.reducer