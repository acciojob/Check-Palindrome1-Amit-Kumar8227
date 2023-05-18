// complete the given function

function palindrome(str){
	var newstr=str.toUpperCase();
	var revstr=str.reverse();
	if(newstr===revstr){
		return true;
	}
	else {
		return false;
	}

}
module.exports = palindrome(hello);
