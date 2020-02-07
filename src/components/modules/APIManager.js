const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/items/${id}`).then(result => result.json());
	},
	getAll() {
		return fetch(`${remoteURL}/items`).then(result => result.json());
	},
	getCollection() {
		return fetch(`${remoteURL}/collections`).then(result => result.json());
	},
	delete(id) {
		return fetch(`http://localhost:5002/items/${id}`, {
			method: "DELETE"
		}).then(result => result.json());
	},
	post(newItem) {
		return fetch("http://localhost:5002/stuffList", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newItem)
		}).then(data => data.json());
	},
	update(editedItem) {
		return fetch(`${remoteURL}/items/${editedItem.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedItem)
		}).then(data => data.json());
	},
	getRelated(id) {
		return fetch(`${remoteURL}/item?avatar=${id}`).then(data =>
			data.json()
		);
	}
	// },
	// saveToCollection(saveItem) {
	// 	return fetch(`${remoteURL}/items${saveItem.id}`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify(saveProduct)
	// 	}).then(data => data.json());
	// }
};
