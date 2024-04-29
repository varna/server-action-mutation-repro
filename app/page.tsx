import Link from "next/link";

export const runtime = "edge";

export default async function Page() {
	return <Link href="/issues">Go to issues</Link>;
}
