import React from 'react';
import { DivLink, FormField } from '../../components';
const SignUp: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-lime-100">
            <form className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md transit">
                <h1 className="text-2xl font-bold mb-2 text-center">Welcome</h1>
                <h2 className="text-lg mb-6 text-center">Sign up for an Account</h2>
                <FormField label={'Full Name'} placeholder={'John Doe'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Email'} placeholder={'johndoe@gmail.com'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Password'} placeholder={'********'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Confirm Password'} placeholder={'********'} required={true} styling='mb-4 p-2 border' />
                <div className='flex flex-col gap-2'>
                    <DivLink text={'Create Account'} route={'/auth/login'} styling={"text-center bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition"} />
                    <DivLink text={"Already have an account? Log in here."} route={"/auth/login"} styling={"text-center bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition"} />
                </div>
            </form>
        </div>
    );
};

export default SignUp;
