import{Q as o}from"./bootstrap-249b0f62.js";const d=o("binary",{state:()=>({funding_wallets:null,perc:[],trade:[],tradelogs:[],practicelogs:[],deposit:null,withdraw:null,transaction:null,tradePositive:0,totaltrades:0,practice_Positive:0,practice_totaltrades:0,practice_contracts:[],practice_datas:[],trade_contracts:[],trade_datas:[]}),actions:{async fetch(){const t=await axios.post("/user/fetch/binary/data"),{trade:{Win:a,Draw:e,Lose:s,practice_Win:r,practice_Draw:i,practice_Lose:c}}=t;this.funding_wallets=t.funding_wallets,this.perc=t.perc,this.trade=t.trade,this.tradelogs=t.tradelogs,this.practicelogs=t.practicelogs,this.deposit=t.deposit,this.withdraw=t.withdraw,this.transaction=t.transaction,this.totaltrade=(a??0)+(s??0)+(e??0),this.tradePositive=`${a-s}`,this.totaltrades=`${a+s+e}`,this.practice_totaltrades=`${r+c+i}`,this.practice_Positive=`${r-c}`},async fetch_practice_contracts(){await axios.post("/user/fetch/binary/practice/contracts").then(t=>{this.practice_contracts=t.contracts,this.practice_datas=t.datas}).catch(t=>{$toast.error(t.response.data.message)})},async fetch_trade_contracts(){await axios.post("/user/fetch/binary/trade/contracts").then(t=>{this.trade_contracts=t.contracts,this.trade_datas=t.datas}).catch(t=>{$toast.error(t.response.data.message)})}},persist:!0});export{d as u};