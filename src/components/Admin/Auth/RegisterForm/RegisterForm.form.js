import * as Yup from "yup";

export function initialValues() {
	return {
		email: "",
		password: "",
		repeatPass: "",
		conditionsAccepted: false,
	};
}

export function validationSchema() {
	return Yup.object({
		email: Yup.string()
			.email("El email no es válido")
			.required("Campo requerido"),
		password: Yup.string().required("Campo obligatorio"),
		repeatPass: Yup.string()
			.required("Campo obligatorio")
			.oneOf(
				[Yup.ref("password")],
				"Las contraseñas deben tienen que ser iguales",
			),
		conditionsAccepted: Yup.bool().isTrue(true),
	});
}
