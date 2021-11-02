let showShare = false;

function share() {
  showShare = !showShare;
  console.log(showShare);
  if (showShare === true) {
    document.getElementById("popup").style.opacity = "1";
  } else {
    document.getElementById("popup").style.opacity = "0";
  }
}
