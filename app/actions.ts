"use server";

export async function queryServerAction() {
	console.log("logging: queryServerAction");
	return "query server action response";
}

export async function mutationServerAction(input: string) {
	console.log("logging: mutationServerAction", input);
	return `mutation server action response: ${input}`;
}
