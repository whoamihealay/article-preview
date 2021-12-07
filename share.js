let showShare = false;

function share() {
  showShare = !showShare;
  if (showShare === true) {
    document.getElementById("popup").style.opacity = "1";
  } else {
    document.getElementById("popup").style.opacity = "0";
  }
}
