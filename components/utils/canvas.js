const canvasBg = () => {
  const WIDTH = document.documentElement.clientWidth;
  const HEIGHT = document.documentElement.clientHeight;

  let ctx = document.getElementById("canvas"),
    content = ctx.getContext("2d"),
    round = [],
    initRoundPopulation = document.documentElement.clientWidth > 1024 ? 80 : 15;
  ctx.width = WIDTH;
  ctx.height = HEIGHT;

  ctx.style.cssText =
    "\
  position:fixed;\
  top:0px;\
  left:0px;\
  z-index:-1;\
  opacity:1;\
  pointer-events:none\
  ";

  window.addEventListener("resize", () => {
    ctx.width = document.documentElement.clientWidth;
    ctx.height = document.documentElement.clientHeight;
  });

  function box(index, x, y) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.r = Math.random() * 5 + 1;
    var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = "rgba(255,255,255," + alpha + ")";
  }

  box.prototype.draw = function () {
    content.fillStyle = this.color;
    content.shadowBlur = this.r * 2;
    content.beginPath();
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    content.closePath();
    content.fill();
  };

  function animate() {
    var grd = content.createLinearGradient(0, 300, 0, 800);
    grd.addColorStop(0, "#081B4B");
    grd.addColorStop(1, "#10001D");
    content.fillStyle = grd;
    content.fill();
    content.fillRect(0, 0, ctx.width, ctx.height);
    for (var i in round) {
      round[i].move();
    }
    requestAnimationFrame(animate);
  }

  box.prototype.move = function () {
    this.y -= 0.2; //  上升移动速度
    if (this.y <= -10) {
      this.y = HEIGHT + 10;
    }
    this.draw();
  };

  function init() {
    for (var i = 0; i < initRoundPopulation; i++) {
      round[i] = new box(i, Math.random() * ctx.width, Math.random() * ctx.height);
      round[i].draw();
    }
    const grd = content.createLinearGradient(0, 300, 0, 800);

    //添加颜色断点
    grd.addColorStop(0, "#081B4B");
    grd.addColorStop(1, "#10001D");

    //应用渐变
    content.fillStyle = grd;

    content.fill();

    content.fillRect(0, 0, ctx.width, ctx.height);
    animate();
  }
  init();
};

export default canvasBg;
