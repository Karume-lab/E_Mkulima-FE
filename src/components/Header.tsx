import headerImage from '../../public/header.jpg'
import logo from '../../public/logo.png'
import DivLink from './DivLink'

const Header = () => {
    return (
        <div>
            <div className=' md:hidden flex flex-col items-center'>
                <div className='flex w-full h-20 bg-green-500'>
                    <img src={headerImage} alt="image" className='w-1/2' />
                    <p className='w-1/2 flex items-center text-sm text-center'>Direct from farm to table. Shop fresh, shop local and support farmers with every purchase </p>
                </div>
                <div>
                    <img src={logo} alt="app logo" className='w-56' />
                </div>
            </div>
            <div className='hidden md:flex md:justify-between items-center p-2'>
                <img src={logo} alt="app logo" className='w-40 ' />
                <div className='flex gap-5'>
                    <DivLink text={'Login'} route={'/auth/login'} styling={'bg-white p-3'} />
                    <DivLink text={'Sign Up'} route={'/auth/sign_up'} styling={'bg-white p-3'} />
                </div>
            </div>
        </div>

    )
}

export default Header
