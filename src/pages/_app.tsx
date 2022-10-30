import 'Styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from 'Common/contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
