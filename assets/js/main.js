/* var request = require("request");

var options = {
    method: 'GET',
    url: 'https://sunmooncalc.p.rapidapi.com/moon-illumination',
    qs: {
        time: '21-30',
        date: '2020-05-28'
    },
    headers: {
        'x-rapidapi-host': 'sunmooncalc.p.rapidapi.com',
        'x-rapidapi-key': '4422fffb2emshef74078d9384311p191e19jsn9c14172df2fd',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
}); */


const fetchData = async () => {
    try {
        const response = await fetch("https://sunmooncalc.p.rapidapi.com/moon-illumination?time=21-30&date=2020-05-28", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "sunmooncalc.p.rapidapi.com",
                "x-rapidapi-key": "4422fffb2emshef74078d9384311p191e19jsn9c14172df2fd"
            }
        })

        console.log(response);

    } catch (error) {
        console.log(error);
    }
}

fetchData();


/*
fetch("https://sunmooncalc.p.rapidapi.com/moon-illumination?time=21-30&date=2020-05-28", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "sunmooncalc.p.rapidapi.com",
            "x-rapidapi-key": "4422fffb2emshef74078d9384311p191e19jsn9c14172df2fd"
        }
    })
    .then(response => {
        console.log(response);

    })
    .catch(err => {
        console.log(err);
    });
 */


/* fetch("https://sunmooncalc.p.rapidapi.com/moon-rise-and-set-times?inutc=false&result_date_format=DD-MM-YYYY%20HH%253Amm%253Ass&time=21-30&date=2020-05-28&lat=-34.33&long=-58.44", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "sunmooncalc.p.rapidapi.com",
            "x-rapidapi-key": "4422fffb2emshef74078d9384311p191e19jsn9c14172df2fd"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    }); */