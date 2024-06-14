import './App.css'
import landingPage from '../public/landing_page.jpg';
import Button from './components/Button';


const App = () => {

  return (
    <>
      <div className='flex flex-col items-center gap-10 h-full '>
        <div className='w-full h-96 md:h-full'>
          <img src={landingPage} alt="image of produce " className='w-full h-full object-cover' />
          <p className='hidden md:flex absolute inset-0 justify-center items-center md:text-white md:text-center md:text-3xl md:font-bold'>Direct from farm to table. <br /> Shop fresh, shop local and support farmers with every purchase </p>
        </div>
        <Button text='LOGIN' styling='bg-white p-5 md:hidden' />
        <Button text='REGISTER' styling='bg-white p-5 md:hidden' />
      </div>
      <div>

      </div>

    </>
  )
}

export default App
