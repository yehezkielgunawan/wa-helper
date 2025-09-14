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
				url: "https://og-maker.yehez.workers.dev/api/og?title=WA+Helper&description=A+web+app+to+save+your+time+by+directly+chat+without+saving+the+phone+number+first.&imageUrl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F733%2F733585.png%3Fw%3D740%26t%3Dst%3D1667650978%7Eexp%3D1667651578%7Ehmac%3D0018014bd277113ec2ed856144f601742e5fe4d227412f3da634d52f1c4ab29f",
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
