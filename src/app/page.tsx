import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export default async function Home() {

	const flags = await flagsmith.getEnvironmentFlags()
	return (
		<main className="main">
			<div>
				<h2>Hello World</h2>
			</div>
			<Link href="/about">About</Link>
			<br/>
			{flags.isFeatureEnabled("search")
				&& <div>
					<label>Search</label>
					<input placeholder="Search"/>
				</div>}
		</main>
	);
}
