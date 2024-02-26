import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

export function AdminMenu() {
	const { pathname } = useLocation();

	const isCurrentPath = (path) => {
		if (path === pathname) return true;
		return false;
	};
	return (
		<Menu
			fluid
			vertical
			icon
			text
			className="admin-menu"
		>
			<Menu.Item
				as={Link}
				to="/admin/menu"
				active={isCurrentPath("/admin/menu")}
			>
				<Icon name="bars" />
				Menu
			</Menu.Item>
		</Menu>
	);
}
