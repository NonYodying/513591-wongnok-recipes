import { TextInput, Label, Button } from "flowbite-react"
import { Link } from "react-router-dom"
export default function Singup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to={"/"} className=" font-bold dark:text-white text-4xl" >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">WONGNOK</span>
          RECIPES
          </Link>
          <p className="text-sm mt-5">
            สมัครสมาชิกเลย แล้วมาแบ่งปันเมนูสุดโปรดของคุณให้ทั่วโลกได้โลกรู้จัก เพระาเราเชื่อว่าการแบ่งปันจะทำให้โลกหน้าอยู่ขึน
          </p>
        </div>


        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Username' />
              <TextInput type="text" placeholder="Somngi" id="username" />
            </div>
            <div>
              <Label value='Email' />
              <TextInput type="text" placeholder="somngi@gmail.com" id="email" />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type="text" placeholder="134#abc" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signin' className="text-blue-500">Sing In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
