var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)
var evenDoubler = function(v,callback) {
    var time = Math.floor((Math.random()*999)+1);
    setTimeout((function() {
        if (v % 2) {
            var doubled = v * 2;
            callback(null, doubled ,time);
        } else {
            callback(new Error('Number: ' + v + ' is not even.'));
        }
    }), time);
};

var handleEvents = function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
        
        if (++count === 10) {
            console.log("Done!");
        }
    };
var count = 0;

for (var i=0; i < 10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, handleEvents);
}

console.log("----");