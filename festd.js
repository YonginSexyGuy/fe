//함수 구동부
//festd 단독 구동이 안됩니다

function num(a, b) {
    add(a, c);
}

function out(a, ...args) {
    var ang = a;
    for (var i = 0; i < args.lenght; i++) {
        ang = ang.replace("%n", args);
    }
    exp(ang);
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

function input(a) {
    imp(a);
}

function startln() {
    for (var i = mem.length; i++;) {
        mem.pop();
    }
}

function endln() {
    prt("");
}