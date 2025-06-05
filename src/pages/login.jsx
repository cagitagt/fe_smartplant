import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-poppins">
      <main className="w-[750px] h-[400px] flex rounded-3xl relative overflow-visible shadow-2xl shadow-greenMain">
        <div className="w-[400px] h-[400px] px-10 py-11 text-greenMain flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold">Welcome back!</h1>
          <p className="mb-3 text-sm text-slate-400">
            Enter your username and password to sign in
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-sm"
              >
                {" "}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 text-sm py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm text-gray-700 font-sm"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full text-sm px-3 py-[6px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
              />
            </div>

            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded text-greenMain focus:ring-greenMain border-greenMain"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-greenMain text-white font-semibold py-[6px] rounded-lg hover:bg-greenMain transition cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="cursor-pointer text-greenMain hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="h-full absolute right-[-70px] z-0 bottom-0">
          <img src="/img/4.png" className="h-[540px]" alt="plant" />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
