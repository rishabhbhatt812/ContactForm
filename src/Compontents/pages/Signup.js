import React, { useState } from 'react'
import "./Signup.css"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ToastContainer } from 'react-toastify';
import { handleError , handleSucess } from '../../utils';

function Signup() {
    
    const [ data , setData] = useState({name:"" , address:" " , number:" " , requirements:" " , message:" "});

    const handleChange=(e)=>{
      const {name , value} = e.target ;
      setData({...data , [name]:value});
    }
    
    const handleSend =async(e)=>{
      e.preventDefault();
      console.log(data);
      const {name , address , number , requirements , message} = data ;

      if(!name || !address || !number || !requirements || !message){
        handleError("Please fill all the fields");
      }
      try {

        const response = await fetch("http://localhost:8000/userData/",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(data),
        });
        const result = await response.json();
        const {message , error} =  result ;
        if(message === "Message Send Successfully"){
          setData({name:"" , address:" " , number:" " , requirements:" " , message:" "})
          handleSucess(message);
        }
        else if(error){
          const detail = error?.details[0].message;
          handleError(detail);
        }
        console.log(result);
        
      } catch (error) {
        console.log(error);
      }


    }
  return (
    <div className='container'>
      <div className='img-box'>
        <img src='sideimg.png' alt='signup' className='img'/>
      </div>
      <div className='form'>
         <div className='form-box'>
          <div className='heading'>
            <h2>Get In <span>Touch</span></h2>
            <div className='contact'>
           <div><FaPhoneSquareAlt className='icon phone' /><span>
            +91-7587259564</span></div>
            <div>
            <IoMdMail className='icon email' /> 
            <span>info@orinson.com</span></div>
            </div>
          </div>
          <div className='form-data'>
            <div className='group'>
            <div className='data'>
            <label>Full Name</label>
            <input type='text' name="name" value={data.name} onChange={handleChange} placeholder='Enter your name'/>
            </div>
            <div className='data'>
            <label>Email address</label>
            <input type='email' name="address" value={data.address} onChange={handleChange} placeholder='Enter your address'/>
            </div>
            </div>
            <div className='group'>
            <div className='data'>
            <label>Number</label>
            <input type='text'name='number' value={data.number} onChange={handleChange} placeholder='Enter your number'/>
            </div>
            <div className='data'>
            <label>What are your requirements?</label>
            <select name='requirements'onChange={handleChange}   >
               <option value=" ">select</option>
               <option value="option1">option1</option>
               <option value="option2">option2</option>
            </select>
            </div>
            </div>
            <div className='data textarea'>
            <label>Message</label>
            <textarea type='text'  name='message' onChange={handleChange} value={data.message} placeholder='Message... '/>
            </div>
            <div className='btn data'>
            <button  onClick={handleSend}>Send Message</button>
          </div>
          </div>
          
         </div>
         </div>
         <ToastContainer />
    </div>
  )
}

export default Signup