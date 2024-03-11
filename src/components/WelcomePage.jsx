import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex justify-between h-screen w-screen relative" >
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col z-30 bg-white bg-opacity-40 text-gray-800 ">
        <h1 className="title mb-4 font-bold text-3xl lobster-regular">MealPal</h1>
        <Link to="signup/step1" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[90%] text-center">Get Started</Link>
        <p className="mt-8">Already have an account? <a href="/login" className='text-blue-500'>Sign In</a> </p>
      </div>
      <div className="max-md:absolute max-md:top-0 max-md:w-full max-md:h-full w-1/2 bg-cover bg-center bg-[url('http://images.nforshifu.com/public/uploads/imgs/—pngtree—set-of-fruits-and-vegetables_5306658.png')]" ></div>
    </div>
  );
}

export default WelcomePage;
