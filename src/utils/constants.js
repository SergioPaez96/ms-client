// const SERVER_IP = "127.0.0.1:3977";
const SERVER_IP = "https://ms-server-e94fc4eb4fbe.herokuapp.com";

export const ENV = {
	BASE_PATH: `${SERVER_IP}`,
	BASE_API: `${SERVER_IP}/api/v1`,
	API_ROUTES: {
		REGISTER: "auth/sign-up",
		LOGIN: "auth/sign-in",
		REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
		USER_ME: "user/me",
		USER: "user",
		MENU: "menu",
		PRODUCT: "product",
		NEWSLETTER: "newsletter",
		POST: "post",
	},
	JWT: {
		ACCESS: "access",
		REFRESH: "refresh",
	},
};
