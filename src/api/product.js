import { ENV } from "../utils";

export class Product {
	baseApi = ENV.BASE_API;

	async createProduct(accessToken, data) {
		try {
			const formData = new FormData();
			Object.keys(data).forEach((key) => {
				formData.append(key, data[key]);
			});

			if (data.file) {
				formData.append("miniature", data.file);
			}

			const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCT}`;
			const params = {
				method: "POST",
				headers: {
					Authorization: `${accessToken}`,
				},
				body: formData,
			};

			const response = await fetch(url, params);
			const result = await response.json();

			if (response.status !== 201) throw result;

			return result;
		} catch (error) {
			throw error;
		}
	}

	async getProducts(params) {
		try {
			const pageFilter = `page=${params.page || 1}`;
			const limitFilter = `limit=${params.limit || 10}`;
			const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCT}?${pageFilter}&${limitFilter}`;

			const response = await fetch(url);
			const result = await response.json();

			if (response.status !== 200) throw result;

			return result;
		} catch (error) {
			throw error;
		}
	}

	async updateProduct(accessToken, idProduct, data) {
		try {
			const formData = new FormData();
			Object.keys(data).forEach((key) => {
				formData.append(key, data[key]);
			});

			if (data.file) {
				formData.append("miniature", data.file);
			}

			const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCT}/${idProduct}`;
			const params = {
				method: "PATCH",
				headers: {
					Authorization: `${accessToken}`,
				},
				body: formData,
			};

			const response = await fetch(url, params);
			const result = response.json();

			if (response.status !== 200) throw result;

			return result;
		} catch (error) {
			throw error;
		}
	}

	async deleteProduct(accessToken, idProduct) {
		try {
			const url = `${this.baseApi}/${ENV.API_ROUTES.PRODUCT}/${idProduct}`;
			const params = {
				method: "DELETE",
				headers: {
					Authorization: `${accessToken}`,
				},
			};

			const response = await fetch(url, params);
			const result = await response.json();

			if (response.status !== 200) throw result;

			return result;
		} catch (error) {
			throw error;
		}
	}
}
