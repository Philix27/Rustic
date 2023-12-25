Ownership with Strings

Before we begin I would like to point out the difference between String literals and Strings 

```
 let string_literal = "John doe"; // This is a string literal

 let string_object = String::from("Jane Doe") // String object

```

String literals are placed on the stack, hence can easily be copied because they are references to a string slice while the string object is placed on the heap and the `string_object` variable holds a pointer to the string `Jane Doe` on the heap. This is the major difference of both type of strings;

The size of the string literal is known at compile time hence it is easier to manage and can be placed on the stack. 

```rust 
fn main() {
    
    let first = "Hello";
    let second =  first;

    println!("first: {}", first);
    println!("second: {}", second);
}
```

Result:

```
first: Hello
second: Hello
```

String objects lack the copy trait since the size of the string can be unknown at compile time. It is placed on the heap and this accounts for it's mutability unlike the literals that is immutable. When you use the mut keyword with literals you are simply discarding the previous value and assigning another. In this example we can see that assigning the variable `b` to `f` doesn't compile. 

```rust 
fn main() {
    
    let b = String::from("Hello");
    let f =  b;

    println!("B: {}", b);
    println!("F: {}", f);
}
```
Result:


Take note of this behavior because strings in rust act differently which we shall see in the next lesson. 