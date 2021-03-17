export default function (data) {
  console.log(data);
  let storeData = JSON.parse(data);
  if (Number(storeData.number) % 2 == 1) {
    console.log("odd");
  } else {
    console.log("even");
  }

  var n = 1;
  console.log(n);

  /* setTimeout(() => {
    n += 1;
    console.log(n);
    postMessage(n + " postMesssage()");
  }, 2000); */

  console.log("myWorker");
  console.time("myWorker");
  //10억.
  //   for (let i = 0; i < 1000000000; i++) {
  //     n++;
  //   }
  console.timeEnd("myWorker");
  postMessage(n);
}
