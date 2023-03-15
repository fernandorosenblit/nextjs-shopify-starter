import { QueryClient, dehydrate } from "@tanstack/react-query";
import { client } from "../shopify/client";
import { useGetProductsQuery } from "../shopify/generated/graphql";

export async function getStaticProps() {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(
		useGetProductsQuery.getKey(),
		useGetProductsQuery.fetcher(client)
	);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function ProductsPage() {
	const { data } = useGetProductsQuery(client);

	return (
		<ul>
			{data?.products.edges.map((product) => (
				<li key={product.node.id}>{product.node.title}</li>
			))}
		</ul>
	);
}
