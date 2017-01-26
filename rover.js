var roverObj ={
	x: 0,
	y: 0,
	o: 0,
	f: 0,
	l: 0,
	r: 0,
	b: 0	
};
function roverForward(x,y){
	return x=1;
	return y=0;
}
function roverBack(x,y){
	return x=-1;
	return y=0;
}
function roverLeft(l){
	return l=1;
}
function roverRight(r){
	return r=1;
}


module.exports = {
	roverObj: roverObj,
	forward: roverForward,
	back: roverBack,
	left: roverLeft,
	right: roverRight

};
