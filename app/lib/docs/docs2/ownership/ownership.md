# Ownership Rules

Most programming languages manage memory of their application usage through the use of a garbage collector (e.g Java, C#, Java, Javascript) and other lower level languages (e.g C, C++) gives you the ability to manually allocate and free memory at different points in their application. All have these have their tradeoffs  and advantages but the Rust programming language address this challenge with
an entirely different approach. The ownership system.
The ownership system has some few rules which must be obeyed at every point in time to ensure memory if cleaned-up and freed when no longer in use. The ownership rules include:

• Each value in Rust has a variable that’s called its owner.
• There can be only one owner at a time.
• When the owner goes out of scope, the value will be dropped.

Lack of an memory management in an application will lead to memory leaks and 
the app consuming more memory that is required to run the appilcation.

Advantages of having a GC
- You don't need to worry about freeing up memory after use.
- Makes the coding experience better since you then have to focus on your core business logic
- Has lead to easier programming languages like python, javascript, ruby e.t.c


Disadvantages of having a GC
- More 
- You lose the ability to micro manage memory and out source that task to a gabarge collector

We will be looking at how rust manages data of different data types in the next lesson.