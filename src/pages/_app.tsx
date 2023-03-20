import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '@/molecules/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
