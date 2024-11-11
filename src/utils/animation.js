// options={
//     from:int
//     to: int
//     totalTime: int
//     onmove: function
//     onend: function
// }

function animationMaker(options) {
  let from = options.from;
  let to = options.to;
  let totalTime = options.totalTime;
  let dis = (to - from) / (totalTime / 15);
  let count = Math.floor((to - from) / dis);
  let curidx = 0;
  const timer = setInterval(() => {
    from += dis;
    curidx++;
    if (curidx >= count) {
      from = to;
      clearInterval(timer);
      options.onend && options.onend();
    }
    options.onmove && options.onmove(from);
  }, 15);
}

export default animationMaker;
