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
        url: "https://og-v2.yehezgun.com/api/og?title=Wa-Helper&desc=A%20web%20app%20to%20save%20your%20time%20to%20directly%20chat%20without%20saving%20the%20phone%20number.&imgUrl=https://cdn-icons-png.flaticon.com/512/733/733585.png?w=740&t=st=1667650978~exp=1667651578~hmac=0018014bd277113ec2ed856144f601742e5fe4d227412f3da634d52f1c4ab29f&siteName=wa.yehezgun.com",
        alt: "wa.yehezgun.com whatsapp-helper",
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
      href: "https://cdn-icons-png.flaticon.com/512/408/408708.png?w=740",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default defaultSEOConfig;
