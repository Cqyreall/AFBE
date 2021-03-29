function eat() {
     document.getElementById('1').style.display = 'block';
     document.getElementById('eat').style.background = 'gray';
     document.getElementById('eat').style.color = 'white';
	 document.getElementById('drink').style.background = 'white';
     document.getElementById('drink').style.color = 'black';
     document.getElementById('2').style.display = 'none';
}
function drink() {
     document.getElementById('1').style.display = 'none';
	 document.getElementById('drink').style.background = 'gray';
     document.getElementById('drink').style.color = 'white';
	 document.getElementById('eat').style.background = 'white';
     document.getElementById('eat').style.color = 'black';
     document.getElementById('2').style.display = 'block';
}