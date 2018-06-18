/*export class Dirwatcher {
  constructor(name) {
    this.name = name;
    console.log(`Product module`);
  }
}*/
const fs = require('fs');
require('log-timestamp');

const watchingDir = '../data';
console.log(`Watching for file changes on ${watchingDir}`);

let fsWait = false;
fs.watch(watchingDir, (event, filename) => {
	if (filename) {
		if (fsWait) return;
		fsWait = setTimeout(() => {
			fsWait = false;
		}, 100);
		console.log(`${filename} file Changed`);
	}
});

