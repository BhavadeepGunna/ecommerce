const backenddomain="http://localhost:8080"

const summaryApi={
    signup:{
        url:`${backenddomain}/api/signup`,
        method:"post"
    },
    signin:{
        url:`${backenddomain}/api/signin`,
        method:"post"
    },
    current_user:{
        url:`${backenddomain}/api/user-details`,
        method:"get"
    },
    logout_user:{
        url:`${backenddomain}/api/user-logout`,
        method:"get"
    },all_users:{
        url:`${backenddomain}/api/all-users`,
        method:"get"
    },userupdate:{
        url:`${backenddomain}/api/update-user`,
        method:'post'
    },uploadproduct:{
        url:`${backenddomain}/api/upload-product`,
        method:'post'
    },allproduct:{
        url:`${backenddomain}/api/get-product`,
        method:'get'
    },updateproduct:{
        url:`${backenddomain}/api/update-product`,
        method:'post'
    },categoryproduct:{
        url:`${backenddomain}/api/get-categoryproduct`,
        method:'get'
    },categorywiseproduct:{
        url:`${backenddomain}/api/category-wise`,
        method:'post'
    },productdetails:{
        url:`${backenddomain}/api/product-details`,
        method:'post'
    },addtocart:{
        url:`${backenddomain}/api/addto-cart`,
        method:'post'
    },countcart:{
        url:`${backenddomain}/api/countcart`,
        method:'get'
    },cartproductview:{
        url:`${backenddomain}/api/cart-product`,
        method:'post'
    },updatecartproduct:{
        url:`${backenddomain}/api/updatecart`,
        method:'post'
    },deletecartproduct:{
        url:`${backenddomain}/api/deletecart`,
        method:'post'
    },search:{
        url:`${backenddomain}/api/search`,
        method:'get'
    },filterproduct:{
        url:`${backenddomain}/api/filterproduct`,
        method:'post'
    }
}

export default summaryApi;