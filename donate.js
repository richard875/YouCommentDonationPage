// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("tAndC");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(".copy").click(function (e) {
  setTimeout(function () {
    $("#notification")
      .children(":first-child")
      .fadeOut(200, function () {
        $(".notification").children(":first-child").remove();
      });
    // $(".notification").children(":first-child").remove();
  }, 2000);

  var eachNotification = $(`
    <div class="eachNotification">
        <div style="width: 100%; height: 40px"></div>
        <div class="notInside">COPIED!</div>
    </div>
  `)
    .hide()
    .fadeIn(200);

  $("#notification").prepend(eachNotification);
});

document.getElementById("copyPaypal").addEventListener("click", function () {
  copyToClipboard(document.getElementById("paypalToCopy"));
});

document.getElementById("copyEth").addEventListener("click", function () {
  copyToClipboard(document.getElementById("ethereumToCopy"));
});

document.getElementById("copyBitcoin").addEventListener("click", function () {
  copyToClipboard(document.getElementById("bitcoinToCopy"));
});

function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
      var target = document.createElement("textarea");
      target.style.position = "absolute";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.id = targetId;
      document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
  }
  // select the content
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    // clear temporary content
    target.textContent = "";
  }
  return succeed;
}
