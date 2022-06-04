function checkResult(){
    var luckyNumbers = [];
    var ips = document.getElementsByClassName("ip");
    for (var i = 0;i< ips.length;i++){
        var n = parseInt(ips[i].value);
        if (isNaN(n) || n < 0 || n > 45) {
            document.getElementById("msg").style.display = "block";
            return;
        }
        luckyNumbers.push(n);
    }

    // tạo ngẫu nhiên 6 số từ 0 ->45
    var randomNumbers = [];// mảng chứa 6 số ngẫu nhiên
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 45;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (luckyNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }

    switch (dem){
        case 6: alert("Chúc mừng bạn đã trúng 100 tỷ");break;
        case 5: alert("Chúc mừng bạn đã trúng 10 triệu");break;
        case 4: alert("Chúc mừng bạn đã trúng 300k");break;
        case 3: alert("Chúc mừng bạn đã trúng 50k");break;
        default: alert("Chúc bạn may mắn lần sau");
    }

}