import "./globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="top-0 bg-green-400">
            <div className="z-10 fixed">
                <Navbar />
            </div>

            <Component {...pageProps} />
        </div>
    );
}
