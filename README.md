#What The Hell Did I Do Last Week? 

[![Build Status](https://travis-ci.org/mnitchie/WhatTheHellDidIDoLastWeek.svg)](https://travis-ci.org/mnitchie/WhatTheHellDidIDoLastWeek)
[![Heroku](https://heroku-badge.herokuapp.com/?app=whispering-temple-1544)](http://whispering-temple-1544.herokuapp.com)

We all do many many things in a given week. Filling out status reports (of any scope or size or frequency) can be tricky, and they often end up being inaccurate. 

This app aggregates all of your developer tool activity in one place for easy reference. w00t!

To run

```
cd ember
npm install
bower install
ember build --environment=production --output-path ../public/
cd ..
npm install
node app.js
```