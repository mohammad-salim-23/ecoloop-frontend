"use client";

import { useForm } from "react-hook-form";
import { loginUser } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2"; // SweetAlert2 

const LoginForm = () => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await loginUser(data);

      if (res?.success) {
        // success message
        Swal.fire({
          icon: "success",
          title: "Login Success!",
          text: "...",
          timer: 1500,
          showConfirmButton: false,
          color: "#228B22", // forest-green
        });
        
        router.push("/");
      } else {
        // 
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: res?.message || "Something error",
          confirmButtonColor: "#228B22",
        });
      }
    } catch (error: any) {
      // network or any error 
      Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "An error occurred. Please try again later.",
        confirmButtonColor: "#228B22",
      });
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-eco-light">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-forest-green">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Login to your Scollop account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-lime-green focus:border-lime-green outline-none transition"
            placeholder="example@mail.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-lime-green focus:border-lime-green outline-none transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-4 font-semibold text-white bg-forest-green rounded-lg hover:bg-dark-green transition-colors shadow-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        New to Scollop?{" "}
        <Link href="/register" className="text-forest-green font-bold hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;