import React, {useState, useEffect} from 'react'
import './Login.css'
import toast, {Toaster} from 'react-hot-toast'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const {login, isPending, error} = useLogin();

  useEffect(() => {
    error &&  toast.error(error, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});
  }, [error]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    login(email, password);
  }

  return (
    <>
    <div className="box">
  <div className="headerr">
    <div className='signheader'>
    <i className="user circle outline icon"></i>
  <p >SignIn</p>
  </div>
  </div>
  
  <form className="form" onSubmit={handleSubmit}>
  
    <label htmlFor='email'>Email
  <input name='email' className='signupinput field' type="email" placeholder="Your Email" onChange={e=>setEmail(e.target.value)} value={email}/>
  </label>
  <label htmlFor='Password'>Password
  <input  name='Password' className='signupinput field' type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)} value={password} />
  </label>
  {!isPending  && <button type="submit" className="buttonn signupinput"> Login </button>}
  {isPending  &&  <div className="ui active loader" bis_skin_checked="1"></div>}
  

  </form>
 
</div>

<Toaster />
</>
  )
}

export default Login