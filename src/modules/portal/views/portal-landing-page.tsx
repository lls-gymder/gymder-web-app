import { Page } from 'Common/components'

export function PortalLandingPageView() {
  return (
    <Page showSideMenu={true}>
      <article className='prose h-full flex'>
        <h1 className='m-auto'>
          this is the portal main page
        </h1>
      </article>
    </Page>
  )
}
