import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost() {
  return (
    <div className='[-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a Recipe</h1>
        <form action='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                <TextInput type='text' placeholder='Title : ชื่อเมนู' required id='title' className='flex-1'></TextInput>
                <Select name='time'> 
                    <option value='uncategorized' >เวลาที่ใช้ทำอาหาร</option>
                    <option value='time-1' >5-10 mins</option>
                    <option value='time-2' >11-30 mins</option>
                    <option value='time-3' >31-60 mins</option>
                    <option value='time-4' >60+ mins</option>
                </Select>
                <Select name='difficulty'> 
                    <option value='uncategorized' >ระดับความยากง่ายของสูต</option>
                    <option value='easy' >Easy</option>
                    <option value='meduim' >Meduim</option>
                    <option value='hard' >Hard</option>
                </Select>
            </div>
            <div className='flex gap-4 item-center justify-between border-4 border-teal-500 border-dotted  p-3' >
                <FileInput type='file' accept='image/*' />
                <Button type='button' gradientDuoTone='purpleToBlue' size='sm' outline >Upload image</Button>
            </div>
            <ReactQuill theme='snow' placeholder='ขั้นตอนการทำอาร...' className='h-72 mb-12' required></ReactQuill>
            <Button type='submit' gradientDuoTone='purpleToPink' className="w-full">Publish</Button>
        </form>
    </div>
  )
}
