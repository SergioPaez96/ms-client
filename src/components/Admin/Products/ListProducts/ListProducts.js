import React, { useState, useEffect } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { size, map } from "lodash";
import { ProductsItem } from "../ProductsItem";

import { Product } from "../../../../api";

import "./ListProducts.scss";

const productController = new Product();

export function ListProducts(props) {
	const { reload, onReload } = props;
	const [products, setProducts] = useState(null);
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState();

	useEffect(() => {
		(async () => {
			try {
				const response = await productController.getProducts({ page });
				setProducts(response.docs);
				setPagination({
					limit: response.limit,
					page: response.page,
					pages: response.pages,
					total: response.total,
				});
			} catch (error) {
				console.error(error);
			}
		})();
	}, [page, reload]);

	const changePage = (_, data) => {
		setPage(data.activePage);
	};

	if (!products)
		return (
			<Loader
				active
				inline="centered"
			/>
		);
	if (size(products) === 0) return "No hay ningún producto";

	return (
		<div className="list-products">
			{map(products, (product) => (
				<ProductsItem
					key={product._id}
					product={product}
					onReload={onReload}
				/>
			))}

			<div className="list-products__pagination">
				<Pagination
					totalPages={pagination.pages}
					defaultActivePage={pagination.page}
					ellipsisItem={null}
					firstItem={null}
					lastItem={null}
					onPageChange={changePage}
				/>
			</div>
		</div>
	);
}
