// $('#date').one('focus', function () {
//     $(this).
//         datepicker({
//             minDate: 0,
//             showButtonPanel: true
//         }).

//         datepicker('show');
//     $('#ui-datepicker-div').draggable();
// });

//Must include: Jquery, Jquery UI, Moment.js, Moment-timezone.js. Async load Jquery UI, Moment.js, moment-timezone.js

//Tokenize var readDates value!!! i.e. {{Token.Webinar.Dates}}
var readDates = ["9-7-2017:12:00", "12-8-2017:11:00", "22-4-2017:01:30", "4-11-2017:11:00", "12-5-2018:05:00", "12-12-2018:04:30"];
var availableDates = readDates.map(function (v) { return v.slice(0, -6) })
var hourDates = readDates.map(function (string) { return string.substring(string.length - 5, string.length) })

function available(date) {
    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, availableDates) != -1) {
        return [true, "", "Available"];
    } else {
        return [false, "", "unAvailable"];
    }
}

$(function () {
    $('#date').datepicker({
        beforeShowDay: available,
        dateFormat: 'd-m-yy',
        onSelect: function (datetext) {
            moment.tz.add([
                'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
                'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0',
                'America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5'
            ]);
            moment.tz.setDefault("America/Los_Angeles");
            var a = availableDates.indexOf(datetext);
            var dat = availableDates[a];
            function reverseString(str) {
                return str.split('-').reverse().join('-');
            }
            var datestamp = reverseString(dat);
            var timestamp = hourDates[a];
            var fulltime = datestamp + " " + timestamp;
            var dt = moment(fulltime, "YYYY-MM-DD HH:mm");
            var pst = dt.tz('America/Los_Angeles').format('hh:mm z');
            //var mst = dt.tz('America/Phoenix').format('hh:mm z');
            //var cst = dt.tz('America/Chicago').format('hh:mm z');
            var est = dt.tz('America/New_York').format('hh:mm z');
            console.log(pst);


            $('#date').val(datestamp + " : " + pst + " / " + est);
        },
    });
});

