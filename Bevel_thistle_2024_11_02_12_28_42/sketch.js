function setup() {
  createCanvas(400, 400);
  noLoop(); // 不重複繪製，讓畫面靜止
  angleMode(DEGREES); // 使用角度模式以便簡單控制
}

function draw() {
  background(255); // 白色背景
  let centerX = width / 2;
  let centerY = height / 2;
  
  let numCircles = 30; // 圓圈數量
  let numSegments = 50; // 每個圓圈上的扇形數量
  let radiusStep = 10; // 每個圓圈之間的間隔
  
  for (let i = numCircles; i >= 1; i--) {
    let innerRadius = (i - 1) * radiusStep; // 內圓的半徑
    let outerRadius = i * radiusStep; // 外圓的半徑

    for (let j = 0; j < numSegments; j++) {
      let angleStart = j * (360 / numSegments); // 起始角度
      let angleEnd = (j + 1) * (360 / numSegments); // 結束角度
      
      noFill();
      // 交替填充顏色
      if ((i + j) % 2 == 0) {
        fill(0); // 黑色
      } else {
        fill(i * 10); // 白色
      }
      

      // 繪製扇形，內圓到外圓之間的範圍
      arc(centerX, centerY, outerRadius * 2, outerRadius * 2, angleStart, angleEnd, PIE);
    }
  }
}
