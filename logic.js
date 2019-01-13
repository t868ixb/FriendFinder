let newUser = {};
let bestFriend = {
	diff: 100,
	name: "",
	image: ""
};

$('#submit').on('click', () => {
	let ans1 = $('#q1').val().trim();
	let ans2 = $('#q2').val().trim();
	let ans3 = $('#q3').val().trim();
	let ans4 = $('#q4').val().trim();
	let ans5 = $('#q5').val().trim();
	let ans6 = $('#q6').val().trim();
	let ans7 = $('#q7').val().trim();
	let ans8 = $('#q8').val().trim();
	let ans9 = $('#q9').val().trim();
	let ans10 = $('#q10').val().trim();

		newUser = {
			scores: [ans1, ans2, ans3, ans4, ans5]
		};

		findFriend(newUser.scores);

		setTimeout(postData, 1500);

		function postData() {
			$.post({url: '/api/friends', contentType: 'application/json'}, JSON.stringify(newUser));
		}
		$('#q1').val("");
		$('#q2').val("");
		$('#q3').val("");
		$('#q4').val("");
		$('#q5').val("");
		$('#q6').val("");
		$('#q7').val("");
		$('#q8').val("");
		$('#q9').val("");
		$('#q10').val("");
	}
);
function findFriend(scores) {

	$.get('/api/friends', (friends) => {

		let count = 0;
		let arrayLength = friends.length;

		for (var i = 0; i < arrayLength; i++) {
			calcScoreDiff(scores, friends[i]);
			count++;		
		}		

		if (count === arrayLength) {
			$('#friendName').text(bestFriend.name);
			$('#friendImg').attr('src', bestFriend.image);
			$('#myModal').modal('toggle');
		}
	});	
}


function calcScoreDiff(user, friend) {

	let diff = 0;
	let count = 0;

	for (var i = 0; i < 5; i++) {
		diff += Math.abs(user[i] - friend.scores[i]);
		count++;
	}

	if (count === 5) {
		if (diff < bestFriend.diff) {
			bestFriend.diff = diff;
			bestFriend.name = friend.name;
			bestFriend.image = friend.photo;
		} else {
			return;
		}
	}  	
}