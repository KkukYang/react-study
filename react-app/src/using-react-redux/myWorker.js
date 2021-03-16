export default function () {
  var n = 1;
  console.log(n);
  setTimeout(() => {
    n += 1;
    console.log(n);
    postMessage(n + "postMesssage()");
  }, 2000);
}
