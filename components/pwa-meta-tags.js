function PWAMetaTags() {
  return (
    <>
      <link rel="manifest" href="manifest.json" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="S&W Spells" />
      <meta name="apple-mobile-web-app-title" content="S&W Spells" />
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
    </>
  );
}

export default PWAMetaTags;
