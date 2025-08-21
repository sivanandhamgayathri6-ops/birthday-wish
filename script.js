function showMessage() {
  const message = document.getElementById("message");
  message.innerHTML = `
    Dear Raja,<br><br>
    🎂 Wishing you a day filled with love, laughter, and cake! 🎂<br>
    May all your dreams come true and may this year bring you great joy and success.<br><br>
    💖 Happy Birthday once again! 💖
  `;

  launchConfetti();
}

// 🎉 Simple confetti effect
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  const confetti = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 30 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.ellipse(c.x, c.y, c.r, c.r / 2, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach(c => {
      c.y += Math.cos(c.d / 10) + 2;
      c.x += Math.sin(c.d / 10);
      c.tiltAngle += 0.1;
    });
  }

  draw();
}
