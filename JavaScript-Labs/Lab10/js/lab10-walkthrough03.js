$(function () {
    // Bước 2: Thử tô vàng ô Password
    // $(':password').css('background-color', 'yellow');

    // Bước 4: Chọn các phần tử con thứ 4, 8, 12...
    $('form :nth-child(4n)').css('background-color', 'yellow');

    // Bước 5: Đổi màu label chứa chữ "word"
    $('label:contains("word")').css('color', 'black');
});
