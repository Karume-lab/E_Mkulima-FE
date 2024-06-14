import './App.css'
import landingPage from '../public/landing_page.jpg';
import DivLink from './components/DivLink';


const App = () => {

  return (
    <>
      <div className='flex flex-col items-center gap-10 h-full '>
        <div className='w-full h-96 md:h-full'>
          <img src={landingPage} alt="image of produce " className='w-full h-full object-cover' />
        </div>
        <DivLink text={'Login'} route={'/auth/login'} styling={'bg-white p-3'} />
        <DivLink text={'Sign Up'} route={'/auth/sign_up'} styling={'bg-white p-3'} />
      </div>
    </>
  )
}

export default App
