const axios = require("axios");
const { API } = require("../backend");

export const getUser = async (userId) => {
	try {
		const response = await axios.get(`${API}/user/${userId}`);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
};
