"use client"
import axios from "axios";
import { FormEvent, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(
      `${apiUrl}/login`, 
      formData,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'Authorization': `Bearer YOUR_TOKEN_HERE`, // Replace with your actual token if needed
          // 'X-Custom-Header': 'CustomValue', // Example of a custom header
        },
        withCredentials:true,
      }
    )
    .then(res => {
      console.log('res: ', res);
    }).catch(err => {
      console.log('err: ', err);
    })
  };

  return (
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
        </form>
        {/* <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p> */}
      </div>
  );
}