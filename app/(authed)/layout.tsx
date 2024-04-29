import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>{children}</SignedIn>
		</div>
	);
}
