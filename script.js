var arr=[2,4,1,6,8,2,4,9];
var temp = [];

//This function for show number before from global variable arr
function showNumberBefore() {
	for (var i = 0; i < arr.length; i++) 
	{
		document.getElementById("NumberBefore").innerHTML += ("<tr><th> Index " + i + ": " + arr[i].toString() + "</th></tr>");
	}	
}

//this function for filter the number from arr variable and store it to temp variable, show it and inactive the button
function showNumberAfter() {
	//Check Variable one by one 
	for (var i = 0; i < arr.length; i++) 
	{	//Filter arr variable
		if (arr[i]>5) 
		{
			//push or store it in temp variable
			temp.push(arr[i]);
		}
	}

	//Show data from temp variable in HTML using innerHTML function
	for (var j = 0; j < temp.length; j++) {
		document.getElementById("NumberAfter").innerHTML += ("<tr><th> Index " + j + ": " + temp[j].toString() + "</th></tr>");
	}	

	//Disable Button 
	document.getElementById("btnFilter").disabled = true;
	document.getElementById("text").innerText = ("The Number Before is ["+ arr.toString() +"] the length of the array is "+ arr.length +" and when filtered by 5 it will be just ["+ temp.toString() +"] and the number of array is " + temp.length);
}