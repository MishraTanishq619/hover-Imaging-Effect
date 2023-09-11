let cont = document.querySelectorAll(".cont");

cont.forEach((e) => {
	e.addEventListener("mousemove", (dets) => {
		console.log(dets);
		var img1 = dets.target.querySelector(`img`);
		img1.style.left = dets.x - 200 + "px";
		// img1.style.top = dets.y - 200 + "px";
	});
	e.addEventListener("mouseenter", (dets) => {
		var img1 = dets.target.querySelector(`img`);
		img1.style.opacity = 1;
	});

	e.addEventListener("mouseleave", (dets) => {
		var img1 = dets.target.querySelector(`img`);
		img1.style.opacity = 0;
	});
});

// cont1.addEventListener("mousemove", (dets) => {
// 	// console.log(dets.x);
// 	var img1 = document.querySelector("#cont1 img");
// 	img1.style.left = dets.x - 200 + "px";
// 	img1.style.top = dets.y - 200 + "px";
// 	// img1.style.opacity = 1;
// });

// cont1.addEventListener("mouseenter", (dets) => {
// 	var img1 = document.querySelector("#cont1 img");
// 	img1.style.opacity = 1;
// });

// cont1.addEventListener("mouseleave", (dets) => {
// 	var img1 = document.querySelector("#cont1 img");
// 	img1.style.opacity = 0;
// });
