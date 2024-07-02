import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

const SecurePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        router.push('/admin/login');
      });
  }, []);

  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.username}</div>;
};

export default SecurePage;
