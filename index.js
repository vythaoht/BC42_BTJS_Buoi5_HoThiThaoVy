//BT1:
//input: Nhập điểm chuẩn, điểm 3 môn thi của thí sinh, chọn khu vực (A,B,C,X), đối tượng dự thi (1,2,3,0)
//output: xuất ra Đậu/Rớt + tổng số điểm đat đc
//progress:
document.getElementById('result').onclick = function () {
    let benchMark = +document.getElementById('benchMark').value;
    let subject1 = +document.getElementById('subject1').value;
    let subject2 = +document.getElementById('subject2').value;
    let subject3 = +document.getElementById('subject3').value;
    let area = document.getElementById('area').value;
    let type = document.getElementById('type').value;

    let sum3subjects = calcSum3Subjects(subject1, subject2, subject3);
    console.log(sum3subjects);

    let sumPrior = calcSumPrior(area, type);
    console.log(sumPrior);

    let sum = calcSum(sum3subjects, sumPrior);

    if (sum >= benchMark && testSubjectIsNotEqual0(subject1, subject2, subject3)) {
        document.getElementById('showResults').innerHTML = "Đậu - " + sum + " điểm";
    } else {
        document.getElementById('showResults').innerHTML = "Rớt - " + sum + " điểm";
    }
}

function calcSum3Subjects(sub1, sub2, sub3) {
    return sub1 + sub2 + sub3;
}
function calcSumPrior(area, type) {
    let result = 0;
    switch (area) {
        case "A":
            result += 2;
            break;
        case "B":
            result += 1;
            break;
        case "C":
            result += 0.5;
            break;
        default:
            break;
    }
    switch (type) {
        case "1":
            result += 2.5;
            break;
        case "2":
            result += 1.5;
            break;
        case "3":
            result += 1;
            break;
        default:
            break;
    }
    return result;
}

function calcSum(n1, n2) {
    return n1 + n2;
}
function testSubjectIsNotEqual0(sub1, sub2, sub3) {
    return sub1 > 0 && sub2 > 0 && sub3 > 0;
}

//BT2:
//input: nhập thông tin và số điện tiêu thụ
//output: tính tiền điện theo lũy tiến
//progress:
document.getElementById('payment').onclick = function () {
    let name = document.getElementById('name').value;
    let consumption = +document.getElementById('consumption').value;
    let result = 0;

    const GIA_50KW_DAU = 500;
    const GIA_51KW_DEN_100KW = 650;
    const GIA_101KW_DEN_200KW = 850;
    const GIA_201KW_DEN_350KW = 1100;
    const GIA_351KW_TRO_LEN = 1300;

    if (consumption < 51) {
        result = consumption * 500;
    } else if (consumption < 101) {
        result = (50 * GIA_50KW_DAU) + ((consumption - 50) * GIA_51KW_DEN_100KW);
    } else if (consumption < 201) {
        result = (50 * GIA_50KW_DAU) + (50 * GIA_51KW_DEN_100KW) + ((consumption - 100) * GIA_101KW_DEN_200KW);
    } else if (consumption < 351) {
        result = (50 * GIA_50KW_DAU) + (50 * GIA_51KW_DEN_100KW) + (100 * GIA_101KW_DEN_200KW) + ((consumption - 200) * GIA_201KW_DEN_350KW);
    } else {
        result = (50 * GIA_50KW_DAU) + (50 * GIA_51KW_DEN_100KW) + (100 * GIA_101KW_DEN_200KW) + (150 * GIA_201KW_DEN_350KW) + ((consumption - 350) * GIA_351KW_TRO_LEN);
    }
    document.getElementById('showPayment').innerHTML = result + " VND";
}
