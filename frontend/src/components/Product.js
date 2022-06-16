import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Product = (props) => {
  let [data,setData] = useState([]);
  const getProduct = () =>{
    axios.get('http://localhost:3000/view')
    .then(function (response) {
      // handle success
      setData(response.data)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  useEffect(()=>{
    getProduct();
  },[])
  console.log(data)
  if(props.name != "Admin")
    {
      return (
    
        <>
        <h1>Hello</h1> {data && data.product && data.product.map((e,index)=>{
          
          return(
            <h2>{e.name}</h2>
          )
        })}
        </>
      );
    }
    else
    {
      return (
    
        <>
        <h1>Hello {props.name}</h1> 
        </>
      )
    }
  
};
export default Product;
