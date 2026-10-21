# E-commerce UI Improvement

## 1. Giới thiệu

Dự án xây dựng giao diện cải tiến cho trang danh mục sản phẩm thương mại điện tử, lấy cảm hứng từ website UNIQLO Việt Nam.

Mục tiêu là cải thiện cách hiển thị thông tin sản phẩm và bổ sung chức năng **Xem nhanh (Quick View)**, giúp người dùng tham khảo màu sắc, kích cỡ và giá bán ngay trên trang danh mục mà không cần chuyển sang trang chi tiết.

Đây là website minh họa phục vụ mục đích học tập, không phải website chính thức của UNIQLO.

## 2. Website tham khảo

- **Tên website:** UNIQLO Việt Nam
- **URL:** https://www.uniqlo.com/vn/vi/
- **Khu vực khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- **Khu vực lựa chọn cải tiến:** Trang danh mục sản phẩm.

Qua khảo sát, nhóm chức năng được lựa chọn cải tiến là cách hiển thị thông tin và thao tác Xem nhanh tại thẻ sản phẩm, nhằm hỗ trợ người dùng tiếp cận thông tin thuận tiện hơn.

## 3. Chức năng

Website mẫu được xây dựng với các chức năng:

- Hiển thị danh sách gồm 4 sản phẩm mẫu với hình ảnh, tên sản phẩm, giá bán và thông tin màu sắc.
- Hiển thị giá khuyến mãi và giá gốc đối với sản phẩm minh họa có giảm giá.
- Lọc sản phẩm theo ba lựa chọn: Tất cả, Áo và Quần.
- Sử dụng chức năng Xem nhanh (Quick View) để mở rộng hoặc thu gọn thông tin sản phẩm ngay tại trang danh mục.
- Hiển thị các lựa chọn màu sắc và kích cỡ trong phần Xem nhanh.
- Tự điều chỉnh bố cục trên máy tính, máy tính bảng và điện thoại.

**Giới hạn:** Chức năng lọc chỉ hoạt động theo loại sản phẩm. Màu sắc và kích cỡ là các lựa chọn minh họa. Website chưa hỗ trợ thêm vào giỏ hàng, thanh toán hoặc cập nhật tồn kho thực tế.

## 4. Công nghệ sử dụng

- **HTML5:** Xây dựng cấu trúc trang và các thẻ sản phẩm.
- **CSS3:** Thiết kế giao diện, màu sắc, kiểu chữ và hiệu ứng.
- **CSS Grid:** Tổ chức danh sách sản phẩm theo dạng lưới.
- **Flexbox:** Căn chỉnh các thành phần giao diện.
- **Media Queries:** Điều chỉnh bố cục theo kích thước màn hình.
- **HTML details/summary:** Tạo chức năng Xem nhanh mà không cần JavaScript.
- **CSS :has():** Thực hiện bộ lọc sản phẩm theo loại trên trình duyệt hỗ trợ.

Website không sử dụng JavaScript, backend, cơ sở dữ liệu hoặc thư viện bên ngoài.

## 5. Cách chạy website

1. Tải mã nguồn từ repository GitHub về máy và giải nén.
2. Mở thư mục dự án bằng Visual Studio Code.
3. Mở tệp `index.html` bằng Google Chrome.
4. Kiểm tra danh sách sản phẩm, bộ lọc Áo/Quần và chức năng Xem nhanh.
5. Để kiểm tra giao diện điện thoại, nhấn `Ctrl + Shift + I` để mở Chrome DevTools, sau đó nhấn `Ctrl + Shift + M` để bật chế độ mô phỏng thiết bị di động.

Website có thể chạy trực tiếp bằng trình duyệt mà không cần cài đặt máy chủ.

## 6. Cải tiến đã thực hiện

**Vấn đề ban đầu:** Khi tham khảo nhiều sản phẩm trong danh mục, người dùng có thể cần mở trang chi tiết hoặc khu vực lựa chọn bổ sung để xem thông tin màu sắc, kích cỡ, làm tăng số thao tác.

**Giải pháp cải tiến:**

- Thiết kế thẻ sản phẩm với hình ảnh, tên và giá rõ ràng.
- Bổ sung chức năng Xem nhanh để mở rộng thông tin ngay tại thẻ sản phẩm.
- Tạo bộ lọc theo loại sản phẩm.
- Điều chỉnh bố cục responsive cho máy tính và điện thoại.
- Cải thiện cách hiển thị chữ tiếng Việt trong phần Xem nhanh thông qua các thuộc tính CSS như `font-family`, `font-size`, `font-weight`, `line-height` và `letter-spacing`.

Các thay đổi được thực hiện nhằm cải thiện khả năng đọc, thao tác và tiếp cận thông tin sản phẩm.

## 7. Hỗ trợ từ AI

Trong quá trình thực hiện dự án, hai công cụ AI được sử dụng gồm:

**Google Gemini:**
- Hỗ trợ phân tích chức năng và trải nghiệm người dùng tại năm khu vực của website UNIQLO.
- Đề xuất những phương án cải tiến giao diện và quy trình mua sắm.

**ChatGPT:**
- Hỗ trợ đối chiếu các nhận xét từ Gemini với thông tin khảo sát.
- Đề xuất bố cục giao diện và chức năng Xem nhanh.
- Hỗ trợ tạo mã nguồn HTML5/CSS3 và hình ảnh sản phẩm minh họa.
- Giải thích mã nguồn và hướng dẫn kiểm tra giao diện.
- Hỗ trợ xác định cách điều chỉnh font chữ và khả năng hiển thị tiếng Việt.

**Phần sinh viên thực hiện:** Chạy thử website trên Google Chrome, kiểm tra bố cục bằng Chrome DevTools, thử các chức năng và chỉnh sửa CSS dựa trên vấn đề nhận thấy trong quá trình thực hành.

Chi tiết về các prompt và quá trình sử dụng AI được trình bày trong file `AI_USAGE.md`.

---

**Ghi chú:** Website phục vụ mục đích học tập. Hình ảnh sản phẩm được tạo riêng để minh họa, không phải ảnh sản phẩm chính thức của UNIQLO. Tên và giá sản phẩm là dữ liệu mẫu.
