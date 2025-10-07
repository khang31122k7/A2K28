// script.js

// Bạn có thể thêm các tính năng tương tác tại đây.
document.querySelector('.search-container button').addEventListener('click', function() {
    const searchQuery = document.querySelector('.search-container input').value;
    alert(`Bạn đã tìm kiếm: ${searchQuery}`);
});

// Bạn có thể thêm sự kiện cho nút Đăng nhập và Đăng ký nếu cần
document.querySelector('.auth-container button:nth-child(1)').addEventListener('click', function() {
    alert('Đăng nhập');
});

document.querySelector('.auth-container button:nth-child(2)').addEventListener('click', function() {
    alert('Đăng ký');
});
