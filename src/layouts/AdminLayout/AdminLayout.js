import React from "react";
import { AdminMenu } from "../../components/Admin/AdminLayout";

export function AdminLayout(props) {
	const { children } = props;
	return (
		<div className="admin-layout">
			<div className="admin-layout__left">
				<div>
					<h3>Logo</h3>
				</div>
				<AdminMenu />
			</div>
			<div className="admin-layout__right">
				{/* <div className="admin-layout__right-header">
          <Logout />
        </div> */}
				<div className="admin-layout__right-content">{children}</div>
			</div>
		</div>
	);
}
