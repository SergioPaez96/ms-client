import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Menu.scss";

export function Menu() {
	return (
		<div className="footer-menu">
			<h4>Productos y Servicios</h4>

			<Grid>
				<Grid.Column>
					<Link to="#">
						<Icon name="tint" /> Sublimación y DTF
					</Link>
					<Link to="#">
						<Icon name="print" /> Servicios de impresión
					</Link>
					<Link to="#">
						<Icon name="crosshairs" /> Servicios de diseño
					</Link>
				</Grid.Column>
			</Grid>
		</div>
	);
}

{
	/* <Link to="#">
	<Icon name="code" /> Blog
</Link> */
}
