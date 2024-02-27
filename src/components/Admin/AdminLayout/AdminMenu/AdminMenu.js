import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import "./AdminMenu.scss";

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
			<Menu.Item
				as={Link}
				to="/admin/products"
				active={isCurrentPath("/admin/products")}
			>
				<Icon name="boxes" />
				Productos
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/admin/blog"
				active={isCurrentPath("/admin/blog")}
			>
				<Icon name="comment" />
				Blog
			</Menu.Item>
			<Menu.Item
				as={Link}
				to="/admin/newsletter"
				active={isCurrentPath("/admin/newsletter")}
			>
				<Icon name="envelope" />
				Newsletter
			</Menu.Item>
		</Menu>
	);
}
