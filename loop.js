/** understanding the node loop waklthrough */

/****** START: node myFile.js*/
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  //Check One: any pending setTimeout, setInterval, setImmediate?

  //Check Two: any pending OS tasks (server listening, etc.)

  //Check Three: any pending long running OS operations (fs module, etc.)

  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

//Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1). node looks for any pendingTimers and sees if any functions
  //are ready to be called: [setTimeout, setIntervals]

  // 2). node looks for any pendingOSTasks and pendingOperations 
  //and calls relevant callbacks

  // 3). pause execution!! Continue when ... 
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4). node looks for any pendingTimers. Call setImmediate

  // 5). handle any 'close' events: clean up code.

}
/****** EXIT back to the terminal */