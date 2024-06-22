import { Button, FileInput, Select, TextInput, Alert } from 'flowbite-react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getDownloadURL, getStorage, uploadBytesResumable , ref} from 'firebase/storage'
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function CreatePost() {
  const [file, setFile] = useState(null);  
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({})
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };
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
                <FileInput type='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>
                <Button
                    type='button'
                    gradientDuoTone='purpleToBlue'
                    size='sm'
                    outline
                    onClick={handleUploadImage}
                    disabled={imageUploadProgress}
                >
                    {imageUploadProgress ? (
                        <div className='w-16 h-16'>
                            <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress || 0}%`}
                            />
                        </div>
                    ) : ('Upload Image')
                    }
                </Button>
            </div>
            {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
            {formData.image && ( <img src={formData.image} alt='upload' className='w-full h-72 object-cover'/>)}
            <ReactQuill 
                theme='snow' 
                placeholder='วัตถุดิบ และ ขั้นตอนการทำอาร...' 
                className='h-72 mb-12' 
                required
            />
            <Button type='submit' gradientDuoTone='purpleToPink' className="w-full">Publish</Button>
        </form>
    </div>
  )
}
