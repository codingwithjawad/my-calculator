let temp;
let fnd = document.querySelector('#fnd');
let equal = document.querySelector('.equal-btn');
let btn = document.querySelector('.btn-container');
btn.addEventListener('click', function(button){
	if(button.target.value == 'c')
				fnd.value = ''
	else if(button.target.value =='='){
		fnd.value = eval(fnd.value)
		if(eval(fnd.value) == undefined)
			fnd.value = ''
		temp = fnd.value;
	}
	else if(button.target.value =='ans')
		fnd.value += temp;
	else if(button.target.value =='<')
		fnd.value = fnd.value.slice(0,-1)
	else
		fnd.value += button.target.value;
})
