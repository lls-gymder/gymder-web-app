import { useAuth } from 'Common/hooks'
import Image from 'next/image';
import Link from 'next/link';

import { FaUserNinja } from 'react-icons/fa';

export function SideMenu() {
  const { user } = useAuth();

  return (
    <div className='h-full flex prose'>
      <div className='grid grid-flow-row auto-rows-max gap-8 m-auto justify-center text-center'>
        <div>
          <div className='h-fit w-fit rounded-full bg-blue-900 overflow-hidden'>
            {
              user?.avatar 
                ? <Image src={user.avatar} width='60' height='60' alt='Profile' />
                : <FaUserNinja color='black' size={140} className='m-3'/>
            }
          </div>
          <h2 className='text-3xl mt-1'>{user?.name ?? 'undefined'}</h2>
          <Link href="/profile/edit">
            Edit profile
          </Link>
        </div>
      </div>
    </div>
  )
}