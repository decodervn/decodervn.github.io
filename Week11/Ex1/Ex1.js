// VÍ DỤ 1 : DISPLAY 
//var x = 5;
//x = x + 1 ;
//document.write(x);


//// Ví dụ 2 : A + B = C
//var txta = prompt("Enter number A");
//var txtb = prompt("Enter number B");
//
//if (txta == null || txta == "" || isNaN(txta)) {
//    alert(" Number A is formatted incorrect ");
//} else if(txtb == null || txtb == "" || isNaN(txtb)){
//    alert(" Number B is formatted incorrect");
//} else {
//    var result = parseFloat(txta) + parseFloat(txtb);
//    alert(" Result:\n" +
//        txta + " + " + txtb + " + " + result);
//}




// Ví dụ 3 : DISPLAY
var txta = prompt ("Enter any integer");

if(txta == null || txta == "" || isNaN(txta))
    document.write("<font color='red'> You must enter a number</font>");
else if(txta % 2 == 0)
    document.write("<font color='green'><b>" + txta + " is an even number<b></font>");
else
    document.write("<font color='blue'><i>" + txta + " is an odd number</i></font>");

