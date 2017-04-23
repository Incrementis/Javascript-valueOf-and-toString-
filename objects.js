function calculate()
{
	//Init Variables 
	var str 	= document.getElementById('toStr');
	var num 	= document.getElementById('valOf');
	var result 	= document.getElementById('result');
	
	
	//Setting Object values
	var container = 
	{
		toString: function()
		{
			return str.value;
		},
		valueOf: function()
		{
			return num.value;
		}
	};
	
	
	//Checking which of the two container elements are used by adding a string to it
	result.innerHTML = "any string" + container;

}