import FormField from "../../components/FormField";
import DivLink from '../../components/DivLink';
import Button from "../../components/Button";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-lime-100">
            <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md transit">
                <h1 className="text-2xl font-bold mb-2 text-center">Welcome back</h1>
                <h2 className="text-lg mb-6 text-center">Login to your account</h2>
                <form className="w-full flex flex-col gap-3">
                    <FormField label={"Email"} placeholder={"johndoe@gmail.com"} required={true} styling='p-2 border' />
                    <FormField label={"Password"} placeholder={"********"} required={true} styling='p-2 border' />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <DivLink text={"Forgot Password"} route={""} styling="text-lime-500 hover:underline mb-4" />
                    <Button text="Login" styling="bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition" />
                    <DivLink text={"Don't have an account? Sign up for one here."} route={"/auth/sign_up"} styling={"text-center bg-lime-500 text-white w-full py-2 rounded hover:scale-105 hover:drop-shadow-lg transition"} />
                </form>
            </div>
        </div>
    );
};

export default Login;
