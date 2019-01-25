# Javascript
This is a interpretation and execution of the Javascript Definitive Guide by David Flanagan.

**The Below is taken from a web article to help further understand terms and concepts which will arrive in the following chapters
https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7
******************************
Compiled vs. Interpreted
******************************

“When source code is translated”

**Source Code: Original code (usually typed by a human into a computer)

**Translation: Converting source code into something a computer can read (i.e. machine code)

**Run-Time: Period when program is executing commands (after compilation, if compiled)

**Compiled: Code translated before run-time

**Interpreted: Code translated on the fly, during execution

**************************
Typing
**************************

“When types are checked”

"3" + 5 will raise a type error in strongly typed languages, such as Python and Go, 
because they don't allow for "type coercion": the ability for a value to change type implicitly in 
certain contexts (e.g. merging two types using +). 
Weakly typed languages, such as JavaScript, won't throw a type error (result: '35').

**Static: Types checked before run-time

**Dynamic: Types checked on the fly, during execution

***********************************************************
Python Example
***********************************************************
Dynamic, Interpreted

**
def foo(a):
    if a > 0:
        print 'Hi'
    else:
        print "3" + 5
foo(2)
**

Because Python is both interpreted and dynamically typed, it only translates and type-checks code it’s executing on. 
The else block never executes, so "3" + 5 is never even looked at!

What if it was statically typed?

A type error would be thrown before the code is even run. 
It still performs type-checking before run-time even though it is interpreted.

What if it was compiled?

The else block would be translated/looked at before run-time, but because it's dynamically typed it wouldn't throw an error! Dynamically typed languages don't check types until execution, and that line never executes.

Go Example
Static, Compiled

package main
import ("fmt"
)
func foo(a int) {
  if (a > 0) {
      fmt.Println("Hi")
  } else {
      fmt.Println("3" + 5)
  }
}
func main() {
  foo(2)
}
The types are checked before running (static) and the type error is immediately caught! The types would still be checked before run-time if it was interpreted, having the same result. If it was dynamic, it wouldn’t throw any errors even though the code would be looked at during compilation.
