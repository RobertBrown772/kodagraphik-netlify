
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset - 100;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.opacity = "1";
    }
    else {
        document.getElementById("navbar").style.top = "-88px";
        document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
}