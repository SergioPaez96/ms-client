import React, { useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { Product } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { ENV } from "../../../../utils";
import { initialValues, validationSchema } from "./ProductsForm.form";

import "./ProductsForm.scss";

const productController = new Product();

export function ProductsForm(props) {
	const { onClose, onReload, product } = props;
	const { accessToken } = useAuth();
	const formik = useFormik({
		initialValues: initialValues(product),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				if (!product) {
					await productController.createProduct(accessToken, formValue);
				} else {
					await productController.updateProduct(
						accessToken,
						product._id,
						formValue,
					);
				}

				onClose();
				onReload();
			} catch (error) {
				console.error(error);
			}
		},
	});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		formik.setFieldValue("miniature", URL.createObjectURL(file));
		formik.setFieldValue("file", file);
	});

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		onDrop,
	});
	const getMiniature = () => {
		if (formik.values.file) {
			return formik.values.miniature;
		} else if (formik.values.miniature) {
			return `${ENV.BASE_PATH}/${formik.values.miniature}`;
		}
		return null;
	};
	return (
		<Form
			className="products-form"
			onSubmit={formik.handleSubmit}
		>
			<div
				className="products-form__miniature"
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				{getMiniature() ? (
					<Image
						size="small"
						src={getMiniature()}
					/>
				) : (
					<div>
						<span>Arrastra tu miniatura</span>
					</div>
				)}
			</div>

			<Form.Input
				name="title"
				placeholder="Nombre del producto"
				onChange={formik.handleChange}
				value={formik.values.title}
				error={formik.errors.title}
			/>

			<Form.TextArea
				name="description"
				placeholder="Pequeña descripción"
				onChange={formik.handleChange}
				value={formik.values.description}
				error={formik.errors.description}
			/>

			<Form.Group widths="equal">
				<Form.Input
					type="number"
					name="price"
					placeholder="Precio del producto"
					onChange={formik.handleChange}
					value={formik.values.price}
					error={formik.errors.price}
				/>
				<Form.Input
					type="number"
					name="score"
					placeholder="Puntuación del producto"
					onChange={formik.handleChange}
					value={formik.values.score}
					error={formik.errors.score}
				/>
			</Form.Group>

			<Form.Button
				type="submit"
				primary
				fluid
				loading={formik.isSubmitting}
			>
				{!product ? "Crear producto" : "Actualizar producto"}
			</Form.Button>
		</Form>
	);
}
