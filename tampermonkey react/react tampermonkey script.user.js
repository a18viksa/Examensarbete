// ==UserScript==
// @name         react tampermonkey script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:3000/
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js

// ==/UserScript==

(function() {
    'use strict';

    function reload() {

        let iterations = parseInt(localStorage.getItem("iterations"));
        let counter = parseInt(localStorage.getItem("counter"));
        let startData = parseInt(localStorage.getItem("startData"));

        let measurement = new Date();
        measurement = measurement.getTime();

        if(counter > iterations){
            localStorage.setItem("counter", 0);
        } else {

            startData = localStorage.getItem("startData");
            startData +=  measurement + "\n";

            // Increase counter and save data to local storage
            counter++;
            localStorage.setItem("counter", counter);
            localStorage.setItem("startData", startData);

            window.location.assign('http://localhost:3000/');
        }
    }

    if (localStorage.getItem("counter") == null) {
        localStorage.setItem("counter", 0);
    }

    if (localStorage.getItem("iterations") == null) {
        localStorage.setItem("iterations", 0);
    }

    reload();

})();