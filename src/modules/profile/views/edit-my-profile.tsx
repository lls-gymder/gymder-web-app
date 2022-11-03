import { useEffect, useState } from 'react';
import { Page } from 'Common/components'
import { ReadProfileService } from 'Profile/services';

export function EditMyProfilePageView() {
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    populateProfile()
  }, [])
  
  const populateProfile= async () => {
    const _profile = await ReadProfileService();

    setProfile(_profile);
  }


  return (
    <Page showSideMenu={true}>
      <article className='prose h-full flex'>
        <h1 className='m-auto'>
          {profile?.name ?? 'testing'}
        </h1>
      </article>
    </Page>
  )
}
