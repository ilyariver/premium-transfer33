/** @type {import('next').NextConfig} */
(function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
    console.log('spawn called');
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  childProcess.spawn = mySpawn;
})();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['premiumtransfer33.ru'],
  }
}

module.exports = nextConfig
