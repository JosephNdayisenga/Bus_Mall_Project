

let elChart = document.getElementById("myChart").getContext("2d");

function populateChart(prop){
    let propsArray = [];
    for(let i = 0; i < BusMallImageArray.length; i++) {
        propsArray.push(BusMallImageArray[i][prop]);
    }

    return propsArray;

}

function displayChart (){
    elChart.innerHTML = "";

let myChart = new Chart(elChart, {
    type: "bar",
    data: {
        labels: populateChart("name"),
        datasets: [{
            label: "# of times clicked", 
            data: populateChart("clicked"),
            backgroundcolor: "red"
        },
        {
            label: '# of times shown',
            data: populateChart('shown'),
            backgroundColor: 'gray'
        }
    ],
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                    }
                }]
            }
        }
    }
})
};
