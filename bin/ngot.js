#!/usr/bin/env node

const { execSync } = require("child_process");

execSync("git config user.name 'ngot'");
execSync("git config user.email 'zhuanghengfei@gmail.com'");

console.log("set user.name & user.email ok");
