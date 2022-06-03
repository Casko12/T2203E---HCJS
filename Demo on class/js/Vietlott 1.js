function jackpot() {
    var randomNumbers = [];
    var ticketNumbers = [];

// tao ngau nhien 6 so tu 0->45
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 46;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }

//yeu cau nhap 6 so khac nhau
    while (ticketNumbers.length < 6) {
        var n = prompt("Nhập số từ 0->45:");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumbers.includes(n) && n >= 0 && n <= 45) {
            ticketNumbers.push(n);
        }
    }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (ticketNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }

        switch (dem) {
            case 6:
                alert("Chúc mừng, bạn đã trúng 100 tỷ");
                break;
            case 5:
                alert("Chúc mừng, bạn đã trúng 10 triệu");
                break;
            case 4:
                alert("Chúc mừng, bạn đã trúng 300 nghìn");
                break;
            case 3:
                alert("Chúc mừng, bạn đã trúng 50 nghìn");
                break;
            default:
                alert("Chúc may mắn lần sau");
        }
}