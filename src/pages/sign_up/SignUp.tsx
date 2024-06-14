import Button from '../../components/Button';
import DivLink from '../../components/DivLink';
import FormField from '../../components/FormField';
const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-lime-100">
            <form className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md transit">
                <h1 className="text-2xl font-bold mb-2 text-center">Welcome</h1>
                <h2 className="text-lg mb-6 text-center">Sign up for an Account</h2>
                <FormField label={'Full Name'} placeholder={'John Doe'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Email'} placeholder={'johndoe@gmail.com'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Password'} placeholder={'********'} required={true} styling='mb-4 p-2 border' />
                <FormField label={'Confirm Password'} placeholder={'********'} required={true} styling='mb-4 p-2 border' />
                <div className='flex flex-col gap-2'>
                    <Button text="Create Account" styling="bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition" />
                    <DivLink text={"Already have an account? Log in here."} route={"/auth/sign_up"} styling={"text-center bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition"} />
                </div>
            </form>
        </div>
    );
};

export default SignUp;
