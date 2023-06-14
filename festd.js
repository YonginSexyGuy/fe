//함수 구동부
//festd 단독 구동이 안됩니다

function num(a, b) {
    add(a, b);
}

function out(format, ...args) {
    var index = 0;
    var result = format.replace(/%[sd]/g, function(match) {
      var arg = args[index++];
      if (typeof arg === 'undefined') {
        return match;
      } else if (match === '%n') {
        return String(arg);
      }
    });
    add(94484, result);
    exp(94484);
    run();
}
  

function sum(a, b) {
    plu(a, b);
    return mem[a];
}

function sub(a, b) {
    min(a, b);
    return mem[a];
}

function time(a, b) {
    tim(a, b);
    return mem[a];
}

function divide(a, b) {
    div(a, b);
    return mem[a];
}

async function input(a) {
    await imp(a);
}

function startln() {
    for (var i = mem.length; i++;) {
        mem.pop();
    }
}

function endln() {
    out("");
}