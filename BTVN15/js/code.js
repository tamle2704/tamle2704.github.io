$("#dark").click(function(){
	$(".container").addClass('dark');
});
$("#light").click(function(){
	$(".container").removeClass('dark');
});

//Xóa giá trị
function clearEntry() {
	let output2 = document.getElementById("output2").innerText;
	if (output2 != 0) {
		document.getElementById("output2").innerText = 0;
	}
	else {
		document.getElementById("output2").innerText = 0;
	} 
}

//Xóa tất cả
function clearAll() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 != 0 && output2 != 0) {
		document.getElementById("output1").innerText = 0;
		document.getElementById("output2").innerText = 0;
	}
	else {
		document.getElementById("output1").innerText = 0;
		document.getElementById("output2").innerText = 0;
	} 
}

//Xóa 1 kí tự cuối
function clearEntryOneChar() {
	let output2 = document.getElementById("output2").innerText;
	if (output2.length > 0) {
		let slice = output2.slice(0,output2.length-1);
		document.getElementById("output2").innerText = slice;
	}
	if (output2.length == 1) {
		document.getElementById("output2").innerText = 0;
	}
}

//Thêm số hoặc phép tính
function addNumber(number) {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output2 == 0) {
		document.getElementById("output2").innerText = number.innerHTML;
		return;
	}
	else if (output2 == oldValue) {
		document.getElementById("output2").innerText = number.innerHTML;
		document.getElementById("output1").innerText = 0;
	} 
	else {
		document.getElementById("output2").innerText += number.innerHTML;
		return;
	}
}

//Phép chia
function divide() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 == 0) {
		document.getElementById("output1").innerText = output2 + " " + unescape('%F7') + " ";
		document.getElementById("output2").innerText = 0;
		return;
	} 
	else if (typeof(output1.charAt(output1.length)) != "number" && output2 != 0) {
		document.getElementById("output1").innerText += " " + output2 + " " + unescape('%F7') + " ";
		document.getElementById("output2").innerText = 0;
		return;
	}
}

//Phép nhân
function multiply() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 == 0) {
		document.getElementById("output1").innerText = output2 + " " + unescape('%D7') + " ";
		document.getElementById("output2").innerText = 0;
		return;
	} else if (typeof(output1.charAt(output1.length)) != "number" && output2 != 0) {
		document.getElementById("output1").innerText += " " + output2 + " " + unescape('%D7') + " ";
		document.getElementById("output2").innerText = 0;
		return;
	}
}

//Phép trừ
function subtraction() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 == 0) {
		document.getElementById("output1").innerText = output2 + " - ";
		document.getElementById("output2").innerText = 0;
		return;
	} else if (typeof(output1.charAt(output1.length)) != "number" && output2 != 0) {
		document.getElementById("output1").innerText += " " + output2 + " - ";
		document.getElementById("output2").innerText = 0;
		return;
	}
}

//Phép cộng
function summation() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 == 0) {
		document.getElementById("output1").innerText = output2 + " + ";
		document.getElementById("output2").innerText = 0;
		return;
	} else if (typeof(output1.charAt(output1.length)) != "number" && output2 != 0) {
		document.getElementById("output1").innerText += " " + output2 + " + ";
		document.getElementById("output2").innerText = 0;
		return;
	}
}

// Dấu bằng
var oldValue = 0;
function equal() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1 == 0 && output2 == 0) {
		document.getElementById("output1").innerText = 0;
		document.getElementById("output2").innerText = 0;
	}
	else if (output1 == 0 && output2 != 0) {
		document.getElementById("output2").innerText = output2;
	}
	else if (output1 != 0 && typeof(output1.charAt(output1.length)) != "number") {
		for (let i=0; i<output1.length; i++) {
			if(output1[i] == unescape('%F7')) {
				output1 = output1.replace(output1.charAt(i),"/");
			}
			if(output1[i] == unescape('%D7')) {
				output1 = output1.replace(output1.charAt(i),"*");
			}
		}
		let valueStr = output1 + " " + output2;
		for (let j=0; j<valueStr.length; j++) {
			if(valueStr[j] == ",") {
				valueStr = valueStr.replace(valueStr.charAt(j),".");
			}
		}
		// console.log(valueStr);
		document.getElementById("output1").innerText = 0;
		document.getElementById("output2").innerText = eval(valueStr);
		oldValue = eval(valueStr);
		return oldValue;
	}
}

// Thêm dấu phẩy -> số thập phân
function addComma() {
	document.getElementById("output2").innerText += ".";
	return;
} 

// Phần trăm
function percent() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1.charAt(output1.length) != " " && output2 != 0) {
		document.getElementById("output2").innerText = output2/100;
		return;
	}
}

// Căn bậc 2
function radic() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1.charAt(output1.length) != " " && output2 != 0) {
		document.getElementById("output2").innerText = Math.sqrt(output2);
		return;
	}
}

// Bình phương
function permissionTwo() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1.charAt(output1.length) != " " && output2 != 0) {
		document.getElementById("output2").innerText = output2 * output2;
		return;
	}
}

// Phân số 1/x
function onePartX() {
	let output1 = document.getElementById("output1").innerText;
	let output2 = document.getElementById("output2").innerText;
	if (output1.charAt(output1.length) != " " && output2 != 0) {
		document.getElementById("output2").innerText = 1 / output2;
		return;
	}
}

// thêm dấu "-" trước số
function plusmn() {
	let output2 = document.getElementById("output2").innerText;
	if (output2 > 0) {
		document.getElementById("output2").innerText = "-" + output2;
	} else if (output2 < 0) {
		document.getElementById("output2").innerText = Math.abs(output2);
	}
	else {
		document.getElementById("output2").innerText = 0;
	}
}