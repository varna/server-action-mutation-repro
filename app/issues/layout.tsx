import type { ReactNode } from "react";
import MyButton from "./my-button";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			{children}
			<br />
			<MyButton />
		</div>
	);
}
