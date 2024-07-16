// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){

    return cats.push(name);
}

destructivelyAppendCat("Ralph");


function destructivelyPrependCat(name){
    return cats.unshift(name);
}

destructivelyPrependCat("Bob");

function  destructivelyRemoveLastCat(){
    return cats.splice(-1);
}

function destructivelyRemoveFirstCat(){
    return cats.shift(0,1);
}

function appendCat(){
    return [...cats,"Broom"];
}

function prependCat(){
    return ["Arnold", ...cats]
}

function removeLastCat(){

    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1)
}