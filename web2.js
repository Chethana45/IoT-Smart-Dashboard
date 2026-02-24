let ctx = document.getElementById("chart").getContext("2d");
let dataPoints = [];

function refreshData() {
    let temp = (Math.random() * 10 + 25).toFixed(1);
    let humidity = (Math.random() * 20 + 40).toFixed(1);

    document.getElementById("temp").innerText = temp + " °C";
    document.getElementById("humidity").innerText = humidity + " %";

    updateChart(temp);
}

function toggleLight() {
    let status = document.getElementById("lightStatus");
    if (status.innerText === "OFF") {
        status.innerText = "ON";
        status.style.color = "lime";
    } else {
        status.innerText = "OFF";
        status.style.color = "red";
    }
}

function toggleMode() {
    document.body.classList.toggle("light");
}

function updateChart(value) {
    if (dataPoints.length > 20) dataPoints.shift();
    dataPoints.push(value);

    ctx.clearRect(0, 0, 400, 200);
    ctx.beginPath();
    ctx.moveTo(0, 200 - dataPoints[0] * 3);

    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(i * 15, 200 - dataPoints[i] * 3);
    }

    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 2;
    ctx.stroke();
}

setInterval(refreshData, 5000);