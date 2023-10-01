function streamInput(input) {
  let currentPosition = 0;
  let currentLine = 1;
  let currentColumn = 0;

  // returns next val without removal
  function peek() {
    return input.charAt(currentPosition++);
  }

  // returns and also removes next val
  function next() {
    let char = input.charAt(currentPosition++);
    if (char == "\n") {
      currentLine++;
      currentColumn = 0;
    } else {
      currentColumn++;
    }
    return char;
  }

  // return true if no more values
  function noMoreValue() {
    return peek() == "";
  }

  // throw new Error(msg)
  function showError(msg) {
    throw new Error(msg + " (" + currentLine + ":" + col + ")");
  }

  return {
    next,
    noMoreValue,
    peek,
    showError,
  };
}
