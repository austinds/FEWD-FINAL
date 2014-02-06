$(".ingredients").click(function(event) {
    if ($(".selected").length > 3) {
        /*alert('Please ONLY choose three ingredients');
        $(".apple").removeClass("selected");
        $(".kale").removeClass("selected");
        $(".cucumber").removeClass("selected");
        $(".ginger").removeClass("selected");
        $(".lemon").removeClass("selected");
        $(".Potassium > p").html(0);
		$(".VitaminA > p").html(0);
		$(".VitaminC > p").html(0);
		$(".Calcium > p").html(0);
		$(".glass").children("img").attr('src', oldSrc);
		$(".description > p").html("    ");
		$(".description > h2").html("Let's try this again! Mmmmm Juice!");
    	*/
    }
    else {


    }
});
var vitP = 0;
var vitA = 0;
var vitC = 0;
var vitCalcium = 0;





$.juiceBar={
	fruits : {}
};
apple={
	color: "red",
	tasteLike: [" A very Sweet plaful dance of light,", " A sugary delight with subtle cidery notes", "delicious light apple flavoring providing subtle sweetness", "Want to know what your ingredient choices will taste like once juiced? Choose up to three ingredients"],
	 vitamins : { "potassium" : 2.9, "vitaminA": 0.42, "calcium": .76, "vitaminC": 6.51}
};

lemon={
	color: "brown",
	tasteLike: [" sour notes zing the tongue,", "a sweet and sour attack of the lemon mouth will delight or surprise", "equalizing the earthy green taste of veggies with the playfully delightful fruitiness"], 
	vitamins : { "potassium" : 1.2, "vitaminA": .05, "calcium": 1.06, "vitaminC": 23.9}
	
};
kale={
	color: "green",
	tasteLike: ["earthy tones and natural feelings,", " dive into the green jungles or taste with earthy bitter tones", "tart and bitter, you can really taste the health flow through your veins"], 
	vitamins : { "potassium" : 25.6, "vitaminA": 136, "calcium": 37, "vitaminC": 326}
};
cucumber={
	color: "green",
	tasteLike: ["lightly flavored and great for the skin,", "mildy green with the cool wattery splashiness with slight bitter earthy flavors", "refreshing simple yet magically great for the skin and eyes"], 
	vitamins : { "potassium" : 6.6, "vitaminA": 1.16, "calcium": 3.37, "vitaminC": 6.56}
	
};
ginger={
	color: "orange",
	tasteLike: ["spicy bite that goes all the way to the bank,", "warm feelings overcome thy stomach and thy heart sores.", " prepare for some bite. Some say that ginger is 'the shark in the fruity waters' if you know what I mean."], 
	vitamins : { "potassium" : 1.46, "vitaminA": 0, "calcium": .3, "vitaminC": .93}

};




$( "#apple").click(function(){
	if ($( "#apple" ).hasClass( "selected" )){
		alert("You've already added this ingredient.")
		return;
	};
	if ($(".selected").length >= 3) {
        alert('Please ONLY choose three ingredients, use reset button to start over');
        return;
    };
	$(".apple").addClass("selected");
	$(".description > h2").html("    ");
	var RandomIndex = Math.floor(Math.random() * 3);
	$(".description > p").append(apple.tasteLike[RandomIndex]); /*insert toggle*/
	//$('img[src="' + oldSrc + '"]').attr('src', newSrcApple);
	$(".glass").children("img").attr('src', newSrcApple);
	vitP = vitP + apple.vitamins.potassium;
	vitA = vitA + apple.vitamins.vitaminA;
	vitC = vitC + apple.vitamins.vitaminC;
	vitCalcium = vitCalcium + apple.vitamins.calcium;
	$(".Potassium > p").html(vitP);
	$(".VitaminA > p").html(vitA);
	$(".VitaminC > p").html(vitC);
	$(".Calcium > p").html(vitCalcium);

});


$( "#lemon").click(function(){
	if ($( "#lemon" ).hasClass( "selected" )){
		alert("You've already added this ingredient.")
		return;
	};
	if ($(".selected").length >= 3) {
        alert('Please ONLY choose three ingredients, use reset button to start over');
        return;
    };
	$(".lemon").addClass("selected");
	/*$(".glass > img").html(src="images/glass-brown.png");*/
	$(".description > h2").html("    ");
	var RandomIndex = Math.floor(Math.random() * 3);
	$(".description > p").append(lemon.tasteLike[RandomIndex]);
	//$('img[src="' + oldSrc + '"]').attr('src', newSrcLemon);
	$(".glass").children("img").attr('src', newSrcLemon);
	vitP = vitP + lemon.vitamins.potassium;
	vitA = vitA + lemon.vitamins.vitaminA;
	vitC = vitC + lemon.vitamins.vitaminC;
	vitCalcium = vitCalcium + lemon.vitamins.calcium;
	$(".Potassium > p").html(vitP);
	$(".VitaminA > p").html(vitA);
	$(".VitaminC > p").html(vitC);
	$(".Calcium > p").html(vitCalcium);
});

