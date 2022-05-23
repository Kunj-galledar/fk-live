var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 38, 43, 57, 48]
    }, {
        name: 'PRODUCT B',
        data: [56, 45, 59, 33, 62, 57, 43, 58]
    }],
    chart: {
        type: 'bar',
        height: 50,
        stacked: true,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        padding: {
            left: -9,
            right: 0,
            top: -25,
            bottom: -12
        },
    },
    plotOptions: {
        bar: {
            width: 4,
            borderRadius: 5
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        lines: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
        }
    },
    yaxis: {
        show: false,
        lines: {
            show: false,
        }
    },
    colors: ["#0da487", "rgba(13, 164, 135, 0.1)"],
    legend: {
        show: false,
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#total-agents"), options);
chart.render();

// ============================== Total Agents ==============================

var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 38, 43, 57, 48]
    }, {
        name: 'PRODUCT B',
        data: [56, 45, 59, 33, 62, 57, 43, 58]
    }],
    chart: {
        type: 'bar',
        height: 50,
        stacked: true,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        padding: {
            left: -9,
            right: 0,
            top: -25,
            bottom: -12
        },
    },
    plotOptions: {
        bar: {
            width: 4,
            borderRadius: 5
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        lines: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
        }
    },
    yaxis: {
        show: false,
        lines: {
            show: false,
        }
    },
    colors: ["#FFA53B", "rgb(255, 165, 59, 0.1)"],
    legend: {
        show: false,
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#total-sale"), options);
chart.render();

// ============================== Total Agents ==============================

var options = {
    series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 38, 43, 57, 48]
    }, {
        name: 'PRODUCT B',
        data: [56, 45, 59, 33, 62, 57, 43, 58]
    }],
    chart: {
        type: 'bar',
        height: 50,
        stacked: true,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        padding: {
            left: -9,
            right: 0,
            top: -25,
            bottom: -12
        },
    },
    plotOptions: {
        bar: {
            width: 4,
            borderRadius: 5
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        lines: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
        }
    },
    yaxis: {
        show: false,
        lines: {
            show: false,
        }
    },
    colors: ["#ff6b6b", "rgba(255, 107, 107, 0.1)"],
    legend: {
        show: false,
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#total-properties"), options);
chart.render();

// ============================== Total Agents ==============================

// var options = {
//     series: [{
//         name: 'series1',
//         data: [31, 40, 28, 51, 42, 109, 100]
//     }, {
//         name: 'series2',
//         data: [11, 32, 45, 32, 34, 52, 41]
//     }],
//     chart: {
//         height: 350,
//         type: 'area'
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: 'smooth'
//     },
//     xaxis: {
//         type: 'datetime',
//         categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//     },
//     tooltip: {
//         x: {
//             format: 'dd/MM/yy HH:mm'
//         },
//     },
// };

// var chart = new ApexCharts(document.querySelector("#sales"), options);
// chart.render();

// ============================== Sales Agents ==============================