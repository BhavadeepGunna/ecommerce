import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import summaryApi from '../common'
import displayINRCurrency from '../helper/displaycurrenct'
import Categorywiseproduct from '../components/Categorywiseproduct'

const Produtdetails = () => {

  const [data,setdata]=useState({
    productname: "",
    brandname: "",
    category: "",
    productimage: [],
    description: "",
    price: "",
    sellingprice: "",
  })

  const params=useParams()
  const [loading,setloading] =useState(true)
  const productimagelist= new Array(4).fill(null)
  const [activeimage,setactiveimage]=useState("")





  const fetchproductdetail=async()=>{
    setloading(true)
    const response=await fetch(summaryApi.productdetails.url,{
      method:summaryApi.productdetails.method,
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        productid:params?.id
      })
    })
    const dataresponse=await response.json()
    setloading(false)
    setdata(dataresponse.data)
    setactiveimage(dataresponse?.data?.productimage[0])
    console.log(data)
  }

  useEffect(()=>{
    fetchproductdetail()

  },[])

  const handlehover=(imgurl)=>{
    setactiveimage(imgurl)

  }


  return (
    <div className='container mx-auto p-4'>
        <div className='bg-white min-h-[200px] flex flex-col lg:flex-row gap-4'>
          {/*product image*/}
          <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
            <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-300'>
              <img className='h-full w-full object-scale-down mix-blend-multiply'src={activeimage}/>
            </div>
            <div className='h-full'>
              {
                loading?(
                  <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none'>
                    {
                  productimagelist.map((el,index)=>{
                    return(
                      <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={'loading'+index}>
                      </div>
                    )  
                  })
                }
                  </div>
                ):(
                  <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                    {
                  data?.productimage.map((imgurl,index)=>{
                    console.log(index)
                    console.log(imgurl)
                    return(
                      <div className='h-20 w-20 bg-slate-200 rounded' key={imgurl}>
                        <img src={imgurl} className='w-full h-full object-scale-down mix-blend-multiply' 
                        onMouseEnter={()=>handlehover(imgurl)}
                        onClick={()=>handlehover(imgurl)}/>
                      </div>
                    )  
                  })
                }
                  </div>

                )
              }
            </div>

          </div>
          {/*product details*/}
          {
            loading?(
              <div className='grid gap-1 w-full'>
              <p className='bg-slate-200 animate-pulse  h-6 lg:h-8 w-full rounded-full inline-block'></p>
              <h2 className='text-2xl lg:text-4xl font-medium h-6 lg:h-8  bg-slate-200 animate-pulse w-full'></h2>
              <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8  w-full'></p>

              <div className='text-red-600 bg-slate-200 h-6 lg:h-8  animate-pulse flex items-center gap-1 w-full'>
  
              </div>

              <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8  animate-pulse w-full'>
                <p className='text-red-600 bg-slate-200 w-full'></p>
                <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
              </div>

              <div className='flex items-center gap-3 my-2 w-full'>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
                <button className='h-6 lg:h-8  bg-slate-200 rounded animate-pulse w-full'></button>
              </div>

              <div className='w-full'>
                <p className='text-slate-600 font-medium my-1 h-6 lg:h-8   bg-slate-200 rounded animate-pulse w-full'></p>
                <p className=' bg-slate-200 rounded animate-pulse h-10 lg:h-12  w-full'></p>
              </div>
            </div>
              
            ):(
              <div className='flex flex-col gap-1'>
            <p className=' bg-red-400 text-red-800 w-fit px-2  rounded-full'>{data?.brandname}</p>
            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productname}</h2>
            <p className='capitalize text-slate-400 '>{data?.category}</p>
            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-red-600'>
                {displayINRCurrency(data?.sellingprice)}
              </p>
              <p className='text-slate-400 line-through'>
              {displayINRCurrency(data?.price)} 
              </p>
               
            </div>
            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-red-500 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white'> Buy</button>
              <button className='border-2 border-red-500 rounded px-3 py-1 min-w-[120px]  text-white bg-red-600 font-medium hover:bg-white hover:text-red-600'> Add to Cart</button>
            </div>

            <div>
              <p className='text-slate-600 font-medium my-1'>Description</p>
              <p className=''>{data?.description}</p>
            </div>

          </div>

            )
          }
          

        </div>

        {
          
            data.category && (
              <Categorywiseproduct category={data?.category} heading={"Recommended Product"}/>
            )
        }
      
    </div>
  )
}

export default Produtdetails
