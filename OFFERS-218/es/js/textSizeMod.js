function textSizeMod()
{
	var elemID = "tocart";
	var box = document.getElementById(elemID);
	if(box!=null)
	{
		if(box.innerHTML.length > 40)
		{ 
			box.style.fontSize = "10px";
			box.style.lineHeight = "50px";
		}
		else if(box.innerHTML.length > 30)
		{ 
			box.style.fontSize = "12px";
			box.style.lineHeight = "50px";
		}
		else if(box.innerHTML.length > 27)
		{ 
			box.style.fontSize = "14px";
			box.style.lineHeight = "50px";
		}
		else if(box.innerHTML.length > 24)
		{ 
			box.style.fontSize = "16px";
			box.style.lineHeight = "50px";
		}
		
	}
}