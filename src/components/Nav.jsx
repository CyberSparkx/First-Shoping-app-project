import React, {useContext}from 'react';
import { Link} from 'react-router-dom';
import { ProductContext } from '../utils/Context'


const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category= 
  products && products.reduce((acc, cv) => [...acc, cv.category], [] );

  distinct_category =[...new Set(distinct_category)];


  return (
    <nav className='w-[15vw]  h-[100vh] bg-zinc-500 flex flex-col items-center pt-6 text-basc text-zinc-300 font-bold gap-4 apselute'>

    <Link  to={`/`}  className='py-3 hover:text-zinc-100 duration-300 px-16  border rounded hover:bg-green-500 border-green-500 text-green-400'>
      <div className=' text-basic ' href="/category/electronics">Home</div>
    </Link>
      <a className='py-3 px-6 border rounded border-blue-300 text-blue-400' href="/create">Add new product</a>
      <hr className='w-[13vw] my-4 '/>
      <h1 className='justify-start text-2xl w-[80%]'>Category Filter</h1>
      
       
       
        {distinct_category.map((c,i) => (
          <div key={i} className='mt-4 justify-start w-[70%]'>
          <Link  to={`/?category=${c}`} className='hover:text-zinc-900 ' href="/category/electronics">{c}</Link>
          </div>
        ))

        }
     
    </nav>
  )
}

export default Nav