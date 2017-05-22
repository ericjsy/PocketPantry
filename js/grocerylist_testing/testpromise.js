var promiseCount = 0;

function testPromise() {

    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');

    // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
    let p1 = new Promise(
        // The resolver function is called with the ability to resolve or
        // reject the promise
       (resolve, reject) => {
            // This is only an example to create asynchronism
            window.setTimeout(
            // We fulfill the promise !
                function() {resolve(thisPromiseCount);}, Math.random() * 2000 + 1000);
        		}
    		);
    // We define what to do when the promise is resolved/rejected with the then() call,
    // and the catch() method defines what to do if the promise is rejected.
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        });
}	

if ("Promise" in window) {
		let btn = document.getElementById("btn");
		btn.addEventListener("click",testPromise);
}