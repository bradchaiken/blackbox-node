blackbox-node
=============

Concept application for Coursera's 'Startup Engineering' course. Fall 2013. Demo: http://blackbox-comm.herokuapp.com/

To initialize locally:

Please make sure that you have satisfied the requirements for Node.js, as found here: http://nodejs.org/

Then:

  Clone the application,
  CD into the project root folder, 'blackbox-node',
  npm install commander,
  npm install cheerio,
  Run: foreman start,
  Navigate to: localhost:5000
  

To run specs
============

CD into /public,
Run: ./grader.js --checks checks.json --url http://blackbox-comm.herokuapp.com/

Expected output:

{
    "#footerwrap": true,
    "#headerwrap": true,
    "#projectwrap": true,
    "#servicewrap": true,
    "#servicewrap_2": true,
    "#welcomewrap": true,
    ".brand": true,
    ".coinbase-button": true,
    "h1": true,
    "title": true
}

What this does
==============

Checks that these classes / id's are present in the application. Though simple, this is important. 
