<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// require 'phpmailer/PHPMailer.php';
// require 'phpmailer/SMTP.php';
// require 'phpmailer/Exception.php';

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
// Kết nối database
$host = "localhost";
$username = "u516258274_vingrandpark";     // ← Thay bằng của bạn
$password = "Cuong7@gmail";     // ← Thay bằng của bạn
$database = "u516258274_vingrandpark";     // ← Thay bằng của bạn
$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}
if (isset($_POST['guimail2'])) {
    file_put_contents('log.txt', "Form được submit lúc: " . date("H:i:s") . "\n", FILE_APPEND);
    $hoten = $_POST['ten1'] ?? '';
    $dienthoai = $_POST['dienthoai1'] ?? '';
    $email = $_POST['email1'] ?? '';
    $noidung = $_POST['noidung1'] ?? '';
    // Lưu vào database
    $stmt = $conn->prepare("INSERT INTO form_submissions (hoten, dienthoai, email, noidung) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $hoten, $dienthoai, $email, $noidung);
    $stmt->execute();
    $stmt->close();
    // $mail = new PHPMailer(true);
    // try {
    //     // Cấu hình SMTP Gmail
    //     $mail->isSMTP();
    //     $mail->Host = 'smtp.gmail.com';
    //     $mail->SMTPAuth = true;
    //     $mail->Username = 'cuongnguyen71195@gmail.com'; // Gmail của bạn
    //     $mail->Password = 'vdhz fgkl ibuy dcpe'; // Mật khẩu ứng dụng từ Gmail
    //     $mail->SMTPSecure = 'ssl'; // hoặc 'ssl'
    //     $mail->Port = 465; // hoặc 465 nếu dùng ssl

    //     // Người gửi & nhận
    //     $mail->setFrom('cuongnguyen71195@gmail.com', 'Vinhome Green City');
    //     $mail->addAddress('cuongnguyen71195@gmail.com'); // Có thể là bạn hoặc email khác

    //     // Nội dung
    //     $mail->isHTML(true);
    //     $mail->Subject = 'Khách hàng đăng ký thông tin';
    //     $mail->Body = "
    //         <h3>Thông tin khách hàng</h3>
    //         <p><strong>Họ tên:</strong> $hoten</p>
    //         <p><strong>Điện thoại:</strong> $dienthoai</p>
    //         <p><strong>Email:</strong> $email</p>
    //         <p><strong>Nội dung:</strong> $noidung</p>
    //     ";

    //     $mail->send();
    //     echo "<script>alert('Gửi thành công!'); window.history.back();</script>";
    // } catch (Exception $e) {
    //     echo "<script>alert('Lỗi gửi mail: {$mail->ErrorInfo}'); window.history.back();</script>";
    // }
}
$conn->close();