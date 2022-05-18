import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-override.css'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider resetCSS>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp