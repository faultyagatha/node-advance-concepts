## Advance Node Concepts:
1. Event loop
2. Thread pool
3. Clustering

---------
Call Stack

WebAPI

- all async code goes here and gets processed
- when the WebAPI is done with processing it pushes the code to the callback queue

Event Loop (Callback Queue): 
- when the call stack is empty the queue is dequeued 
