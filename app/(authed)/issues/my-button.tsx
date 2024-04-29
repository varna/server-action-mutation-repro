"use client";
import { useState } from "react";
import { queryServerAction, mutationServerAction } from "./actions";
import { parseAsString, useQueryState } from "nuqs";

export default function MyButton() {
	const [res, setRes] = useState("click to run mutation");
	const [arg, setArg] = useQueryState(
		"email",
		parseAsString.withDefault("").withOptions({
			shallow: false,
		}),
	);

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
					const response = await mutationServerAction([arg, arg]);
					setRes(response);
				}}
			>
				{res}
			</button>
		</>
	);
}
