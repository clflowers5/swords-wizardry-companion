function GoogleAnalyticsScript() {
  return (
    <>
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
    </>
  );
}

export default GoogleAnalyticsScript;
