import FormField from '../../components/FormField';
const SignUp = () => {
    return (
        <form action="" method="post">
            <FormField label={'Full Name'} placeholder={'John Doe'} required={true} />
            <FormField label={'Email'} placeholder={'johndoe@gmail.com'} required={true} />
            <FormField label={'Password'} placeholder={'********'} required={true} />
            <FormField label={'Confirm Password'} placeholder={'********'} required={true} />
            <button type='submit'>Create Account</button>
        </form>
    );
};

export default SignUp;
