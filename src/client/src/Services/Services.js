import API from './API';

export default {
	// calls search endpoint of any of the routes in the backend server
	searchData(payload) {
		return API()
			.get(`${payload.apiEndPoint}/search`, {
				params: payload.params,
			})
			.then((response) => response)
			.catch((error) => error.status);
	},
	// calls insert endpoint of any of the routes in the backend server
	insertData(payload) {
		return API()
			.post(`${payload.apiEndPoint}/insert`, payload.body)
			.then((response) => response)
			.catch((error) => error.status);
	},
	// calls update endpoint of any of the routes in the backend server
	updateData(payload) {
		console.log(payload);
		return 'lol';
		// Implements create request to server
		// return API()
		// 	.post(`${payload.apiEndPoint}/update`, payload.body)
		// 	.then((response) => response)
		// 	.catch((error) => error.status);
	},
	// calls delete endpoint of any of the routes in the backend server
	deleteData(payload) {
		console.log(payload);
		// Implements create request to server
		// return API()
		// 	.post(`${payload.apiEndPoint}/delete`, payload.body)
		// 	.then((response) => response)
		// 	.catch((error) => error.status);
	},
};
