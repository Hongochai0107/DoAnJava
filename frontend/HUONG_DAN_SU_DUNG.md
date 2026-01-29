# Hướng dẫn sử dụng hệ thống

## Các chức năng đã được hoàn thiện:

### 1. Đăng ký tài khoản
- Truy cập `/register` hoặc click vào "Register" trong header
- Nhập đầy đủ thông tin: Họ tên, Tên đăng nhập, Mật khẩu
- Click "Đăng Ký" để tạo tài khoản

### 2. Đăng nhập
- Truy cập `/login` hoặc click vào "Login" trong header
- Nhập Tên đăng nhập và Mật khẩu
- Sau khi đăng nhập thành công:
  - Thông tin người dùng sẽ được lưu vào localStorage
  - Header sẽ hiển thị tên người dùng thay vì "My profile"
  - Nút "Login" và "Register" sẽ được thay bằng nút "Logout"

### 3. Xem thông tin cá nhân (Profile)
- Truy cập `/profile` hoặc click vào tên người dùng trong header
- Hiển thị đầy đủ thông tin:
  - ID
  - Tên đăng nhập
  - Họ và tên
  - Email
  - Số điện thoại
  - Địa chỉ
- Có nút "Đăng xuất" để thoát khỏi tài khoản

### 4. Cài đặt thông tin (Settings)
- Truy cập `/setting`
- Cho phép chỉnh sửa thông tin cá nhân:
  - Họ và tên
  - Email
  - Quốc gia
  - Thành phố
  - Địa chỉ
  - Số điện thoại
- Click "Lưu" để cập nhật thông tin
- Thông tin được lưu vào localStorage và giữ nguyên khi reload trang

### 5. Đăng xuất
- Click vào "Logout" trong header
- Hoặc trong trang Profile/Setting
- Sẽ xóa thông tin người dùng khỏi localStorage và chuyển về trang login

### 6. Giỏ hàng (Shopping Cart)
- Truy cập `/shopping-cart`
- Xem các sản phẩm đã thêm vào giỏ
- Header hiển thị số lượng sản phẩm trong giỏ

### 7. Đơn hàng (Orders)
- Truy cập `/orders`
- Xem lịch sử đơn hàng

### 8. Danh sách yêu thích (Wishlist)
- Truy cập `/wishlist`
- Xem các sản phẩm đã yêu thích

## Lưu ý kỹ thuật:

### UserContext
- File: `/src/context/UserContext.js`
- Quản lý trạng thái người dùng toàn cục
- Cung cấp các function:
  - `login(userData)`: Lưu thông tin người dùng
  - `logout()`: Xóa thông tin người dùng
  - `updateUser(updatedData)`: Cập nhật thông tin người dùng
- Tự động lưu/đọc từ localStorage

### Protected Routes
- Các trang Profile, Settings sẽ kiểm tra trạng thái đăng nhập
- Nếu chưa đăng nhập, hiển thị thông báo và nút đăng nhập

### API Backend
- Base URL: `http://localhost:8080/api`
- Endpoints:
  - `POST /users/register`: Đăng ký
  - `POST /users/login`: Đăng nhập
  - Cần đảm bảo backend trả về đầy đủ thông tin user khi login

## Các chức năng cần cải thiện thêm (nếu cần):
1. Validation form đầy đủ hơn
2. Thêm chức năng đổi mật khẩu
3. Upload avatar
4. Xác thực email
5. Quên mật khẩu
6. Bảo mật API với JWT token
