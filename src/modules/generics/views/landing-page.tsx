import { Page } from 'Common/components'

export function LandingPageView() {
  return (
    <Page showSideMenu={false}>
      <article className='prose h-full flex'>
        <h1 className='m-auto'>
          welcome to gymder
        </h1>
      </article>
    </Page>
  )
}
