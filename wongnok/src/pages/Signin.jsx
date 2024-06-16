import { TextInput, Label, Button, Alert, Spinner } from "flowbite-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signInSuccess, signInStart, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";



export default function Singin() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMeassage} = useSelector(state => state.user);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all fields'));
    };
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(signInFailure(data.message ));
      }
      
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to={"/"} className=" font-bold dark:text-white text-4xl" >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">WONGNOK</span>
          RECIPES
          </Link>
          <p className="text-sm mt-5">
            ลงชื่อเข้าใช้เลย แล้วมาแบ่งปันเมนูสุดโปรดของคุณให้ทั่วโลกได้โลกรู้จัก เพราะเราเชื่อว่าการแบ่งปันจะทำให้โลกหน้าอยู่ขึน
          </p>
        </div>


        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div>
              <Label value='Email' />
              <TextInput type="email" placeholder="somngi@company.com" id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value='Password' />
              <TextInput type="password" placeholder="********" id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : "Sign In"
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signup' className="text-blue-500">Sing Up</Link>
          </div>
          {
            errorMeassage && (
              <Alert className="mt-5" color='failure'>{errorMeassage}</Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
