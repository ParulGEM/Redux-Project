import React,{useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing=()=> {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();//we need to add data to our store and so we need to dispatch an action i.e setproducts
    const fetchProducts=async ()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch(err=>{
            console.log("Error",err);
        });
        //called the api

        dispatch(setProducts(response.data));//setting setproduct action in dispatch which then return an obj and obj is taken by th reducer

        //(response.data);//received data from the server
    };
    useEffect(()=>{
        fetchProducts();
    },[]);


    console.log("Products",products);
  return (
    <div className='ui grid cotainer'>
        {/* <h1>Product Listing</h1> */}
        <ProductComponent></ProductComponent>
    </div>
  )
};
 
export default ProductListing;