import { TextInput, Label, Button, Alert, Spinner } from "flowbite-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth";



export default function Singup() {
  const [formData, setFormData] = useState({});
  const [errorMeassage, setErrorMeassgae] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMeassgae('Please fill out all fields');
    };
    try {
      setLoading(true);
      setErrorMeassgae(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        return setErrorMeassgae(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMeassgae(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to='/'
            className=" font-bold dark:text-white text-4xl"
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Wongnok
            </span>
            Recipes
          </Link>
          <p className="text-sm mt-5">
            สมัครสมาชิกเลย แล้วมาแบ่งปันเมนูสุดโปรดของคุณให้ทั่วโลกได้โลกรู้จัก เพราะเราเชื่อว่าการแบ่งปันจะทำให้โลกหน้าอยู่ขึน
          </p>
        </div>


        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value='Username' />
              <TextInput type="text" placeholder="Somngi" id="username" onChange={handleChange} />
            </div>
            <div>
              <Label value='Email' />
              <TextInput type="email" placeholder="somngi@company.com" id="email" onChange={handleChange} />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type="password" placeholder="strong#password" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : "Sign Up"
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">Sing In</Link>
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
