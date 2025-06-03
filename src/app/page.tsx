import HomeContent from "@/components/home/HomeContent";
import Layout from "@/components/layouts/Layout";
import { type CountryCodeProps, getCountryCodes } from "@/lib/fetcher/fetcher";

export const revalidate = 60; // Revalidate every 60 seconds

async function HomePage() {
	const countryCodes: Array<CountryCodeProps> = await getCountryCodes();

	return (
		<Layout>
			<HomeContent countryCodes={countryCodes} />
		</Layout>
	);
}

export default HomePage;
