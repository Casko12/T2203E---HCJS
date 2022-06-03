var chiphi = 0;
var doanhthu = 0;

for (var i=0; i<30;i++) {
    var ds = [];
    for (var j = 0; j < 27; j++) {
        var r = Math.random();
        r = r * 100;
        r = parseInt(r);
        ds.push(r);
    }
    var sn;
    do {
        sn = prompt("Ngày "+(i+1)+": Nhập số muốn đánh (00-99): ");
        sn = parseInt(sn);
    } while (isNaN(sn) || sn < 0 || sn > 99);
    console.log(sn);

    var st;
    do {
        st = prompt("Nhập số tiền muốn đánh (VNĐ): ");
        sn = parseInt(st);
    } while (isNaN(st) || st <= 0 || st%1000 !=0);
    console.log(sn);
    var count=0;
    for(var k=0; k<ds.length; k++){
        if(ds[k] == sn){
            count++;
        }
    }
    console.log("Hom nay trung "+count+" giai thuong");
    chiphi+=st;
    doanhthu +=(count* (80/23) * st);
}
console.log("Chi phi: "+chiphi+" Doanh thu: "+doanhthu+" Loi nhuan: "+(doanhthu-chiphi));