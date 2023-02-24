import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <UALProvider
          appName={appName}
          authenticators={authenticators[chainId]}
          chains={blockchains}
          key={chainId}
        >
          <TopAppBar />
          {children}
          <Footer />
        </UALProvider>
      </body>
    </html>
  );
}
