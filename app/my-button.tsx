"use client";
import { useState } from "react";
import { queryServerAction, mutationServerAction } from "./actions";

export default function MyButton() {
	const [arg, setArg] = useState("input");
	const [res, setRes] = useState("click to run mutation");

	return (
		<>
			<input
				className="text-black"
				type="text"
				value={arg}
				onChange={(e) => setArg(e.target.value)}
			/>
			<button
				type="button"
				onClick={async () => {
					const response = await mutationServerAction(arg);
					setRes(response);
				}}
			>
				{res}
			</button>
		</>
	);
}
