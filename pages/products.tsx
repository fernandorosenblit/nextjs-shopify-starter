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
		<div className="bg-white">
			{data?.products.edges.map((product) => (
				<h6 key={product.node.id}>{product.node.title}</h6>
			))}
		</div>
	);
}
