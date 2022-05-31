import Head from 'next/head';
import styles from '../styles/Home.module.css';
import sdk from '../helper/utils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  const getSession = async () => {
    const data = (await sdk) && sdk.account.get();
    data
      .then((res) => setSession(res))
      .catch((err) => {
        router.push('/');
        console.log(err);
      });
  };

  useEffect(() => {
    getSession();
  }, []);

  const logOut = async () => {
    await sdk.account.deleteSession('current');
    alert('logout successful');
    router.push('/');
  };

  return (
    session && (
      <div className={styles.container}>
        <Head>
          <title>Appwrite|Zoom</title>
          <meta name='description' content='Appwrite and Zoom' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className='text-2xl font-medium text-indigo-700 mb-4'>
            Authenticated Page with Appwrite and Zoom
          </h1>
          <p>
            Welcome:{' '}
            <span className='font-medium capitalize'>{session.name}</span>
          </p>
          <p>
            email:{' '}
            <span className='font-medium text-indigo-700'>{session.email}</span>
          </p>
          <button
            onClick={logOut}
            className='px-6 py-2 h-10 mt-12 border-2 border-black text-black rounded-lg'
          >
            Log Out
          </button>
        </main>
      </div>
    )
  );
}
