import Head from 'next/head';
import styles from '../styles/Home.module.css';
import sdk from '../helper/utils';

export default function Home() {
  const loginWithZoom = async () => {
    try {
      await sdk.account.createOAuth2Session(
        'zoom',
        'http://localhost:3000/dashboard'
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Appwrite|Zoom</title>
        <meta name='description' content='Appwrite and Zoom' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className='text-2xl font-medium text-indigo-700'>
          Auth with Appwrite and Zoom
        </h1>
        <div className='w-11/12 md:w-2/4 flex flex-col items-center p-16 border rounded-lg'>
          <p className='text-sm mb-4'>Click on the button below to login</p>
          <button
            onClick={loginWithZoom}
            className='px-6 py-2 h-10 bg-black text-white rounded-lg'
          >
            Login with zoom
          </button>
        </div>
      </main>
    </div>
  );
}
