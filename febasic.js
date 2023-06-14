//대충 자바스크립트가 C가 되가는 과정이라 보심 됨 ㅇㅇ
//약간 어셈블리어랑 원리 비슷함 수동이니까 쓰시는거 지양좀 조지셈

//변수 메모리
var mem = [];
var list;

//1회용 메모리
var bus = [];
var pointer;
var res = [,];

//포인터 지정
function ptr(int) {
    pointer = int;
}

//메모리 관리 명령어
function add(a, b) {
    ptr(a);
    mem[pointer] = b;
    list = list + 1;
}

function sub(a, b) {
    ptr(b);
    mem[pointer] = 0;
    if (list == 0) {
        list = 0;
    } else {
        list = list - 1;
    }
}

function mov(a, c) {
    ptr(a);
    res[0] = mem[pointer];
    ptr(c);
    res[1] = mem[pointer];
    mem[pointer] = res[0];
    ptr(a);
    mem[pointer] = res[0];
    ptr(0);
    res[0] = 0;
    res[1] = 0;
}

//계산
function plu(a, b) {
    ptr(a);
    var e = mem[pointer];
    ptr(b);
    var f = mem[pointer];
    ptr(a);
    mem[pointer] = Number(e) + Number(f);
    res[0] = 0;
    res[1] = 0;
}

function min(a, b) {
    ptr(a);
    var e = mem[pointer];
    ptr(b);
    var f = mem[pointer];
    ptr(a);
    mem[pointer] = Number(e) - Number(f);
    res[0] = 0;
    res[1] = 0;
}

function tim(a, b) {
    ptr(a);
    var e = mem[pointer];
    ptr(b);
    var f = mem[pointer];
    ptr(a);
    mem[pointer] = Number(e) * Number(f);
    res[0] = 0;
    res[1] = 0;
}

function div(a, b) {
    ptr(a);
    var e = mem[pointer];
    ptr(b);
    var f = mem[pointer];
    ptr(a);
    mem[pointer] = Number(e) / Number(f);
    res[0] = 0;
    res[1] = 0;
}

//IO
function exp(a) {
    ptr(a);
    bus[0] = mem[pointer];
}

async function imp(a) {
  ptr[a];
  mem[pointer] = await ReadLine();
}

function run() {
    console.log(bus[0]);
}
