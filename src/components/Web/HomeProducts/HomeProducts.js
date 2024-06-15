import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { map } from "lodash";
import { Link } from "react-router-dom";

import { Product } from "../../../api";
import { ENV } from "../../../utils";

import "./HomeProducts.scss";

const productController = new Product();

export function HomeProducts() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await productController.getProducts({ limit: 3 });
				setProducts(response.docs);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<Container className="home-products">
			<h2>Éstos son algunos de nuestros productos</h2>
			<div className="home-products__all-products">
				{map(products, (product) => (
					<a key={product._id} href="/products" target="_blank">
						<Image src={`${ENV.BASE_PATH}/${product.miniature}`} />
						<div>
							<span>{product.title} </span>
							<span>{product.description}</span>
						</div>
					</a>
				))}
			</div>
			<div className="home-products__more">
				<Button as={Link} to="/productos" primary>
					Ver más
				</Button>
			</div>
		</Container>
	);
}
