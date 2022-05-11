function validate()
	{
		var x=document.getElementById("tickets").value;
		var y=document.getElementById("childrens").value;
		var date=document.book.showdate.value;
		var currdate=new Date();
		var curr=Date.parse(currdate.toString());
		var bookdate=Date.parse(date);
		var adult=x*200;
		var childern=y*100;
		var total=adult+childern;

		if(bookdate<curr)
		{
		alert("Show date and time should be either current date or future date");
	    return false;
		}
		if(y>=x)
		{
 		 alert("No of tickets should be greater than the no of children");
	return false;

		}
		if(y<x)
		{
		document.getElementById("result").innerHTML="Your approximate ticket amount is "+total+" INR";
	    return false;

		}
		}