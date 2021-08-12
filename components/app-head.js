import Head from "next/head";

function AppHead() {
  return (
    <Head>
      <title>Swords & Wizardry Companion</title>
      <link rel="manifest" href="manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Swords & Wizardry Companion" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="S&W Companion" />
      <meta name="apple-mobile-web-app-title" content="S&W Companion" />
      <meta name="theme-color" content="#e2e8f0" />
      <meta name="msapplication-navbutton-color" content="#e2e8f0" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="apple-touch-icon" href="images/apple-touch-icon.png"/>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-175512131-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-175512131-1');
            `,
        }}
      />
    </Head>
  );
}

export default AppHead;
