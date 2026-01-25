"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "@/services/AuthService"; //
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [role, setRole] = useState<"user" | "micro-collector" | "hub">("user");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const userData = { ...data, role };
    const res = await registerUser(userData);
    if (res?.success) {
      router.push("/login");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-eco-light">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-forest-green">Create Account</h2>
        <p className="text-gray-500 mt-2">Join our eco-friendly community</p>
      </div>

      {/* Role Selection Tabs */}
      <div className="flex p-1 bg-eco-light rounded-lg">
        <button
          onClick={() => setRole("user")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === "user" ? "bg-forest-green text-white shadow" : "text-forest-green"}`}
        >
          Seller
        </button>
        <button
          onClick={() => setRole("micro-collector")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === "micro-collector" || role === "hub" ? "bg-forest-green text-white shadow" : "text-forest-green"}`}
        >
          Collector
        </button>
      </div>

      {/* Sub-role for Collector */}
      {(role === "micro-collector" || role === "hub") && (
        <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-top-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="collectorType"
              checked={role === "micro-collector"}
              onChange={() => setRole("micro-collector")}
              className="text-forest-green focus:ring-forest-green"
            />
            <span className="text-sm text-gray-700">Micro-Collector</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="collectorType"
              checked={role === "hub"}
              onChange={() => setRole("hub")}
              className="text-forest-green focus:ring-forest-green"
            />
            <span className="text-sm text-gray-700">Hub (Large)</span>
          </label>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-lime-green focus:border-lime-green outline-none transition"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-lime-green focus:border-lime-green outline-none transition"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-lime-green focus:border-lime-green outline-none transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 font-semibold text-white bg-forest-green rounded-lg hover:bg-dark-green transition-colors shadow-lg"
        >
          Sign Up as {role.replace("-", " ")}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-forest-green font-bold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;