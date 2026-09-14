function changeColor() {
    // สุ่มค่าสี RGB ตั้งแต่ 0 - 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // นำค่าที่สุ่มได้ไปเปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
