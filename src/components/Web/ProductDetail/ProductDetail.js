import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button, Rating } from "semantic-ui-react";
import { Product } from "../../../api";
import { ENV } from "../../../utils";

import "./ProductDetail.scss";

const productController = new Product();

export function ProductDetail() {
	const { id } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await productController.getProduct(id);
				setProduct(response);
			} catch (error) {
				console.error(error);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="product-detail">
			<div className="product-detail__section">
				<div className="product-detail__section-image">
					<div className="product-detail__section-image__image">
						<Image src={`${ENV.BASE_PATH}/${product.miniature}`} />
					</div>
				</div>
				<div className="product-detail__section-info">
					<div className="product-detail__section-info__info">
						<div className="product-detail__section-info__info__title">
							{product.title}
						</div>
						<div className="product-detail__section-info__info__description">
							{product.description}
						</div>
						<div className="product-detail__section-info__info__">
							{product.price}
							{" Gs."}
						</div>
						<Rating
							icon="star"
							defaultRating={product.score}
							maxRating={5}
							disabled
						/>
						<div className="product-detail__section-info__info__talle">
							<h3>Selecciona una talla</h3>
							<select className="product-detail__section-info__info__talle__select">
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="XXL">XXL</option>
								<option value="XXXL">XXXL</option>
							</select>
						</div>

						<div className="product-detail__section-info__info__talle">
							<h3>Selecciona una cantidad</h3>
							<input
								type="number"
								min="1"
								max="number"
								defaultValue="1"
								className="product-detail__section-info__info__talle__cantidad"
							/>
						</div>
						<Button primary fluid>
							Añadir al carrito
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
