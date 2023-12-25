Ownership with intergers

When you run the following code, 
```rust 
fn main() {
    
    let b = 23;
    let f =  b;

    println!("B: {}", b);
    println!("F: {}", f);
}
```

you get this as the result:

```
B: 23
F: 23
```

This doesn't look like it has much problem because the value of `b` was simply copied to `f`. The Integer data type implements the`Copy` trait which is responsible for copying values.

On the part of ownership, `b` first owns the value of `23` and later copies it to `f`. It doesn't transfer or change ownership. This is a common property of simple/scalar data types like boolean, floats, string literals and integers. They often have a fixed and known size, hence can be easily placed on the stack.

Take note of this behavior because strings in rust act differently which we shall see in the next lesson. 
