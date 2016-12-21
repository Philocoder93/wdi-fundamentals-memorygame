var bubbleSort = function (a,b,c,d) {
	var var1 = a;
	var var2 = b;
	var var3 = c;
	var var4 = d;
	while ((var1<var2)||(var2<var3)||(var3<var4)) {
		if (var1<var2) {
			var xtraVar = var2;
			var var2 = var1;
			var var1 = xtraVar;
		}
		else if (var2<var3) {
			var xtraVar = var3;
			var var3 = var2;
			var var2 = xtraVar;
		}
		else if (var3<var4) {
			var xtraVar = var4;
			var var4 = var3;
			var var3 = xtraVar;
		}
		else {
			var var1 = 1;
			var var2 = 1;
			var var3 = 1;
			var var4 = 1;
			console.log("Error");
		}
	}
	console.log(var1);
};