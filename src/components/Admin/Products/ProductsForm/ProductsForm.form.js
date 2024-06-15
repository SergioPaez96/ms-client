import * as Yup from "yup";

export function initialValues(product) {
	return {
		title: product?.title || "",
		miniature: product?.miniature || "",
		file: null,
		description: product?.description || "",
		price: product?.price || undefined,
		score: product?.score || undefined,
	};
}

export function validationSchema() {
	return Yup.object({
		title: Yup.string().required(true),
		miniature: Yup.string().required(true),
		description: Yup.string().required(true),
		price: Yup.number().required(true),
		score: Yup.number().min(1, true).max(5, true).required(true),
	});
}
