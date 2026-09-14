$(document).ready(function() {
    setInterval(() => alert("Please, use me..."), 30000);

    $("button").click(function() {
        const leftStr = $("#left").val();
        const rightStr = $("#right").val();
        const operator = $("#operator").val();
        const isPositiveInteger = (str) => /^\d+$/.test(str);

        if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
            alert("Error :(");
            console.log("Error :(");
            return;
        }

        const leftNum = parseInt(leftStr, 10);
        const rightNum = parseInt(rightStr, 10);

        if ((operator === "/" || operator === "%") && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result = 0;
        if (operator === "+") result = leftNum + rightNum;
        else if (operator === "-") result = leftNum - rightNum;
        else if (operator === "*") result = leftNum * rightNum;
        else if (operator === "/") result = leftNum / rightNum;
        else if (operator === "%") result = leftNum % rightNum;

        alert(result);
        console.log(result);
    });
});
