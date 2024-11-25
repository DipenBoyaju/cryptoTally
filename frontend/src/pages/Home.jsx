import { useSelector } from 'react-redux'
import bg from '../assets/images/bg.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { currentUser } = useSelector((state) => state.user)
  const nav = useNavigate();

  return (
    <div className='w-full h-screen bg-black flex justify-center flex-col gap-10 items-center' style={{
      backgroundImage: `url(${bg})`, backgroundSize: 'cover',
    }}>
      <h1 className='font-semibold text-4xl text-orange-600'>CryptoTally</h1>
      <button className='border-2 border-orange-600 hover:bg-orange-500/50 transition-all duration-500 backdrop-blur-md text-lg p-4 font-normal rounded-full px-7 text-orange-500 hover:text-white' onClick={() => nav(currentUser ? '/dashboard' : '/signin')}>
        {
          !currentUser ? 'Get Started' : 'Dashboard'
        }
      </button>
    </div >
  )
}
export default Home