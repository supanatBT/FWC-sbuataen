const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    // เพิ่มขนาด 10px
    size += 10;
    
    // ถ้าระเบิด (ขนาดมากกว่า 420px) กลับไปที่ 200px
    if (size > 420) {
        size = 200;
    }

    // เลื่อนสีไปข้างหน้า (Red -> Green -> Blue)
    colorIndex = (colorIndex + 1) % colors.length;
    
    updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
    // หดขนาด 5px
    size -= 5;
    
    // ขนาดห้ามต่ำกว่า 200px
    if (size < 200) {
        size = 200;
    }

    // เลื่อนสีย้อนกลับ (Blue -> Green -> Red)
    // บวก colors.length ก่อน modulo เพื่อป้องกันค่าติดลบใน JavaScript
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}
