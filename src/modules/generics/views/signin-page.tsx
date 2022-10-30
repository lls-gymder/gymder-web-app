import { Page } from 'Common/components'
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { useAuth } from 'Common/hooks';
import { useRouter } from 'next/router';

export function SigninPageView() {
  const router = useRouter();
  const { signin, isAuthenticated } = useAuth();

  if (isAuthenticated)
    router.push('/');

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const [ email, password ] = event.target;
    
    signin({
      email: email.value,
      password: password.value,
    })
  }

  return (
    <Page showSideMenu={false}>
      <div className='flex prose'>
        <div className='rounded-2xl shadow-xl bg-gray-100 p-10 m-auto w-[40vw] flex flex-col justify-center'>
          <h2 className='m-auto mb-6'>Sign In</h2>
          <form onSubmit={onSubmit} className='grid grid-flow-row gap-4 '>
            <span className='w-full rounded-md bg-white px-4 py-2 flex flex-row items-center'>
              <input
                placeholder='e-mail'
                className='px-2 py-1 mr-2  w-full'
                type="email"
                ></input>
                <MdAlternateEmail />
            </span>
            <span className='w-full rounded-md bg-white px-4 py-2 flex flex-row items-center'>
              <input
                placeholder='password'
                className='px-2 py-1 mr-2  w-full'
                type="password"
                ></input>
                <RiLockPasswordFill />
            </span>
            <button className="rounded-md bg-red-500 h-10 mt-6" type="submit">submit</button>
          </form>
        </div>
      </div>
    </Page>
  )
}
