function foo(a,b){
	let res = a * b;
	if (res > 50 && res < 100){
		console.log(true);
	}
	else{
		console.log(false);
	}
	return res;
}
foo(5,5);