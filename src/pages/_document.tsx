import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="h-full text-base antialiased">
      <Head />
      <body className="min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
