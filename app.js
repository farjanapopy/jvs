$(document).ready(function(){

	$("#text").keyup(function(){
		var num= $("#text").val();
		num = 70- num.length;
        $("#p").text(num);
        if(num<0){
        	$("#p").addClass("red");
        	$("#p").removeClass("colorless");
        }
        else if(num>0 || num ==0){
        	$("#p").addClass("colorless");
        	$("#p").removeClass("red");
        }
	});


	$("#bname").click(function(){

		var fn = $("#name").text();
		$("#fname").val(fn);
		this.disabled = true;

	});

	$("#bc1").click(function(){

		var fn = $("#c1").text();
		$("#fc1").val(fn);
		this.disabled = true;

	});

	

	$("#bc2").click(function(){

		var fn = $("#c2").text();
		$("#fc2").val(fn);
		this.disabled = true;

	});



	$("#copy").click(function(){
		//disable all button
		$(':button').prop('disabled', true);

		var fn = $("#name").text();
		$("#fname").val(fn);
		

		var fn = $("#c1").text();
		$("#fc1").val(fn);

		var fn = $("#c2").text();
		$("#fc2").val(fn);

		


	});

	

});