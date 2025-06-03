import "@/styles/globals.css";
import "@fontsource/catamaran";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import type React from "react";

export const metadata: Metadata = {
	title: "WA Helper",
	description: "Send Whatsapp message without saving the contact first.",
	openGraph: {
		title: "WA Helper",
		description: "Send Whatsapp message without saving the contact first.",
		url: "https://wa.yehezgun.com",
		siteName: "wa.yehezgun.com",
		images: [
			{
				url: "https://og-v2.yehezgun.com/api/og?title=Wa-Helper&desc=A%20web%20app%20to%20save%20your%20time%20to%20directly%20chat%20without%20saving%20the%20phone%20number.&imgUrl=https://cdn-icons-png.flaticon.com/512/733/733585.png?w=740&t=st=1667650978~exp=1667651578~hmac=0018014bd277113ec2ed856144f601742e5fe4d227412f3da634d52f1c4ab29f&siteName=wa.yehezgun.com",
				width: 800,
				height: 600,
				alt: "wa.yehezgun.com whatsapp-helper",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
	icons: {
		icon: "https://cdn-icons-png.flaticon.com/512/408/408708.png?w=740",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	minimumScale: 1,
	viewportFit: "cover",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
