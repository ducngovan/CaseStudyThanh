// lop anh
let Image = function () {
    this.index = 0;
// tang anh
    this.increaseIndex = function () {
        if (this.index >= 0 && this.index < images.length -1) {
            this.index++;
        } else {
            this.index = 0;
        }
    };
// thay doi anh
    this.setImage = function (src) {
        this.image = src;
    };
// lay anh
    this.getImage = function () {
        return this.image;
    };
// chuyen anh
    this.changeImage = function () {
        this.increaseIndex();
        this.setImage(images[this.index]);
        document.getElementById("anh").src = this.getImage();
    }

};
// lop cau tra loi
let Answer = function () {

    this.setAnswer = function () {
        this.answer = document.getElementById("inp").value;
    };
// lay cau tra loi
    this.getAnswer = function () {
        return this.answer;
    };
    // lop check cau tra loi
    this.check =  function () {
        this.setAnswer();
        if (this.answer === answers[image.index]) { /* so sanh cau tra loi va ket qua  */
            alert("Hợp lí");
            image.changeImage();
            document.getElementById("inp").value = null; /* rong thanh tra loi */
            point.increasePoint();
            point.getPoint();

            if (image.index === 0 ) {
                alert("Bạn đã thắng cuộc");
                point.resetPoint();
            }
        } else if (this.answer === "") { /* neu thanh tra loi trong */
            alert("Bạn chưa nhập câu trả lời!");
        } else {
            alert("Sai mất rồi!"); /* neu ket qua sai */
            document.getElementById("inp").value = null;/* reset thanh tra loi*/
        }
    }
}
// lop diem
let Point = function () {
    this.point = 0;
// tang diem
    this.increasePoint = function () {
        this.point += 10;
    };
// lay diem vao html
    this.getPoint = function () {
        return document.getElementById("point").innerHTML = "Điểm của bạn: " + this.point;
    };
    ;
// reset diem khi thang
    this.resetPoint = function () {
        if (image.index === 0) {
            this.point = 0;
            document.getElementById("point").innerHTML = "Điểm của bạn: ";
        }
    }
};

// ham anh va cau tra loi
let images = [
    "Image/baocao.jpg",
    "Image/baotay.jpg",
    "Image/baotu.jpg",
    "Image/chimboica.jpg",
    "Image/giatruyen.jpg",
    "Image/matuy.jpg"];
let answers = [
    "báo cáo",
    "bao tay",
    "bao tử",
    "chim bói cá",
    "gia truyền",
    "ma túy"];
// khai bao cac doi tuong cua bai
let image = new Image();
let answer = new Answer();
let point = new Point();

