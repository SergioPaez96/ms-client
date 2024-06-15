import React, { useState } from "react";
import { Button, Icon, Confirm } from "semantic-ui-react";
import { Newsletter } from "../../../../api";
import { useAuth } from "../../../../hooks";

import "./EmailsItem.scss";

const newsletterController = new Newsletter();

export function EmailsItem(props) {
	const { email, onReload } = props;
	const { accessToken } = useAuth();
	const [showConfirm, setShowConfirm] = useState(false);

	const onOpenClseConfirm = () => setShowConfirm((prevState) => !prevState);

	const onDelete = async () => {
		try {
			await newsletterController.deleteEmail(accessToken, email._id);

			onReload();
			onOpenClseConfirm();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className="emails-item">
				<span>{email.email}</span>

				<div>
					<Button
						icon
						color="red"
						onClick={onOpenClseConfirm}
					>
						<Icon name="trash" />
					</Button>
				</div>
			</div>

			<Confirm
				open={showConfirm}
				onCancel={onOpenClseConfirm}
				onConfirm={onDelete}
				content={`Eliminar ${email.email}`}
				size="mini"
			/>
		</>
	);
}
