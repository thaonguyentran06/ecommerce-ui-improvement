$(function () {
    var img = $('<img src="images/art/thumbs/13030.jpg">');
    var panel = $('.panel');

    // Bước 2: Thêm ảnh phía sau panel
    // panel.after(img);

    // Bước 3: Thêm ảnh phía trước panel
    // panel.before(img);

    // Bước 4: Thêm ảnh vào cuối panel
    // panel.append(img);

    // Bước 5: Thêm ảnh vào đầu panel
    // panel.prepend(img);

    // Bước 6: Cách viết khác của append
    // img.appendTo(panel);

    // Bước 7: Cách viết khác của prepend
    // img.prependTo(panel);

    // Bước 8: Thêm ảnh trước panel
    img.insertBefore(panel);
});
