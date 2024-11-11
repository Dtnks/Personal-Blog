let myIndexScroll = function (element, className, leaveStyle, parentEle) {
  let befor_top = 0;
  window.addEventListener("scroll", function () {
    let scrollHeight =
      this.document.documentElement.scrollTop ||
      this.window.pageYOffset ||
      this.document.body.scrollTop;

    //有写父容器则用否则用动画元素
    let ele = parentEle || element;
    let eleheight = Number(element.style.height.replace("px", ""));
    //顶部距文章顶部高度
    let elementTopToTop = ele.getBoundingClientRect().top + scrollHeight;
    //显示器高度
    let screenH = window.innerHeight;
    //当元素从上往下出现在屏幕中
    if (scrollHeight - befor_top > 0) {
      if (
        elementTopToTop - scrollHeight < 0 &&
        elementTopToTop + eleheight > scrollHeight
      ) {
        removeClass(element, "down_" + className);
        removeClass(element, "up_" + className);
        removeClass(element, "up_" + leaveStyle);
        addClass(element, "down_" + leaveStyle);
        //当元素离开屏幕
      } else if (
        elementTopToTop - scrollHeight < screenH &&
        elementTopToTop + eleheight - screenH - scrollHeight > 0
      ) {
        removeClass(element, "down_" + leaveStyle);
        removeClass(element, "up_" + className);
        removeClass(element, "up_" + leaveStyle);
        addClass(element, "down_" + className);
      }
    } else {
      if (
        elementTopToTop - scrollHeight < 0 &&
        elementTopToTop + eleheight > scrollHeight
      ) {
        removeClass(element, "up_" + leaveStyle);
        removeClass(element, "down_" + className);
        removeClass(element, "down_" + leaveStyle);
        addClass(element, "up_" + className);
        //当元素离开屏幕
      } else if (
        elementTopToTop - scrollHeight < screenH &&
        elementTopToTop + eleheight - screenH - scrollHeight > 0
      ) {
        removeClass(element, "up_" + className);
        removeClass(element, "down_" + className);
        removeClass(element, "down_" + leaveStyle);
        addClass(element, "up_" + leaveStyle);
      }
    }
    befor_top = scrollHeight;
    //当元素从下往上出现屏幕
    // else if (scrollHeight > elementTopToTop) {
    //   if (elementTopToTop + eleheight > scrollHeight) {
    //     removeClass(element, leaveStyle);
    //     addClass(element, className);
    //   }
    // }
  });
};
function addClass(ele, name) {
  if (name) {
    let classArr = ele.className.split(" "),
      index = classArr.indexOf(name);
    index > -1 ? null : classArr.push(name);
    ele.className = classArr.join(" ");
  } else {
    throw new Error("请传递一个有效的class类名");
  }
}

function removeClass(ele, name) {
  let classArr = ele.className.split(" "),
    index = classArr.indexOf(name);
  //将符合条件的class类删除
  index > -1 ? classArr.splice(index, 1) : null;
  ele.className = classArr.join(" ");
}

export default myIndexScroll;
