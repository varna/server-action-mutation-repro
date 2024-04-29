"use server";

import { revalidatePath } from "next/cache";

/**
 * Used in Server component (page) to query data from server
 * Works in all versions of next
 */
export async function queryServerAction() {
	console.log("logging: queryServerAction");
	return `query server action response: ${new Date().toISOString()}`;
}

/**
 * Used in Client component to mutate data on server.
 * Works in next@14.1.4
 * Fails in next@14.2.0 and later.
 * 	by returning 404 html page
 */
export async function mutationServerAction([input, duput]: [string, string?]) {
	console.log("logging: mutationServerAction", input, duput);
	revalidatePath("/");
	return `mutation server action response: ${input}`;
}
