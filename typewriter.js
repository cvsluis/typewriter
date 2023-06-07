const sentence = "hello there from lighthouse labs";

const print = sentence => {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), time);
    time += 50;
  }
  setTimeout(() => process.stdout.write('\n'), time);
};

print(sentence);