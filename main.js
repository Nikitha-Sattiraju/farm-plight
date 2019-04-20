$("body").on("click", ".container", function (e) {
	// e.preventDefault();

	console.log("Hello, world!");

	// const $this_button = $(this);
	// Since this is not a filter and there is no select field, you have to add :checked. It allows jQuery to call the value of the checked button alone

	const crop_type = $("input[name='crop']:checked");
	// console.log(crop_type.val());
	console.log("Crop Type" + crop_type);
	// "each" function loops over every element in text class and removes the class active from each one of them
	$(".text").each(function () {
		$(this).removeClass("active");
	})
	// Finds the id of the selected element and makes it active
	$("#" + crop_type.val()).addClass("active");

	console.log("Hello again, world!");


	const land_type = $("input[name='size']:checked");

	console.log("Land Type" + land_type);
	//
	// $(".text1").each(function () {
	// 	$(this).removeClass("active");
	// })

	// Instead of finding the attribute like we did with the inputs and math assignment and then calculating, directly call the attribute because each crop has a different data-id unlike in the tariffs where there eas only one data-id for multiple elements. That's why code 1 didn't work.

	// This is calling the yield per acre for the selected crop

	let yield_acre = crop_type.attr('data-yield');

	// This is calling the size of the selected land

	let size = land_type.attr('value');

	let res = yield_acre * size;

	console.log("Result" + res);

	// This finds the spans in the class result to show the calculated values

	$('#land_yield').text(res);

	// This is finding the name of the crop
	$('#crop_type').text(crop_type.val());

	// only when the result has a numeric value, the text will show up. If its Nan, it won't
	if (res && crop_type.val()) {
		$(".result").addClass("active");
	}

	// });



	// $('.result').each(function () {
	// 	$(this).removeClass("active");
	// })

	$(".make").on("click", function (e) {

		e.preventDefault();

		// Activates the hidden class

		$(".returns").addClass("active");

		let price = crop_type.attr('data-earn');

		console.log("Price" + price);

		let gross_return = price * res;

		console.log("Gross Return" + gross_return);

		$('#pre_earning').text(gross_return);

	})


	$(".cost").on("click", function (e) {
		e.preventDefault();

		$(".earning").addClass("active");

		let cost = crop_type.attr('data-cost');

		console.log("Cost" + cost);

		let total_cost = cost * res;

		console.log("Total cost" + total_cost);

		let take_home = total_cost - res;

		console.log("Take home" + take_home);

		let lesser_than = ((80000 - take_home) / 80000) * 100;

		// math.round removes decimal points

		lesser_than = Math.round(lesser_than);

		$("#percentage").text(lesser_than);

		$('#post_earning').text(take_home);

	})

	$(".expenses").on("click", function (e) {
		e.preventDefault();

		$(".spending").addClass("active");

		let expense = land_type.attr('data-spend');

		console.log("Expenses" + expense);
		let cost1 = crop_type.attr('data-cost');

		let total_cost1 = cost1 * res;
		let take_home1 = total_cost1 - res;


		console.log(take_home1);

		let left = take_home1 - expense;

		console.log("Left With" + left);

		$('#spend').text(left);
	})



	// Code 1 didn't work
	// const $this_size = $(this);
	// const $this_yield = $this_size.closest("[data-yield]");
	// const $span_land_yield = $this_yield.find("#land_yield");
	// const $span_crop_name = $this_yield.find("#crop_type");
	// let end = $this_yield.find(".grow").find("yield");
	// let size = $this_yield.find(".land").find("value");
	//
	// end = parseFloat(end);
	// size = parseFloat(size);
	//
	// let end_result = end * size;
	//
	// $span_land_yield.text(end_result);
	// $span_crop_name.text(crop_type);

});