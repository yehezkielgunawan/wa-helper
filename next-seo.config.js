/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "WA Helper",
  description: "Send Whastapp message without saving the contact first.",
  canonical: "https://wa.yehezgun.com",
  openGraph: {
    url: "https://wa.yehezgun.com",
    title: "WA Helper",
    description: "Send Whastapp message without saving the contact first.",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=Send%20Whastapp%20message%20without%20saving%20the%20contact%20first.&logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F733%2F733585.png&siteName=wa.yehezgun.com&templateTitle=Whatsapp%20Helper&theme=dark",
        alt: "wa.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "wa.yehezgun.com",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    },
  ],
};

export default defaultSEOConfig;
