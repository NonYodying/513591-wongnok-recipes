export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Wongnok recipes
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Wongnok recipes! This web app was created by 513591
              as a personal project to submit dev pool test.  
              513591 is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}