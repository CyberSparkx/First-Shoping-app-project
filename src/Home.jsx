import React, {useContext, useEffect,useState} from 'react'
import Nav from './components/Nav'
import { ProductContext } from './utils/Context'
import Loading from './components/Loading'
import {Link, useLocation} from 'react-router-dom'
import axios from './utils/axios';

const Home = () => {
  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  let [filterProducts, setFilterProducts] =useState(null);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`./products/category/${category}`);
      setFilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

   useEffect (() => {
    if(!filterProducts || category=="undefined") setFilterProducts(products);
    if(category != "undefined")getProductsByCategory();
  },[category,products])

   


  return products ? (
    <div className="flex h-screen w-full">
        <Nav/>

        <div className=" w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

            {filterProducts && filterProducts.map((product) =>
        <Link key={product.id} to={`/details/${product.id}`} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[35vh] flex-col flex justify-center items-center">
        <div className="hover:scale-110 mb-3 w-[80%] h-[80%]   bg-contain bg-no-repeat bg-center" style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}></div>
        <h1 className='font-semibold text-basic hover:text-blue-300'>{product.title}</h1>
      </Link>
    )}
    </div>
    </div >) : (
        <Loading/>
    );
}
export default Home