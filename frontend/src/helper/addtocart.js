import summaryApi from "../common"
import { toast } from 'react-toastify'

const addtocart=async (e,id)=>{
    e?.stopPropagation()
    e?.preventDefault()

    const response=await fetch(summaryApi.addtocart.url,{
        method:summaryApi.addtocart.method,
        credentials:'include',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            productid:id
        })
    })
    const responsedata=await response.json()
    if(responsedata.success){
        toast.success(responsedata.message)
    }else{
        toast.error(responsedata.message)
    }
    return responsedata
}

export default addtocart