import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

import { ProductDetail as Detail } from "../../../components/Web";

export function ProductDetail() {
	return (
		<Container className="product-detail">
			<Detail />
		</Container>
	);
}
