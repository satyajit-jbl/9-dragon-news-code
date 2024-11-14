import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-3">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google </button>
                
                <button className="btn"><FaGithub></FaGithub>Login with Gothub</button>
            </div>
        </div>
    );
};

export default SocialLogin;