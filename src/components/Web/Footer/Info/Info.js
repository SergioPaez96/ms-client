import React from "react";
import { map } from "lodash";
import { Button } from "semantic-ui-react";

import { Icon } from "../../../../assets";
import { socialData } from "../../../../utils";

import "./Info.scss";

export function Info() {
	return (
		<div className="footer-info">
			<Icon.MSLogo className="logo" />
			<p>Los mejores productos de mayor calidad y buen precio.</p>

			{/* {map(socialData, (social) => (
				<Button
					key={social.type}
					as="a"
					target="_blank"
					href={social.link}
					color={social.type}
					icon={social.type}
				/>
			))} */}
		</div>
	);
}
