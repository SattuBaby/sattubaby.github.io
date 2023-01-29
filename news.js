let news = {
    "apiKey":"f81f8dc916074217ad401817b60e09e9",
    fetchNews:function(country){
        fetch(
            "https://newsapi.org/v2/top-headlines?country="+country+"&apiKey="+this.apiKey
        )
        .then((Response)=>Response.json())
        .then((data)=>this.diplayNews(data));
    }
}
