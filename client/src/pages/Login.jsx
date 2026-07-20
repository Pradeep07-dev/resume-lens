import { Lock, Mail, User2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import api from "../configs/api";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      dispatch(login(data));

      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleToggle = () => {
    const newState = state === "login" ? "register" : "login";
    setState(newState);
    reset();
    window.history.pushState({}, "", `/app?state=${newState}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-87.5 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-md"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>

        {state !== "login" && (
          <div className="mt-6">
            <div
              className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${
                errors.name ? "border-red-400" : "border-gray-300/80"
              }`}
            >
              <User2Icon size={16} color="#6b7280" />
              <input
                type="text"
                placeholder="Name"
                className="border-none outline-none ring-0 w-full"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 text-left pl-4">
                {errors.name.message}
              </p>
            )}
          </div>
        )}

        <div className="mt-4">
          <div
            className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${
              errors.email ? "border-red-400" : "border-gray-300/80"
            }`}
          >
            <Mail size={13} color="#6b7280" />
            <input
              type="email"
              placeholder="Email id"
              className="border-none outline-none ring-0 w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 text-left pl-4">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <div
            className={`flex items-center w-full bg-white border h-12 rounded-full overflow-hidden pl-6 gap-2 ${
              errors.password ? "border-red-400" : "border-gray-300/80"
            }`}
          >
            <Lock size={13} color="#6b7280" />
            <input
              type="password"
              placeholder="Password"
              className="border-none outline-none ring-0 w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1 text-left pl-4">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-green-500/80 cursor-pointer hover:opacity-90 transition-opacity"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={handleToggle}
            className="text-green-500 cursor-pointer"
          >
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
