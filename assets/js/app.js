/**
 * @license MIT
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

import { fetchData, url } from "./api.js";
import * as module from "./module.js"

 const addEventListener = function(elements, eventType, callback) {
   for (const element of elements) element.addEventListener(eventType, callback);
 }