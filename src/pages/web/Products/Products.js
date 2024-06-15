import React, { useState, useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
import { map } from "lodash";

import { Product as ProductController } from "../../../api/product";
import { Product } from "../../../components/Web";

import "./Products.scss";

const productController = new ProductController();

export function Products() {
	const [products, setProducts] = useState(null);
	const [pagination, setPagination] = useState(null);
	const [page, setPage] = useState(1);
	const isCurrentLastPage = pagination?.page === pagination?.pages;

	useEffect(() => {
		(async () => {
			try {
				const response = await productController.getProducts({
					page,
					limit: 9,
				});
				setPagination({
					page: response.page,
					pages: response.pages,
				});

				if (!products) setProducts(response.docs);
				else setProducts([...products, ...response.docs]);
			} catch (error) {
				console.error(error);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const loadMore = () => {
		setPage((prevState) => prevState + 1);
	};

	return (
		<Container className="products-page">
			<h1>Éstos son algunos de nuestros productos</h1>
			<div className="products">
				{map(products, (product) => (
					<div key={product._id} className="products__item">
						<Product product={product} />
					</div>
				))}
			</div>

			{!isCurrentLastPage && (
				<div className="more-products">
					<Button primary onClick={loadMore}>
						Ver más
					</Button>
				</div>
			)}
		</Container>
	);
}
