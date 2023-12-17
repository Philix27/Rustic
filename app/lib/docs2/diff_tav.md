# Difference between tuple, array and vector in Rust

### The Tuple Type

A tuple is a general way of grouping together some number of other values
with a variety of types into one compound type.

```rust
fn main() {
 let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```

To get the individual values out of a tuple, we
can use pattern matching to destructure a tuple value, like this:

```rust
fn main() {
 let tup = (500, 6.4, 1);
 let (x, y, z) = tup;
 println!("The value of y is: {}", y);
}
```

This is called destructuring, because it breaks the single tuple into
three parts.

we can access a tuple element directly by using a period (.) followed by the index of the
value we want to access. The first index is 0

```rust
fn main() {
 let x: (i32, f64, u8) = (500, 6.4, 1);
 let five_hundred = x.0;
 let six_point_four = x.1;
 let one = x.2;
}
```

### The Array Type

Another way to have a collection of multiple values is with an array. Unlike a
tuple, every element of an array must have the same type. Arrays in Rust are
different from arrays in some other languages because arrays in Rust have a
fixed length: once declared, they cannot grow or shrink in size.

```rust
fn main() {
 let a = [1, 2, 3, 4, 5];
}
```

Arrays are useful when you want your data allocated on the stack rather
than the heap. or when you want to ensure you always have a fixed number of elements.

An example of when you might want to use an array rather than a
vector is in a program that needs to know the names of the months of the
year. It’s very unlikely that such a program will need to add or remove
months, so you can use an array because you know it will always contain
12 items:

An array is a single chunk of memory allocated on the stack. You can access
elements of an array using indexing, like this:

```rust
fn main() {
 let a = [1, 2, 3, 4, 5];
 let first = a[0];
 let second = a[1];
}
```
