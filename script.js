const btn = document.querySelector('.btn');
const text = document.querySelector('.more');
const about = document.querySelector('.upper');
about
    .addEventListener('click', e => {
      const current = e.target;
      const isReadMoreBtn = current.className.includes('btn');
      if (!isReadMoreBtn)
            return;
        const currentText = e.target.parentNode.querySelector('.more');
        currentText.classList.toggle('more--open');
        current.textContent = current.textContent.includes('Read More...') ? 'Read Less...' : 'Read More...';
    });
let btc = {
    "bitcoin":"bitcoin",
    fetchBTC: function(){
        fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids="+this.bitcoin+"&vs_currencies=usd&include_market_cap=false&include_24hr_vol=flase"
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayPrice(data));
    },
    displayPrice : function(data){
        const{usd} = data.bitcoin;
        console.log(usd)
        document.querySelector(".bitcoin").innerHTML = "BTC: "+usd+" $";
    },
}
btc.fetchBTC()
let ethereum = {
    "ethereum":"ethereum",
    fetchETH: function(){
        fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids="+this.ethereum+"&vs_currencies=usd&include_market_cap=false&include_24hr_vol=flase"
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayPrice(data));
    },
    displayPrice : function(data){
        const{usd} = data.ethereum;
        console.log(usd)
        document.querySelector(".ethereum").innerHTML = "ETH: "+usd+" $";
    },
}
ethereum.fetchETH()
let doge = {
    "dogecoin":"dogecoin",
    fetchDOGE: function(){
        fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids="+this.dogecoin+"&vs_currencies=usd&include_market_cap=false&include_24hr_vol=flase"
        )
        .then((Response)=>Response.json())
        .then((data)=>this.displayPrice(data));
    },
    displayPrice : function(data){
        const{usd} = data.dogecoin;
        console.log(usd)
        document.querySelector(".dogecoin").innerHTML = "DOGE: "+usd+" $";
    },
}
doge.fetchDOGE()