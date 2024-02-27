import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import { ProductsItem } from "../../../components/Admin/Products";

import "./Products.scss";

export function Products() {
	const [showModal, setShowModal] = useState(false);
	const [reload, setReload] = useState(false);

	const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
	const onReload = () => setReload((prevState) => !prevState);

	const panes = [
		{
			render: () => (
				<Tab.Pane attached={false}>
					<ProductsItem
						reload={reload}
						onReload={onReload}
					/>
				</Tab.Pane>
			),
		},
	];
	return (
		<>
			<div className="products-page">
				<div className="products-page__add">
					<Button
						primary
						onClick={() => console.log("Abrir modal...")}
					>
						Nuevo curso
					</Button>
				</div>
				<Tab
					menu={{ secondary: true }}
					panes={panes}
				/>
			</div>

			{/* <BasicModal
				show={showModal}
				close={onOpenCloseModal}
				title="Crear curso"
			>
				<CourseForm onClose={onOpenCloseModal} />
			</BasicModal> */}
		</>
	);
}
