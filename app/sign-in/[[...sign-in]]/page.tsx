export const runtime = "edge";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return <SignIn />;
}
