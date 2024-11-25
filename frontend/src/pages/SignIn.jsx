import { useNavigate } from 'react-router-dom'
import bg from '../assets/images/bg.svg'
import { useState } from 'react'
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import { useUserSignInMutation } from '../apis/authApi'
import { setCredentials } from '../features/auth/authSlice.js'

const SignIn = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch();
  const [signin] = useUserSignInMutation()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await signin(formData).unwrap();
      console.log(response.user);


      if (response.success) {
        await dispatch(setCredentials(response.user));

        toast.success(response.message, {
          position: "top-right"
        });
        setFormData({ email: '', password: '' });
        nav('/dashboard')
      }


    } catch (error) {
      console.log('Registration error:', error);
      toast.error(error.data?.message || 'An error occurred', {
        position: "top-right"
      });
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900" style={{
      backgroundImage: `url(${bg})`, backgroundSize: 'cover',
    }}>
      <div className="w-full max-w-md bg-zinc-900 shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500 cursor-pointer" onClick={() => nav('/')} >CryptoTally</h1>
        </div>
        <form onSubmit={handleSubmit} className='text-zinc-300'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border  bg-zinc-800 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
              required onChange={handleChange} value={formData.email}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border focus:outline-none bg-zinc-800 border-gray-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
              required onChange={handleChange} value={formData.password}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-600 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}
export default SignIn