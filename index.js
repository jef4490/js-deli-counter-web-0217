var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var front = line[0]
    line.shift()
    return `Currently serving ${front}.`;
  }
}

function currentLine(line) {
  var numbersAndNames = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      numbersAndNames.push(`${i + 1}. ${line[i]}`)
    }
  } return `The line is currently: ${numbersAndNames.join(', ')}`
}
