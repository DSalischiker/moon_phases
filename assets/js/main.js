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
        const response = await fetch("https://sunmooncalc.p.rapidapi.com/moon-illumination?time=21-30&date=2020-07-01", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "sunmooncalc.p.rapidapi.com",
                "x-rapidapi-key": "4422fffb2emshef74078d9384311p191e19jsn9c14172df2fd"
            }
        })

        console.log(response);
        const data = await response.json();
        console.log(data);
        getPhase(data.phase);
        return data;
    } catch (error) {
        console.log(error);
    }
}


const data = fetchData();
let moonPhase = '';

const getPhase = (phase) => {
    let $divNew = document.querySelector('#new');
    let $divFq = document.querySelector('#first_quarter');
    let $divSq = document.querySelector('#second_quarter');
    let $divFull = document.querySelector('#full');
    switch (true) {
        case phase >= 0 && phase < 0.05:
            moonPhase = 'New';
            $divNew.classList.add('current-phase');
            //LIGHT NEW MOON LED
            break;
        case phase >= 0.05 && phase < 0.45:
            moonPhase = 'WaxGib';
            $divFq.classList.add('current-phase');
            //LIGHT NEW MOON CRESCENT MOON LED
            break;
        case phase >= 0.45 && phase < 0.55:
            moonPhase = 'Full';
            $divFull.classList.add('current-phase');
            //LIGHT FULL MOON LED
            break;
        case phase >= 0.55:
            moonPhase = 'WanCre';
            $divSq.classList.add('current-phase');
            //LIGHT WANING MOON LED
        default:
            break;
    }

    console.log(moonPhase);

}


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