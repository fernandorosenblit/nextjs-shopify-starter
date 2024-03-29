import { GraphQLClient } from "graphql-request";

const API_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const client = new GraphQLClient(API_URL, {
	headers: {
		"X-Shopify-Storefront-Access-Token": `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export { client };
