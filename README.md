# E-commerce UI Improvement — UNIQLO tham khảo

Đây là **bài tập mô phỏng giao diện** được lấy cảm hứng từ việc khảo sát danh mục sản phẩm UNIQLO Việt Nam. Đây **không phải** trang web chính thức của UNIQLO.

## 1. Nội dung cải tiến
- Có **4 thẻ sản phẩm mẫu**, gồm ảnh minh họa, tên, giá và nút **Xem nhanh**.
- Xem nhanh bằng thẻ HTML5 `<details>` và `<summary>`; chọn màu/cỡ minh họa bằng nút radio.
- Có bộ lọc **Tất cả / Áo / Quần** chạy bằng CSS `:has()` trên trình duyệt hiện đại.
- Responsive cho máy tính, máy tính bảng và điện thoại.

## 2. Công nghệ
HTML5 và CSS3, không JavaScript, thư viện bên ngoài, backend, database hay thanh toán.

## 3. Cách chạy
1. Giải nén toàn bộ thư mục, giữ nguyên `css/` và `images/`.
2. Mở `index.html` bằng Google Chrome hoặc trình duyệt hiện đại.
3. Nhấn **Xem nhanh** tại một sản phẩm để mở/đóng thông tin.
4. Chọn **Tất cả / Áo / Quần** để thử bộ lọc.
5. Bật chế độ điện thoại bằng F12 → Toggle device toolbar (Ctrl + Shift + M).

## 4. Cấu trúc
```
uniqlo-ui-improvement/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── ao-thun.svg
    ├── ao-so-mi.svg
    ├── ao-cardigan.svg
    └── quan-suong.svg
```

## 5. Phạm vi bản mẫu
- Hình vector được tạo riêng để minh họa, không sử dụng ảnh UNIQLO.
- Sản phẩm và giá đều là dữ liệu mẫu, không phải hàng bán thực tế.
- Chưa hỗ trợ cập nhật giỏ hàng, thanh toán hoặc tồn kho.
- Bộ lọc chỉ thực hiện theo loại sản phẩm; lựa chọn màu/cỡ chỉ là thao tác giao diện.

## 6. Hướng dẫn tự kiểm tra và chỉnh sửa (Nhiệm vụ 5.4)
Hãy tự mở trang, thử trên desktop/mobile, xem lại hình ảnh, giá và nút, **tự phát hiện và sửa ít nhất một điểm**, sau đó ghi lại: vấn đề, dòng HTML/CSS đã sửa, nguyên nhân và kết quả. Không ghi rằng bạn đã tự sửa trước khi thực sự thực hiện.