$( "#kale").click(function(){
	if ($( "#kale" ).hasClass( "selected" )){
		alert("You've already added this ingredient.")
		return;
	};
	if ($(".selected").length >= 3) {
        alert('Please ONLY choose three ingredients, use reset button to start over');
        return;
    };
	$(".kale").addClass("selected");
	$(".description > h2").html("    ");
	var RandomIndex = Math.floor(Math.random() * 3);
	$(".description > p").append(kale.tasteLike[RandomIndex]);
	//$('img[src="' + oldSrc + '"]').attr('src', newSrcKale);
	$(".glass").children("img").attr('src', newSrcKale);
	vitP = vitP + kale.vitamins.potassium;
	vitA = vitA + kale.vitamins.vitaminA;
	vitC = vitC + kale.vitamins.vitaminC;
	vitCalcium = vitCalcium + kale.vitamins.calcium;
	$(".Potassium > p").html(vitP);
	$(".VitaminA > p").html(vitA);
	$(".VitaminC > p").html(vitC);
	$(".Calcium > p").html(vitCalcium);
});

$( "#cucumber").click(function(){
	if ($( "#cucumber" ).hasClass( "selected" )){
		alert("You've already added this ingredient.")
		return;
	};
	if ($(".selected").length >= 3) {
        alert('Please ONLY choose three ingredients, use reset button to start over');
        return;
    };
	$(".cucumber").addClass("selected");
	$(".description > h2").html("    ");
	var RandomIndex = Math.floor(Math.random() * 3);
	$(".description > p").append(cucumber.tasteLike[RandomIndex]);
	//$('img[src="' + oldSrc + '"]').attr('src', newSrcCucumber);
	$(".glass").children("img").attr('src', newSrcLemon);
	vitP = vitP + cucumber.vitamins.potassium;
	vitA = vitA + cucumber.vitamins.vitaminA;
	vitC = vitC + cucumber.vitamins.vitaminC;
	vitCalcium = vitCalcium + cucumber.vitamins.calcium;
	$(".Potassium > p").html(vitP);
	$(".VitaminA > p").html(vitA);
	$(".VitaminC > p").html(vitC);
	$(".Calcium > p").html(vitCalcium);
});

$( "#ginger").click(function(){
	if ($( "#ginger" ).hasClass( "selected" )){
		alert("You've already added this ingredient.")
		return;
	};
	if ($(".selected").length >= 3) {
        alert('Please ONLY choose three ingredients, use reset button to start over');
        return;
    };
	$(".ginger").addClass("selected");
	$(".description > h2").html("    ");
	var RandomIndex = Math.floor(Math.random() * 3);
	$(".description > p").append(ginger.tasteLike[RandomIndex]);
	//var leon = $(this).children("img").attr("src");
	//$('img[src="' + leon + '"]').attr('src', newSrcGinger);
	$(".glass").children("img").attr('src', newSrcGinger);
	vitP = vitP + ginger.vitamins.potassium;
	vitA = vitA + ginger.vitamins.vitaminA;
	vitC = vitC + ginger.vitamins.vitaminC;
	vitCalcium = vitCalcium + ginger.vitamins.calcium;
	$(".Potassium > p").html(vitP);
	$(".VitaminA > p").html(vitA);
	$(".VitaminC > p").html(vitC);
	$(".Calcium > p").html(vitCalcium);
});

var oldSrc = "images/glass-orange.png";
var newSrcLemon = "images/glass-brown.png";
var newSrcApple = "images/glass-red.png";
var newSrcKale = "images/glass-green.png";
var newSrcCucumber = "images/glass-green.png";
var newSrcGinger = "images/glass-purple.png";
/*$('img[src="' + oldSrc + '"]').attr('src', newSrcLemon);*/


$(".reset").click(function(event) {
    
        $(".apple").removeClass("selected");
        $(".kale").removeClass("selected");
        $(".cucumber").removeClass("selected");
        $(".ginger").removeClass("selected");
        $(".lemon").removeClass("selected");
      	vitP = 0;
		vitA = 0;
		vitC = 0;
		vitCalcium = 0;
		$(".Potassium > p").html(0);
		$(".VitaminA > p").html(0);
		$(".VitaminC > p").html(0);
		$(".Calcium > p").html(0);
		$(".glass").children("img").attr('src', oldSrc);
		$(".description > p").html("    ");
		$(".description > h2").html("Let's try this again! Mmmmm Juice!");
    
});





