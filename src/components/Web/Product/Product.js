import React from "react";
import { Image, Button, Rating, Icon } from "semantic-ui-react";
import { ENV } from "../../../utils";

import "./Product.scss";

export function Product(props) {
	const { product } = props;

	return (
		<div className="product">
			<Image src={`${ENV.BASE_PATH}/${product.miniature}`} />
			<div className="product__info">
				<h3> {product.title} </h3>
				<p>{product.description}</p>
				<Button as="a" href={product.url} primary fluid target="_blank">
					AÑADIR AL CARRITO <Icon name="cart" />
				</Button>

				<div className="product__info-footer">
					<span>{product.price} Gs.</span>
					<Rating
						icon="star"
						defaultRating={product.score}
						maxRating={5}
						disabled
					/>
				</div>
			</div>
		</div>
	);
}
