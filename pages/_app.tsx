import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import Navigation from '@/components/Sections/Navigation';
import Footer from '@/components/Sections/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import LoadingWidget from '@/components/Elements/LoadingWidget';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <NextUIProvider>
            <LoadingWidget />
            <main className="purple-dark text-foreground bg-background min-h-screen">
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </main>
        </NextUIProvider>
    );
}
