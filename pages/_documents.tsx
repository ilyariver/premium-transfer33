import Document, { Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2"/>
                    <link rel="preload" href="/fonts/PlayfairDisplay-Bold.woff2" as="font" type="font/woff2"/>
                    <link rel="preload" href="/fonts/NotoSans-Light.woff2" as="font" type="font/woff2"/>
                    <link rel="preload" href="/fonts/NotoSans-Regular.woff2" as="font" type="font/woff2"/>
                    <link rel="preload" href="/fonts/NotoSans-SemiBold.woff2" as="font" type="font/woff2"/>
                    <link rel="preload" href="/fonts/NotoSans-Bold.woff2" as="font" type="font/woff2"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
