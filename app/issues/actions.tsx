"use server";

import { revalidatePath } from "next/cache";

export async function queryServerAction() {
	console.log("logging: queryServerAction");
	return `query server action response: ${new Date().toISOString()}`;
}

export async function mutationServerAction([input, duput]: [string, string?]) {
	console.log("logging: mutationServerAction", input, duput);
	revalidatePath("/");
	return `mutation server action response: ${input}`;
}
