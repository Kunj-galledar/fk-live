var optionsoverview = {
    series: [{
            name: 'Earning',
            type: 'area',
            data: [44, 55, 35, 50, 67, 50, 55, 45, 32, 38, 45]
        },
        {
            name: 'Order',
            type: 'area',
            data: [35, 30, 23, 40, 50, 35, 40, 52, 67, 50, 55]
        },
        {
            name: 'Refunds',
            type: 'area',
            data: [25, 20, 15, 25, 32, 20, 30, 35, 23, 30, 20]
        },
    ],
    chart: {
        height: 300,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        },
        // dropShadow: {
        //     enabled: true,
        //     top: 2,
        //     left: 0,
        //     blur: 4,
        //     color: '#8E9CBE',
        //     opacity: 0.08
        // },
        background: 'transparent'
    },
    stroke: {
        width: [2, 2, 2],
        curve: 'smooth'
    },
    grid: {
        show: true,
        borderColor: 'rgba(142, 156, 190, 0.3)',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    // plotOptions: {
    //     bar: {
    //         columnWidth: '50%'
    //     }
    // },
    colors: ["#7064F5", "#54BA4A", "#FF3364"],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 100]
        }
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov'
    ],
    // markers: {
    //     discrete: [{
    //             seriesIndex: 0,
    //             dataPointIndex: 2,
    //             fillColor: '#7064F5',
    //             strokeColor: '#222',
    //             size: 5,
    //             sizeOffset: 3
    //         }, {
    //             seriesIndex: 1,
    //             dataPointIndex: 2,
    //             fillColor: '#54BA4A',
    //             strokeColor: '#222',
    //             size: 5,
    //         },
    //         {
    //             seriesIndex: 2,
    //             dataPointIndex: 2,
    //             fillColor: '#FF3364',
    //             strokeColor: '#222',
    //             size: 5,
    //         },
    //         {
    //             seriesIndex: 0,
    //             dataPointIndex: 5,
    //             fillColor: '#7064F5',
    //             strokeColor: '#222',
    //             size: 5,
    //             sizeOffset: 3
    //         }, {
    //             seriesIndex: 1,
    //             dataPointIndex: 5,
    //             fillColor: '#54BA4A',
    //             strokeColor: '#222',
    //             size: 5,
    //         },
    //         {
    //             seriesIndex: 2,
    //             dataPointIndex: 5,
    //             fillColor: '#FF3364',
    //             strokeColor: '#222',
    //             size: 5,
    //         },
    //         {
    //             seriesIndex: 0,
    //             dataPointIndex: 9,
    //             fillColor: '#7064F5',
    //             strokeColor: '#222',
    //             size: 5,
    //             sizeOffset: 3
    //         }, {
    //             seriesIndex: 1,
    //             dataPointIndex: 9,
    //             fillColor: '#54BA4A',
    //             strokeColor: '#222',
    //             size: 5,
    //         },
    //         {
    //             seriesIndex: 2,
    //             dataPointIndex: 9,
    //             fillColor: '#FF3364',
    //             strokeColor: '#FF3364',
    //             size: 5,
    //         },
    //     ],
    //     hover: {
    //         size: 5,
    //         sizeOffset: 0
    //     }
    // },
    theme: {
        mode: 'dark',
        palette: 'palette10',
        monochrome: {
            enabled: false,
            color: '#fff',
            shadeTo: 'dark',
            shadeIntensity: 0.65
        },
    },
    xaxis: {
        position: 'bottom',
        type: 'category',
        tickAmount: 4,
        tickPlacement: 'between',

        tooltip: {
            enabled: true,
        },
        axisBorder: {
            color: 'var(--chart-border)',
        },
        axisTicks: {
            show: false
        },
        labels: {
            colors: "#fff",
            // useSeriesColors: false
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        tickAmount: 6,
        tickPlacement: 'between',
    },
    tooltip: {
        enabled: true,
    },
    responsive: [{
        breakpoint: 1200,
        options: {
            chart: {
                height: 250,
            }
        },
    }]
};

var chartoverview = new ApexCharts(document.querySelector("#orderoverview"), optionsoverview);
chartoverview.render();

// bar overview chart
var optionsorder = {
    series: [{
        name: 'Revenue',
        data: [30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11]
    }],
    chart: {
        type: 'bar',
        height: 180,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
        },
    },
    colors: ["#fff"],
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    fill: {
        opacity: 0.7
    },
    tooltip: {
        enabled: false
    },
    states: {
        normal: {
            filter: {
                type: 'none',
            }
        },
        hover: {
            filter: {
                type: 'none',
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
            }
        },
    },
    responsive: [{
        breakpoint: 405,
        options: {
            chart: {
                height: 150,
            }
        },
    }]
};

var chartorder = new ApexCharts(document.querySelector("#order-bar"), optionsorder);
chartorder.render();