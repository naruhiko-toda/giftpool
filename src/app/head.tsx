import type React from "react";

const Head = (): React.JSX.Element => {
  const title: string = "GiftPool：本当に欲しいものを、みんなの力で";
  const description: string =
    "GiftPoolで、本当に価値のある特別なプレゼントを、家族や友人の支援で実現しましょう。共に夢を叶える喜びを分かち合う、新しい形の贈り物を始めませんか？あなたの夢を支えるコミュニティがここにあります。";
  const image: string = "https://giftpool.me/favicons/logo_main.png";
  const url: string = "https://giftpool.me/";
  return (
    <head>
      <meta name="msapplication-square70x70logo" content="/favicons/site-tile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicons/site-tile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicons/site-tile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicons/site-tile-310x310.png" />
      <meta name="msapplication-TileColor" content="#0078d7" />
      <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicons/favicon.ico" />
      <link rel="icon" type="image/vnd.microsoft.icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="36x36" href="/favicons/android-chrome-36x36.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicons/android-chrome-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="/favicons/android-chrome-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/android-chrome-96x96.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicons/android-chrome-128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/favicons/android-chrome-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="152x152"
        href="/favicons/android-chrome-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/favicons/android-chrome-256x256.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="384x384"
        href="/favicons/android-chrome-384x384.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicons/android-chrome-512x512.png"
      />
      <link rel="icon" type="image/png" sizes="36x36" href="/favicons/icon-36x36.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicons/icon-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="/favicons/icon-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicons/icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="128x128" href="/favicons/icon-128x128.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/favicons/icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="152x152" href="/favicons/icon-152x152.png" />
      <link rel="icon" type="image/png" sizes="160x160" href="/favicons/icon-160x160.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicons/icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="196x196" href="/favicons/icon-196x196.png" />
      <link rel="icon" type="image/png" sizes="256x256" href="/favicons/icon-256x256.png" />
      <link rel="icon" type="image/png" sizes="384x384" href="/favicons/icon-384x384.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/favicons/icon-512x512.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/icon-16x16.png" />
      <link rel="icon" type="image/png" sizes="24x24" href="/favicons/icon-24x24.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/icon-32x32.png" />
      <link rel="manifest" href="/manifest.json" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="GiftPool, 価値あるギフト, 本当に欲しいもの, みんなの力で, 夢の実現, 家族の支援, 友人からの贈り物, 共同購入"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </head>
  );
};
export default Head;
