import { Page } from 'Common/components'
import Head from 'next/head'

export function AboutPageView() {
  return (
    <Page showSideMenu={false}>
      <article className='prose h-full flex'>
        <h1 className='m-auto'>
          this is about lls
        </h1>
      </article>
    </Page>
  )
}
