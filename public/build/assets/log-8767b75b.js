import{Q as o}from"./bootstrap-249b0f62.js";const a=o("log",{state:()=>({logs:{withdraw:[],deposit:[],transaction:[]}}),actions:{async fetch(t){await axios.post("/user/fetch/"+t+"/history").then(s=>{this.logs[t]=s.logs})}},persist:!0});export{a as u};