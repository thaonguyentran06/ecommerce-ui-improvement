# AI Usage Log – E-commerce UI Improvement

## 1. Công cụ AI sử dụng

Trong quá trình thực hiện bài tập khảo sát và cải tiến giao diện tham khảo từ website UNIQLO Việt Nam, tôi sử dụng:

- **Google Gemini:** Hỗ trợ phân tích nghiệp vụ, trải nghiệm người dùng và đề xuất cải tiến cho năm khu vực của website.
- **ChatGPT (OpenAI):** Hỗ trợ rà soát nhận xét AI, đề xuất phương án giao diện, tạo mã nguồn HTML5/CSS3, giải thích cấu trúc code và hướng dẫn kiểm tra, điều chỉnh giao diện.

## 2. Mục đích sử dụng AI

- Phân tích chức năng và trải nghiệm mua sắm ở trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- Đối chiếu, loại bỏ hoặc điều chỉnh các nhận xét chưa có đủ bằng chứng.
- Chọn vấn đề để cải tiến: người dùng cần mở trang chi tiết hoặc phần lựa chọn bổ sung để xem đủ thông tin màu sắc, kích cỡ trước khi mua.
- Đề xuất giao diện **Xem nhanh (Quick View)** ngay trên thẻ sản phẩm của trang danh mục.
- Tạo một trang HTML/CSS mẫu với tối thiểu bốn sản phẩm và bố cục đáp ứng màn hình máy tính, điện thoại.
- Hướng dẫn chạy thử bằng Chrome, sử dụng Chrome DevTools và điều chỉnh CSS theo vấn đề phát hiện.

## 3. Prompt đã sử dụng

### Prompt 1 – Phân tích website bằng Gemini

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
>
> Tôi đang khảo sát website: **UNIQLO Việt Nam – https://www.uniqlo.com/vn/vi/**.
>
> Hãy giúp tôi lập bảng phân tích các khu vực:
> 1. Trang chủ.
> 2. Danh mục sản phẩm.
> 3. Chi tiết sản phẩm.
> 4. Tìm kiếm.
> 5. Giỏ hàng.
>
> Với mỗi khu vực, hãy nêu:
> - Mục đích của chức năng.
> - Thành phần giao diện cần có.
> - Điểm thuận tiện đối với khách hàng.
> - Một vấn đề có thể phát sinh.
> - Một đề xuất cải tiến.
>
> Không khẳng định những tính năng chưa được kiểm chứng.
> Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.

*Ghi chú: Prompt trên được trình bày lại theo yêu cầu của bài nộp, đã điền tên/URL UNIQLO và bỏ phần thông tin giảng viên khỏi mẫu đã cung cấp.*

### Prompt 2 – Đề xuất giao diện bằng ChatGPT

> Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
>
> Tôi muốn cải tiến khu vực: **Trang danh mục sản phẩm của website UNIQLO Việt Nam.**
>
> Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
>
> Hãy đề xuất:
> 1. Bố cục giao diện.
> 2. Các thành phần HTML cần sử dụng.
> 3. Cách tổ chức CSS.
> 4. Cách hiển thị trên máy tính và điện thoại.
> 5. Những điểm cần kiểm tra về khả năng sử dụng.
>
> Trước tiên, hãy giải thích phương án thiết kế. Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.

### Prompt 3 – Tạo mã nguồn bằng ChatGPT

Sau khi thống nhất phương án, tôi yêu cầu ChatGPT **“tiếp 5.3”** để triển khai bước tạo mã nguồn từ phần đề xuất ở Bước 2. Các tiêu chí của bài tập được dùng để hướng dẫn việc tạo mã: có tiêu đề và khu vực sản phẩm; tối thiểu bốn sản phẩm mẫu; mỗi sản phẩm có ảnh, tên, giá và nút thao tác; CSS ở file riêng; giao diện phù hợp máy tính và điện thoại; không dùng backend hoặc cơ sở dữ liệu.

### Prompt 4 – Kiểm tra và sửa giao diện với ChatGPT

Trong các lượt trao đổi tiếp theo, tôi yêu cầu hướng dẫn sử dụng **Chrome DevTools** để xem giao diện điện thoại và phản hồi về lỗi hiển thị font bằng câu **“ê kiểu chữ bị lỗi nữa”**, kèm ảnh chụp vùng “Xem nhanh”. ChatGPT giải thích các thuộc tính CSS liên quan và đưa ra đoạn mã đề xuất chỉnh font.

## 4. Kết quả AI đề xuất

### 4.1. Kết quả từ Gemini

Gemini tạo bảng phân tích năm khu vực: trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Mỗi khu vực có mục đích chức năng, thành phần giao diện, điểm thuận tiện, vấn đề có thể phát sinh và đề xuất cải tiến. Một số phương án gồm tối ưu bố cục trang chủ, bổ sung xem/mua nhanh ở danh mục, cải thiện bộ lọc trên di động, cải thiện tìm kiếm và thao tác trong giỏ hàng.

