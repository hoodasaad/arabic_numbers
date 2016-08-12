function arabic_numbers(obj){
	if(typeof(obj) == 'string' && obj.length > 0){
	   var Sobj = obj;
	}else{
		//all numbers in page will converted
		var Sobj = 'body';
	}
	var AobJ = $(Sobj);
	AobJ.find("*:not(iframe)").andSelf().contents().each(function() {
		/*skip iframe like youtube vimo etc.. because jquery this function cannot access iframe https: content  */
	    if (this.nodeType === 3 && this.parentNode.localName != "style" && this.parentNode.localName != "script"  && this.parentNode.localName != "iframe") {
		    this.nodeValue = this.nodeValue.replace(this.nodeValue.match(/[0-9]*\.[0-9]+/), function(txt){
			    return txt.replace(/\./,',');
			});		    	
	        this.nodeValue = this.nodeValue.replace(/\d/g, function(v) {
	            return String.fromCharCode(v.charCodeAt(0) + 1584);
	        });
	    }
	});		
}

/* By http://www.msa3d.com => Mahmoud Saad */