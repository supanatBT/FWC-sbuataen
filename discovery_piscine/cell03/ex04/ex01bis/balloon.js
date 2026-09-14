$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $("#balloon").click(function() {
        size += 10;
        if (size > 420) size = 200;
        colorIndex = (colorIndex + 1) % colors.length;
        $(this).css({ width: size + 'px', height: size + 'px', backgroundColor: colors[colorIndex] });
    });

    $("#balloon").mouseleave(function() {
        size -= 5;
        if (size < 200) size = 200;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        $(this).css({ width: size + 'px', height: size + 'px', backgroundColor: colors[colorIndex] });
    });
});
