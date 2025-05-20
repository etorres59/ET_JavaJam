$(function () { // ensures the document has been loaded before executing the script
    const lastModified = document.lastModified;
    const message = "This page was last modified on: " + lastModified;

    // Target the footer div and set its text
    $("#lastModifiedMessage").text(message);

});

$(document).ready(function () {
    $("main a").on("mouseenter",function () {//did mouse enter instead of hover so it doesn't pop up when leaving link
      alert("JavaJam Mug Club Members get a 10% discount on each cup of coffee!");
    });
  });
  