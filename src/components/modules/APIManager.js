const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/user/${id}`).then(result => result.json());
	},
	getAll() {
		return fetch(`${remoteURL}/stuff`).then(result => result.json());
	},
	delete(id) {
		return fetch(`http://localhost:5002/stuff/${id}`, {
			method: "DELETE"
		}).then(result => result.json());
	},
	post(newStuff) {
		return fetch(`${remoteURL}/stuff`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newStuff)
		}).then(data => data.json());
	},
	update(editedStuff) {
		return fetch(`${remoteURL}/stuff/${editedStuff.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedStuff)
		}).then(data => data.json());
	}
};
