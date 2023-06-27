import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';
//axios for api call
//use params to get the parameter value
const ProductDetail=()=> {
    const product=useSelector((state)=>state.product);
    const { image, title, price, category, description } = product;
    const {ProductId}=useParams();//getting param using useParams
    const dispatch=useDispatch();
    //console.log(ProductId)
    const fetchProductDetail=async ()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${ProductId}`).catch(err=>{
            console.log("Error",err);
        });
        dispatch(selectedProduct(response.data));
    }
    
    useEffect(()=>{
        if(ProductId&&ProductId!=="") fetchProductDetail(ProductId);
        return ()=>{
            dispatch(removeSelectedProduct());
        }

    },[ProductId]);

  return (
    //<h1 style={{marginTop:"100px"}}>Product Detail</h1>
    <div className="ui grid container" >
      {Object.keys(product).length === 0 ? (
        <div className="ui two column stackable center aligned grid"  style={{marginTop:"100px"}}>...Loading</div>
      ) : (
        <div className="ui placeholder segment" style={{marginTop:"70px"}}>
          <div className="ui two column stackable center aligned grid" >
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" style={{height:"300px", width:"300px"}} src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}  
    </div>
  )
};

export default ProductDetail