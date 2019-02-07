new Promise((resolve, reject) => {
	// Requesting for all albums 
	let fetchReq = fetch('https://jsonplaceholder.typicode.com/albums');
	resolve(fetchReq);
}).then((request) => {
	// Extracting JSON Data from response of the above request
	let data = request.json();	
	return data;

}).then((albumData) => {
	// Getting all userIds from the albums data
	let userIds=[];
	for(let object of albumData){		
		if(!userIds.includes(object['userId'])){
			userIds.push(object['userId']);
		}
	}		
	return userIds;

}).then((userIds) => {
	// Getting users data of the all the userIds from albums data
	for(let userId of userIds){
		new Promise((resolve, reject) => {
			// requesting for a particular user
			let request = fetch('https://jsonplaceholder.typicode.com/users/'+userId);	
			resolve(request);
		}).then((request) => {
			// Extracting JSON data of user from the respose
			let data = request.json();
			return data;
		}).then((data) => {
			// Priting a user data on to the console
			console.log(data);
		});
	}

}).catch(err => { console.log(err); });

/* Async-Await */

async function getAllAlbums() {
	// Requesting for all albums 
	let fetchReq = await fetch('https://jsonplaceholder.typicode.com/albums');
	// Extracting JSON Data from response of the above request
	let albumsData = await fetchReq.json();
	return albumsData;
}

async function getUserData(albumsData) {
	let albumData = await getAllAlbums();
	// Getting all userIds from the albums data
	let userIds=[];
	for(let object of albumData){		
		if(!userIds.includes(object['userId'])){
			userIds.push(object['userId']);
		}
	}	
	let usersData=[];
	
	for(let id of userIds){
		let sigleUser = await getSigleUser(id);
		usersData.push(await sigleUser);
	}
	// Priting a user data on to the console
	console.log(usersData);
}


async function getSigleUser(id) {
	// requesting for a particular user
	let userRequest = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
	// Extracting JSON data of user from the respose
	let userData = await userRequest.json();
	return userData;
}

getUserData();



