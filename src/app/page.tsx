import Link from "next/link";
// import flagsmith from "@/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {

	const flags = false; //await flagsmith.getEnvironmentFlags() .isFeatureEnabled("search")
	return (
		<main className="main">
			<div>
				<h2>Hello World</h2>
			</div>
			<Link href="/about">About</Link>
			<br/>
			{flags
				&& <input placeholder="Search"/>}
		</main>
	);
}
