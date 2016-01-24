app.controller('redditCtrl', ['$scope', clone]);

function clone() {

	var vm = this;
	vm.currdate = new Date();
	vm.postings = [];
	vm.postNum = 0;
	vm.addPost = addPost;
	vm.upVote = upVote;
	vm.downVote = downVote;
	vm.postCom = postCom;


	function addPost(title, author, image, description) {
		var currDate = new Date();
		var post = {
			id : vm.postNum,
			header : title,
			auth : author,
			img : image,
			desc : description,
			vote : 0,
			dated : currDate,
			comTotal : 0,
			comments : []
		};
		vm.postNum++;
		vm.postings.push(post);
		vm.title = '';
		vm.author = '';
		vm.image = '';
		vm.description = '';
		return vm.postings;
	} //END addPost

	function upVote(index) {
		//increase vote total
		vm.postings[index].vote++;

	}//END upVote

	function downVote(index) {
		//decrease vote total
		vm.postings[index].vote--;
	}//END downVote

	function postCom(index, author, comment) {
		var comm = {
			name : author,
			com : comment
		};
		vm.postings[index].comments.push(comm);
		vm.userCom = '';
		vm.comment = '';
		//increase comment count
		vm.postings[index].comTotal++;
	}//END postCom


} // END Clone