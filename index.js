const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

// console.log("NUMBER OF CPUS", numCPUs);

if (cluster.isMaster) {
  // console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
    // console.log(`worker ${worker.process.pid} died`);
  });
} else {
  require("./app.js");
}
