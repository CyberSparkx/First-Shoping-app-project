import {Link,useParams} from 'react-router-dom' 
import React , {useEffect,useState} from 'react'
import axios from '../utils/axios'
import Loading from './Loading';


  const Details = () => {
    const [product, setproduct] = useState(null); 
    const {id} = useParams();
    const getsingleproduct = async ()=> {
    try {
    const { data } = await axios.get(`/products/${id}`);
    setproduct(data);
    } catch (error) {
    console.log(error);
    }
    };
    useEffect(() => {
    getsingleproduct();
    }, []);
    
    console.log(product);
 
  return product ?(
    <div className='w-[80%] h-screen flex  m-auto items-center'>
        <img className='w-[18vw] h-[50vh]' src={`${product.image}`} />
        <div className=' h-[80vh] w-full p-20  mt-5 justify-center flex flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>{product.title}</h1>
            <p className='font-semibold text-sm text-zinc-500'>{product.category}</p>
            <h2 className='text-2xl font-semibold text-lime-500'>${product.price}</h2>
            <p className='text-xl font-basic'>{product.description}</p>
            <div className='flex gap-4'>
            <Link className='py-3 px-6 border rounded border-blue-500  bg-blue-500 font-semibold text-zinc-200'>Buy</Link>
            <Link className='py-3 px-6 border rounded border-orange-500  bg-orange-500 font-semibold text-zinc-200'>Add To Cart</Link>
            </div>
        </div>
    </div>
  ):(<Loading/>)
}
export default Details