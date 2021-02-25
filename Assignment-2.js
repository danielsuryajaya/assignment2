var name = "Budi";
var age = 17;
var money = 100000;
var drink1 = "Juice";
var drink2 = "Anggur";
var harga1 = 50000;
var harga2 = 300000;
var sisa1 = money - harga1;
var sisa2 = money - harga2;

if (name !== "") {
    if (age >= 0 && age < 17) {
        console.log(name);
        console.log(drink1);
        console.log("Harga Minuman Anda : " + harga1);
        if (money < harga1) {
            console.log("Uang tidak cukup, Anda harus pulang");
        } else if (money >= harga1){
            console.log("Anda bisa pesan minum, sisa uang anda : " + money + ", dan ganti : " + sisa1);
        }
    } else if (age >= 17) {
        console.log(name);
        console.log(drink2);
        console.log("Harga Minuman Anda : "+harga2);
        if (money < harga2) {
            console.log("Uang tidak cukup, Anda harus pulang");
        } else if (money >= harga2){
            console.log("Anda bisa pesan minum, sisa uang anda : " + money + ", dan ganti : " + sisa2);
        }
    }
} else {
    console.log("Anda tidak boleh masuk!")
}