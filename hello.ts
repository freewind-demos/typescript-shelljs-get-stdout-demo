import shell from 'shelljs';

const { stdout } = shell.exec('ls package.json');

console.log("### stdout", stdout);