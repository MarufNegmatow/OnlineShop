import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteALLProductsInCart, DeleteProductInCard, ForDecrementProduct, ForIncreaserProduct, getCart } from '../api/forProductsApi';
import {   Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { Button, Input,  } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCart())
  },[])

  const {cart} =useSelector((state)=>state.forProductSlice)
  console.log(cart)

  return (
    <div>
    
        <div className='py-[50px] lg:w-[80%] m-auto'>
          <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart[0]?.productsInCart?.map((el)=>{
                  return <TableRow key={el.product.id}>
                    <TableCell> <div className='flex items-center text-[18px] gap-2'><div><img className='w-[50px] ' src={import.meta.env.VITE_APP_FILE_URL+el.product.image} alt="" /></div>{el.product.productName}</div></TableCell>
                    <TableCell>$ {el.product.price}</TableCell>
                    
                    <TableCell >
                       <div className='flex items-center gap-[10px]'>
                        <Button onClick={()=>dispatch(ForIncreaserProduct(el.id))}><AddIcon fontSize='inherit'/></Button>
                        <p className='font-bold text-[18px]'>{el.quantity}</p>
                        <Button danger ghost  onClick={()=>dispatch(ForDecrementProduct(el.id))}><RemoveIcon fontSize='inherit'/></Button>
                       </div>
                    </TableCell>
                    <TableCell>$ {el.product.price * el.quantity}</TableCell>
                    <TableCell><Button type='link' onClick={()=>dispatch(DeleteProductInCard(el.id))}><CloseIcon sx={{color:"red"}}/></Button></TableCell>
                  </TableRow>
                })}
              </TableBody>
          </Table>
          <div className='py-[30px] flex justify-between '>
            <Button className='p-[25px_40px] border-[3px] border-[#00000080]'>Return To Shop</Button>
            <div className='flex gap-2'>
              <Button className='p-[25px_40px] border-[3px]  border-[#00000080]' >Update Cart</Button>
              <Button onClick={()=>dispatch(DeleteALLProductsInCart())} type='default' color='' className='p-[25px_40px] border-[3px] ' danger ghost>Remove All</Button>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-start w-[80%] m-auto py-[20px] lg:flex-row sm:flex-col sm:gap-[20px] '>
          <div className='flex items-center gap-[20px]'>
            <TextField placeholder='Coupon Code'/>
            <Button className='p-[25px_40px] border-[3px] ' danger ghost>Apply</Button>
          </div>
          <div className=' border-[1.5px]  border-[black] w-[468px] h-[296px] rounded-[4px]'>
            <h2 className='text-[24px] pt-[20px] pl-[30px]'>Cart Total</h2>
            <p className='text-[18px] flex justify-around gap-[212px] mt-[20px]'>Subtotal : <span>${cart[0]?.productsInCart?.reduce((acc,cur)=>acc+cur.product.price*cur.product.quantity,0)}</span></p>
            <p className='text-[18px] flex justify-around gap-[225px] mt-[20px]'>Shopping : <span>Free</span></p>
            <hr  className='w-[410px] m-auto mt-[20px] border-[1px]'/>
            <h2 className='font-bold text-[24px] flex justify-around gap-[210px] mt-[20px]'>Total: <span>${cart[0]?.productsInCart?.reduce((acc,cur)=>acc+cur.product.price*cur.quantity,0)}</span></h2>
            <div className='text-center py-[10px]'>
              <Button className='bg-[#DB4444] p-[20px_40px] text-white'>Procees to checkout</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart


