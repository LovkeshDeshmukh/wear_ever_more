import React from 'react'
import AdminHeader from './AdminHeader'
import "./AddProduct.css"
import Dashboard from './Dashboard'
import DashboardHeader from './DashboardHeader'

const AddProduct = () => {
  return (
    <div className='AddProduct'>
        <AdminHeader/>
        <div className='AddProduct_details'>
            <DashboardHeader/>
            <div className='AddProduct_details_div'>
            <div style={{margin:'10px 0 0 30px'}}>About Product</div>
            <div className='AddProduct_details_inputs'>
                <input placeholder='Product Name' type="text" />
                <input placeholder='Product Brand' type="text" />
                <input placeholder='Product Price' type="text" />
                <input placeholder='Product Discount' type="text" />
                <input placeholder='Product Discription' type="text" />
                <input placeholder='Quantity' type="text" />
                <input placeholder='Product Color' type="text" />
                <input placeholder='Category' type="text" />
                <textarea placeholder='Product Discription' name="" id="" cols="30" rows="5"></textarea>
                <input placeholder='Size' type="text" />
                <input style={{width:'100px',height:'100px'}} type="text" />
                <button>Submit</button>
            </div>
            </div>
            {/* <div><button>Submit</button></div> */}
        </div>
    </div>
  )
}

export default AddProduct