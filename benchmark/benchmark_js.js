#!/usr/bin/env node

var geoip = require('geoip');
var util = require('util');
var City = geoip.City;
var data = geoip.open('/tmp/GeoLiteCity.dat');

var ip32 = function() {
  var ip = '';
  for (var i = 0; i < 4; ++i) {
    ip += Math.floor(Math.random() * 256);
    if (i <= 2) {
      ip += '.';
    }
  }
  return ip;
}

var start = new Date().getTime();
for (var i = 0; i < 10000; ++i) {
  var domain = 'www.google.com';
  //console.log(addr);
  var l = City.record_by_domain(data, domain, function(err, data) {
      if (err) {throw err;}
    });
  //console.log(l);
}
var end = new Date().getTime();

util.puts((end - start) / 1000);
