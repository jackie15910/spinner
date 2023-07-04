const spinningLine = ['|   ','/   ','-   ','\\   ','|   ','/   ','-   ','\\   ','|   ','/   ','-   ','\\   ','|   ']
timer = 0;
const spinner = (string) => {
  for(let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + string[i]);
    }, timer);
    timer += 200;
  }
}
spinner(spinningLine);