"use strict";
if (!process.env.NODE_ENV) {
  require('dotenv').load();
}

// requires all the tasks in the folder
require('require-dir')('./tasks');
