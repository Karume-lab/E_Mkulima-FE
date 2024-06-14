import FormField from "../../components/FormField";
import DivLink from '../../components/DivLink';
import Button from "../../components/Button";

const Login = () => {
    return (
        <>
            <h1>Welcome back</h1>
            <h2>Login to your account</h2>
            <form action="" method="post">
                <FormField label={"Email"} placeholder={"johndoe@gmail.com"} required={true} />
                <FormField label={"Password"} placeholder={"********"} required={true} />
                <div className="flex gap-3">
                    <input type="checkbox" name="Remember me" id="" />
                    <label htmlFor="Remember me">Remember me</label>
                </div>
                <DivLink text={"Forgot Password"} route={""} styling={""} />
                <Button text="Login" />
            </form>
        </>
    );
};

export default Login;
