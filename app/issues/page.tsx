export const runtime = "edge";

import { queryServerAction, mutationServerAction } from "./actions";
// import MyButton from "./my-button";

export default async function Home() {
	const data = await queryServerAction();

	return <main>query server action: {data}</main>;
}
