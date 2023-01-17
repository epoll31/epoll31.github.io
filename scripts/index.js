

window.onload = () => {
    navBarInit();
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.onscroll = () => {
    navBarOnScroll();
};
