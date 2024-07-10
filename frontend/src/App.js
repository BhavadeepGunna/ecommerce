
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summaryApi from './common';
import { useEffect, useState } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setuserdetails } from './store/userslice';

function App() {
  const dispatch=useDispatch()
  const [cartproductcount,setcartproductcount] = useState(0)





  const fetchuserdetails=async()=>{
    const dataresponse=await fetch(summaryApi.current_user.url,{
      method:summaryApi.current_user.method,
      credentials:'include'
    })
    const dataApi=await dataresponse.json()

    if(dataApi.success){
      dispatch(setuserdetails(dataApi.data))

    }
    
  }

  const fetchuseraddtocart = async()=>{
    const dataResponse = await fetch(summaryApi.countcart.url,{
      method : summaryApi.countcart.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
    console.log(dataApi)

    setcartproductcount(dataApi?.data?.count)
  }

  useEffect(()=>{
    fetchuserdetails()
    fetchuseraddtocart()
  },[])


  return (
    <>
    <Context.Provider value={{
      fetchuserdetails,
      cartproductcount,
      fetchuseraddtocart
    }}>
    <ToastContainer
    position='top-center'
    />
    
    <Header/>
    <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet/>
    </main>

    
    <Footer/>
    </Context.Provider>
    </>
  );
}

export default App;
