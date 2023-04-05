const nickname= "Timmy";
const firstname = "Timothy";

let result = nickname || firstname

if (!result) {
    console.log(`Good Morning!`)
} else {
    console.log(`Good Morning, ${result}!`)
}


/*
const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!")*/