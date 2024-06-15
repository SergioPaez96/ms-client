import { ENV } from "../utils";

export class Newsletter {
	baseApi = ENV.BASE_API;
	async getEmails(accesstoken, page = 1, limit = 10) {
		try {
			const pageFilter = `page=${page}`;
			const limitFiter = `limit=${limit}`;
			const url = `${this.baseApi}/${ENV.API_ROUTES.NEWSLETTER}?${pageFilter}&${limitFiter}`;
			const params = {
				headers: {
					Authorization: `${accesstoken}`,
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

	async deleteEmail(accesstoken, idEmail) {
		try {
			const url = `${this.baseApi}/${ENV.API_ROUTES.NEWSLETTER}/${idEmail}`;
			const params = {
				method: "DELETE",
				headers: {
					Authorization: `${accesstoken}`,
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

	async registerEmail(email) {
		try {
			const url = `${this.baseApi}/${ENV.API_ROUTES.NEWSLETTER}`;
			const params = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
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
