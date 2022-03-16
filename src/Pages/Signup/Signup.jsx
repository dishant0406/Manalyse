import React, { useEffect, useState } from 'react'
import './Signup.css';
import { useSignup } from '../../hooks/useSignup';
import toast from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayname, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [filename, setFilename] = useState('');
  const [thumbnailError, setThumbnailError] = useState(null);
  const {signup, isPending, error} = useSignup();

  useEffect(() => {
    thumbnailError &&  toast.error(thumbnailError, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});
  }, [thumbnailError]);

  useEffect(() => {
    error &&  toast.error(error, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});
  }, [error]);

  const handleSubmit = e =>{
    e.preventDefault();

    signup(email, password, displayname, thumbnail);
    console.log('hello');
  }
  

  const handleFileChange = (e)=>{
    setThumbnail(null);
    let selected = e.target.files[0];

    if(!selected){
      setThumbnailError('Please Select a file!!');
      return;
    }

    if(!selected.type.includes('image')){
      setThumbnailError('Selected file must be an Image!!');
      return;
    }

    if (selected.size > 100000){
      setThumbnailError('Image File size should be less than 100kb');
      return;
    }

    setThumbnailError(null);
    setFilename(selected.name);
    setThumbnail(selected);
    
  }



  return (
    <>
    
    <div className="box">
  <div className="headerr">
    <div className='signheader'>
    <i className="user circle icon"></i>
  <p >Signup</p>
  </div>
  </div>
  
  <form className="form" onSubmit={handleSubmit}>
  
    <label htmlFor='email'>Email
  <input name='email' className='signupinput field' type="email" placeholder="Your Email" onChange={e=>setEmail(e.target.value)} value={email}/>
  </label>
  <label htmlFor='username'>Name
  <input  name='username' className='signupinput field' type="text" placeholder="Full Name"  onChange={e=>setDisplayName(e.target.value)} value={displayname}/>
  </label>
  <label htmlFor='Password'>Password
  <input  name='Password' className='signupinput field' type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)} value={password} />
  </label>
  <label htmlFor='Avatar'>Profile Photo</label>
  <div>
    <label htmlFor="file" className="ui icon button">
        <i className="file icon"></i>
        {filename==='' ? 'Choose Photo' : filename}</label>
    <input type="file" id="file" style={{display: 'none'}} onChange={handleFileChange}/>
</div>

  {!isPending  && <button type="submit" className="buttonn signupinput"> Signup </button>}
  {isPending  &&  <div className="ui active loader" bis_skin_checked="1"></div>}
  

  </form>
 
</div>


</>
  )
}

export default Signup