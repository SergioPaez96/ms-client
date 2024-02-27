import React, { useState } from "react";
import { Image, Button, Icon, Confirm } from "semantic-ui-react";
import { image } from "../../../../assets";

import "./ProductsItem.scss";

export function ProductsItem(props) {
	const { onReload } = props;
	return (
		<>
			<div className="products-item">
				<div className="products-item__info">
					<Image src={image.MSLogoP} />
					<div>
						<p>Titulo producto</p>
					</div>
				</div>

				<div>
					<Button
						icon
						as="a"
						href="#"
						target="_blank"
					>
						<Icon name="eye" />
					</Button>
					<Button
						icon
						primary
						onClick={() => console.log("Actualizar producto.")}
					>
						<Icon name="pencil" />
					</Button>
					<Button
						icon
						color="red"
						onClick={() => console.log("Eliminar producto")}
					>
						<Icon name="trash" />
					</Button>
				</div>
			</div>
			{/* <BasicModal
				show={showModal}
				close={onOpenCloseModal}
				title={titleModal}
			>
				<productsForm
					onClose={onOpenCloseModal}
					onReload={onReload}
					products={products}
				/>
			</BasicModal> */}

			{/* <Confirm
				open={showConfirm}
				onCancel={onOpenCloseConfirm}
				onConfirm={onDelete}
				content={`Eliminar el curso ${products.title}`}
				size="mini"
			/> */}
		</>
	);
}
