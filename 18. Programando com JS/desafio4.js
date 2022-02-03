const line = ['2','2','2','2']

const sumT = line.reduce(function(prev, current) {
  return (Number(prev) + Number(current))
});

const result = sumT - line.length + 1;

console.log(result);