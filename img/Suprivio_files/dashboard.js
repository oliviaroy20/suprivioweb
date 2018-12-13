// var ctx = document.getElementById("cashLevel");
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019", "December 2019","January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020" ],
//         datasets: [{
//             label: 'Cash ($)',
//             data: [800000, 703093, 645352, 400424, 324322, 234324, 100003, 94234, 83435, 73240, 63432, 55732, 30032, 150382, 1000000, 893284, 732432,623042, 423446, 203240, 100000,72332, 62342, 31203 ],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)'
//             ],
//             borderWidth: 4
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
// var chartExpenses = document.getElementById("expenses")
// var expChart = new Chart(chartExpenses, {
// 	type: 'pie',
// 	data: {
//     datasets: [{
//         data: [90, 20, 30, 40, 30],
// 		backgroundColor:[
// 			"rgba(255, 99, 132, 0.2)", //red
// 			"rgba(255, 159, 64, 0.2)", //orange
// 			"rgba(255, 205, 86, 0.2)", //yellow
// 			"rgba(75, 192, 192, 0.2)", //green
// 			"rgba(54, 162, 235, 0.2)" //blue
// 		],
// 		borderColor:[
// 			"rgb(255, 99, 132)", //red
// 			"rgb(255, 159, 64)", //orange
// 			"rgb(255, 205, 86)", //yellow
// 			"rgb(75, 192, 192)", //green
// 			"rgb(54, 162, 235)" //blue
// 		]
//     }],
// 	labels: [
//         'R&D',
//         'S&M',
//         'G&A',
// 		'COGS',
// 		'Assets'
//     ]
// 	}
// });
// var stackedExpenses = document.getElementById("stackedExpenses")
// var stackedBar = new Chart(stackedExpenses, {
//     type: 'bar',
// 	data: {
// 		labels: ["2019", "2020", "2021"],
// 		datasets: [
// 		  {
// 		    label: 'COGS',
// 		    data: [67.8, 40, 50],
// 		    backgroundColor: '#D6E9C6' // green
// 		  },
// 		  {
// 		    label: 'R&D',
// 		    data: [20.7, 23,56],
// 		    backgroundColor: '#FAEBCC' // yellow
// 		  },
// 		  {
// 		    label: 'S&M',
// 		    data: [11.4, 10 , 10],
// 		    backgroundColor: '#EBCCD1' // red
// 		},
// 		{
// 		  label: 'G&A',
// 		  data: [11.4, 10 , 10],
// 		  backgroundColor: '#EBCCD1' // red
// 		}
// 		],
// 	},
//     options: {
//         scales: {
//             xAxes: [{
//                 stacked: true
//             }],
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// });
var rev = document.getElementById("revenue");
var revChart = new Chart(rev, {
    type: 'line',
    data: {
        labels: ["January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019", "December 2019","January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020","January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "June 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021" ],
        datasets: [{
            label: 'Revenue',
            data: [2083.33, 4166.67 ,6250.00 , 8333.33 ,10416.67 ,12500.00 ,14583.33 ,16666.67 ,18750.00 ,20833.33 ,22916.67 ,  25000.00, 29166.67 ,  33333.33 ,37500.00 ,41666.67 ,45833.33 ,50000.00  ,54166.67 , 58333.33 , 62500.00  ,66666.67 , 70833.33 , 75000.00, 83333.33 ,91666.67 ,100000.00 ,108333.33 ,116666.67 ,125000.00,133333.33 ,141666.67 ,150000.00 , 158333.33 , 166666.67 ,175000.00],
			backgroundColor: [
                "rgba(75, 192, 192, 0.2)", //green
            ],
            borderColor: [
                "rgb(75, 192, 192)", //green
            ],
            borderWidth: 4
        },
		{
			label: 'COGS',
			data: [9685.83 ,9685.83 , 9685.83 ,  9715.83 ,  9715.8, 9715.83, 9715.83 , 9715.83 , 9715.83 , 9715.83 , 9715.83 , 9715.83,  14338.33 , 14338.33 , 14338.33 , 14338.33 ,14338.33 ,15290.83  ,15290.83 ,15290.83 ,15290.83 ,15290.83 , 15290.83 , 15290.83, 18603.33 ,18603.33 ,18603.33 , 18603.33 , 18603.33 , 18603.33 , 19555.83 ,19555.83 , 19555.83 ,19555.83 , 19555.83 , 19555.83 , 19555.83],

		backgroundColor: [
			"rgba(255, 99, 132, 0.2)", //red
		],
		borderColor: [
			"rgb(255, 99, 132)", //red
		],
		borderWidth: 4
		}],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var gm = document.getElementById("grossMargin");
var revChart = new Chart(gm, {
    type: 'line',
    data: {
        labels: ["January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019", "July 2019", "August 2019", "September 2019", "October 2019", "November 2019", "December 2019","January 2020", "February 2020", "March 2020", "April 2020", "May 2020", "June 2020", "July 2020", "August 2020", "September 2020", "October 2020", "November 2020", "December 2020","January 2021", "February 2021", "March 2021", "April 2021", "May 2021", "June 2021", "July 2021", "August 2021", "September 2021", "October 2021", "November 2021", "December 2021" ],
        datasets: [{
			data:[-7602.50, -5519.17, -3435.83, -1382.50,  700.83 , 2102.50 , 4867.50 , 6950.83 , 9034.17, 11117.50 , 13200.83 , 15284.17, 14828.33 ,18995.00 ,23161.67,27328.33 , 31495.00 ,34709.17 ,38875.83 , 43042.50 ,47209.17 ,51375.83 ,55542.50 ,59709.17, 64730.00 ,73063.33 ,81396.67 , 89730.00 , 98063.33,105444.17 ,113,777.50, 122110.83,130444.17 ,138777.50 , 147110.83 , 155444.17],
			backgroundColor: [
                "rgba(75, 192, 192, 0.2)", //green
            ],
            borderColor: [
                "rgb(75, 192, 192)", //green
            ],
            borderWidth: 4
        },
		],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
