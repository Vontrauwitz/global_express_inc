import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import '@aws-amplify/ui-react/styles.css';
import { Button, TextField } from '@aws-amplify/ui-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEnter = (e) => {
    e.preventDefault();
    router.push('/admin/dashboard');
  };

  return (
    <>
      <Head>
        <title>Admin Login | Global Express Inc.</title>
        <meta name="description" content="Admin login page for Global Express Inc." />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-900">
          <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <Button 
                type="submit"
                onClick={handleEnter}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