### 4.2. Kết quả từ ChatGPT

ChatGPT đề xuất cải tiến trang danh mục bằng việc thiết kế thẻ sản phẩm rõ ràng và bổ sung **“Xem nhanh”**. Bản mẫu HTML/CSS được tạo gồm:

- `index.html`: Cấu trúc trang và bốn thẻ sản phẩm mẫu.
- `css/style.css`: Kiểu chữ, màu sắc, bố cục, bộ lọc mẫu và responsive.
- `images/`: Bốn hình minh họa SVG được tạo riêng.
- `README.md`: Giới thiệu dự án và hướng dẫn chạy.

Chức năng “Xem nhanh” mở/thu gọn thông tin bằng `<details>` và `<summary>`. Bộ lọc **Tất cả / Áo / Quần** được mô phỏng bằng CSS `:has()`; màu và cỡ là lựa chọn giao diện mẫu. Trang **không** có giỏ hàng, thanh toán, đăng nhập hoặc quản lý tồn kho thực tế.

## 5. Kiểm tra và điều chỉnh

### 5.1. Kiểm tra lại kết quả phân tích AI

Các nhận xét Gemini được đối chiếu với các hình ảnh, thao tác khảo sát và thông tin website tham khảo. Tôi không dùng các khẳng định chưa có bằng chứng như ảnh lớn chắc chắn làm trang tải chậm, công cụ gợi ý kích cỡ “rất chính xác”, hoặc chức năng nào đó chắc chắn không tồn tại khi chưa kiểm chứng đầy đủ.

Phương án được giữ để làm bản mẫu là cải tiến **trang danh mục sản phẩm** với thao tác “Xem nhanh”; không khẳng định đây là tính năng mua hàng thực tế của website mẫu.

### 5.2. Kiểm tra giao diện được tạo

Tôi đã mở `index.html` trên Google Chrome, quan sát bốn sản phẩm mẫu, thử mở mục **Xem nhanh**, và sử dụng Chrome DevTools để xem bố cục ở chế độ màn hình điện thoại. Ảnh kiểm tra cho thấy thẻ sản phẩm và phần thông tin Xem nhanh có thể hiển thị theo chiều dọc trên màn hình nhỏ.

### 5.3. Vấn đề phát hiện và chỉnh sửa CSS

Khi thử giao diện, tôi nhận thấy chữ trong vùng Xem nhanh, đặc biệt các nhãn **“Màu sắc”** và **“Kích cỡ”**, chưa có kích thước và kiểu hiển thị đồng nhất. Tôi đã chỉnh sửa file `css/style.css` theo hướng dẫn: tăng cỡ chữ và thêm quy tắc ưu tiên font hỗ trợ tiếng Việt (ví dụ `"Segoe UI", Tahoma, Arial, sans-serif`), điều chỉnh độ đậm, chiều cao dòng và khoảng cách chữ.

Các thuộc tính liên quan gồm `font-family`, `font-size`, `font-weight`, `line-height` và `letter-spacing`. Thay đổi chỉ ảnh hưởng cách trình bày, không làm thay đổi cấu trúc HTML hoặc logic đóng/mở Xem nhanh.

**Bước kiểm tra cuối:** Sau khi lưu CSS, cần tải lại trang để xác nhận font hiển thị nhất quán và chụp ảnh sau sửa làm minh chứng. Không coi việc đã sửa mã là bằng chứng chắc chắn rằng mọi thiết bị đều hiển thị giống nhau.

## 6. Phần tôi hiểu và có thể giải thích

- **HTML5:** Tạo cấu trúc nội dung bằng `header`, `nav`, `main`, `section`, `article` và các thành phần sản phẩm.
- **CSS3:** Quy định màu sắc, font chữ, khoảng cách, kích thước và cách sắp xếp.
- **CSS Grid:** Tổ chức danh sách sản phẩm thành nhiều cột; số cột có thể thay đổi theo kích thước màn hình.
- **Flexbox:** Căn chỉnh các nội dung nằm trên cùng hàng, ví dụ thanh điều hướng và các lựa chọn.
- **Media Queries:** Thay đổi quy tắc trình bày khi màn hình hẹp để dễ sử dụng trên điện thoại.
- **`<details>` và `<summary>`:** Tạo phần nội dung Xem nhanh có thể mở/đóng mà không cần JavaScript.
- **CSS `:has()`:** Cho phép áp dụng kiểu hiển thị dựa trên trạng thái phần tử con, phục vụ bộ lọc loại sản phẩm trong bản mẫu.
- **`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`:** Điều chỉnh font, cỡ chữ, độ đậm, chiều cao dòng và khoảng cách ký tự.

**Kết luận:** Các công cụ AI hỗ trợ phân tích, đề xuất và tạo mã nguồn ban đầu; tôi kiểm tra kết quả, xác định những nhận xét cần điều chỉnh và thực hành sửa giao diện để hiểu rõ hơn cách HTML5/CSS3 hoạt động.
