import React, { useState } from "react";
import { Image, Button, Icon, Confirm } from "semantic-ui-react";
import { BasicModal } from "../../../Shared";
import { ProductsForm } from "../ProductsForm";
import { ENV } from "../../../../utils";
import { Product } from "../../../../api";
import { useAuth } from "../../../../hooks";

import "./ProductsItem.scss";

const productController = new Product();

export function ProductsItem(props) {
	const { product, onReload } = props;
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState("");
	const [showConfirm, setShowConfirm] = useState(false);
	const { accessToken } = useAuth();

	const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
	const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);

	const openUpdateProduct = () => {
		setTitleModal(`Actualizar: ${product.title}`);
		onOpenCloseModal();
	};

	const onDelete = async () => {
		try {
			await productController.deleteProduct(accessToken, product._id);
			onReload();
			onOpenCloseConfirm();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="products-item">
				<div className="products-item__info">
					<Image src={`${ENV.BASE_PATH}/${product.miniature}`} />
					<div>
						<p>{product.title}</p>
						<p>{product.description} </p>
						<p>{product.price}</p>
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
						onClick={openUpdateProduct}
					>
						<Icon name="pencil" />
					</Button>
					<Button
						icon
						color="red"
						onClick={onOpenCloseConfirm}
					>
						<Icon name="trash" />
					</Button>
				</div>
			</div>
			<BasicModal
				show={showModal}
				close={onOpenCloseModal}
				title={titleModal}
			>
				<ProductsForm
					onClose={onOpenCloseModal}
					onReload={onReload}
					product={product}
				/>
			</BasicModal>
			<Confirm
				open={showConfirm}
				onCancel={onOpenCloseConfirm}
				onConfirm={onDelete}
				content={`Eliminar el producto: ${product.title}`}
				size="mini"
			/>
		</>
	);
}
