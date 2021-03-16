export default class WebWorker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob(["(" + code + ")()"]);
    return new Worker(URL.createObjectURL(blob));
  }
}

// onconnect = function () {
//   var n = 1;
//   console.log(n);
//   setTimeout(() => {
//     n += 1;
//     console.log(n);
//     postMessage(n + "postMesssage()");
//   }, 2000);
// };

/* export default {
  aaa: function () {
    var n = 1;
    console.log(n);
    setTimeout(() => {
      n += 1;
      console.log(n);
      postMessage(n + "postMesssage()");
    }, 2000);
  },

  bbb: {
    name: "yang kuk hyun",
    middleName: "kuk",
    lastName: "yang",
  },
}; */

// var n = 1;
// console.log(n);
// setTimeout(() => {
//   n += 1;
//   console.log(n);
//   // postMessage(n + "postMesssage()");
// }, 2000);
