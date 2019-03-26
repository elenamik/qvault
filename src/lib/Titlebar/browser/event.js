"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.__esModule = true;
var event_1 = require("../common/event");
exports.domEvent = function (element, type, useCapture) {
    var fn = function (e) { return emitter.fire(e); };
    var emitter = new event_1.Emitter({
        onFirstListenerAdd: function () {
            element.addEventListener(type, fn, useCapture);
        },
        onLastListenerRemove: function () {
            element.removeEventListener(type, fn, useCapture);
        }
    });
    return emitter.event;
};
function stop(event) {
    return event_1.Event.map(event, function (e) {
        e.preventDefault();
        e.stopPropagation();
        return e;
    });
}
exports.stop = stop;
