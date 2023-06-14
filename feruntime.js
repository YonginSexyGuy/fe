//main함수
async function main() {
  startln();
  endln();
}

//festdd
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


//febasic
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

const readline = require('readline');

async function ReadLine() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let input = await new Promise(r => {
        rl.question('',r);
    });
    rl.close();
    return input;
}

const express = require('express')
const app = express()
 
//런타임
app.listen(1000, function () {
    //실행부
    main()
})