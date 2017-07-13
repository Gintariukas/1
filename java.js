/**
 * Created by Gintarė on 2017-07-13.
 */
var d = new Date();
var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

document.write("Today is : " + weekday[d.getDay()] + ".");

document.write("<br>" + "Current time is  : " + d.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + " : " +
    d.getMinutes() + " : " + d.getSeconds());
