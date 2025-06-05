import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen font-poppins">
      <div className="absolute z-0 bg-[url('/img/1741960.jpg')] bg-cover bg-center top-0 w-full h-72"></div>

      <div className="relative z-10 h-[550px] w-80 rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-white">Welcome</h1>
        <p className="mb-3 text-sm text-white">
          Please fill form below to sign up
        </p>

        <div className="w-full h-[400px] bg-white flex flex-col justify-center items-center rounded-2xl shadow-2xl">
          <h1 className="text-xl font-bold text-greenMain">
            Create New Account
          </h1>
          <p className="mb-3 text-xs text-slate-400">
            Let's start your plants journey with us!
          </p>

          <form className="my-4 w-60">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-xs text-gray-700 font-xs"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 text-xs py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-xs text-gray-700 font-xs"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full text-xs px-3 py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
              />
            </div>

            <div className="flex items-center mb-3">
              <label htmlFor="check" className="items-center flex">
                <input
                  type="checkbox"
                  name="check"
                  className="w-3 h-3 rounded text-greenMain focus:ring-greenMain border-greenMain"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-greenMain text-white text-sm font-semibold py-[6px] rounded-lg hover:bg-greenMain transition cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-xs text-center text-gray-500">
            Have an account?{" "}
            <Link
              to="/login"
              className="text-xs cursor-pointer text-greenMain hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        <footer className="text-sm mt-7 text-greenMain">
          <p>@2025, Made with 💛 by Asix</p>
        </footer>
      </div>
    </div>
  );
};

export default Register;
