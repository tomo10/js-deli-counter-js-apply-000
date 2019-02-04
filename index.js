// function takeANumber(KatzDeliLine, name) {
  
//   KatzDeliLine.push(name);   // adds name to end of line array
  
//   var length = KatzDeliLine.length;
//   return "Welcome, " + name + ". You are number " + length.toString() + " in line.";  
// }

var count = 0;

function takeANumber(arr) {
  
  count += 1;
  
  arr.push(count);
  
  return "Welcome, you are number: " + count
}



function nowServing(KatzDeliLine) {
  if (KatzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else 
  return "Currently serving " + KatzDeliLine.shift() + ".";
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  let arr = [];
  for (let i = 0; i < line.length; i++) {
    arr.push((i + 1) + ". " + line[i]);
  }
  return "The line is currently: " + arr.join(", ");
}