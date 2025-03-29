import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center lg:px-8 min-h-screen py-12 sm:px-6">
      <div className="sm:max-w-md sm:mx-auto sm:w-full">
        <img className="h-40 w-auto mx-auto" src="/logo.svg" alt="CareerNest" />
        <h2 className="text-3xl text-center text-gray-900 font-extrabold">
          Sign in to your account
        </h2>
      </div>

      <div className="shadow-md mt-8 sm:max-w-md sm:mx-auto sm:w-full">
        <div className="bg-white shadow px-4 py-8 sm:px-10 sm:rounded-lg">
          <LoginForm />
          <div className="mt-6">
            <div className="relative">
              <div className="flex absolute inset-0 items-center">
                <div className="border-gray-300 border-t w-full"></div>
              </div>
              <div className="flex justify-center text-sm relative">
                <span className="bg-white text-gray-500 px-2">
                  New to CareerNest?
                </span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/signup"
                className="flex bg-white border border-transparent justify-center rounded-md shadow-sm text-blue-600 text-sm w-full font-medium hover:bg-gray-50 px-4 py-2"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
