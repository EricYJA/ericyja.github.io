---
title: C/C++ key concepts
tags: 
  - interview
  - C/C++
---



## primitive types

```
char 		// 1 byte
short		// 2 byte
int			// 4 byte
long		// 4 byte
float		// 4 byte
double 	// 8 byte
```





## `new` 

```c++
int *pi = new int;
```

allocate memory in free space and return a pointer to that space. 

Dynamic allocatiojn would so initialization automatically. Thus, for promitive types and combines types, they are undefined, while for class,they are defined using constructor. 

The highlight is, you can always initialize an array to `0` by adding `()` . Like the example below. 

```C++
int *pia2 = new int[10](); 
```



## `enum`

For `enum` instance, if it's global, then it's initlized as 0, if local, it's undefined(random). 



## `sizeof` and `strlen`

`sizeof` is the size for memory allocated. Notice that for string, there's a `\0` as the end of the string. 

`strlen` is the length of s string. If it's not a string, then it's undefined. 

 

## `virtual`

Note that if there's virtual, there's a virtual table allocated and the pointer to the virtual table would take 4 byte(32 system) extra memory. 



## Override and Overload

**override**

- Children-parent class
- redefine the method
- implemented with virtual table
- result of inherence

**overload**

- rewrite with in one class
- must have different parameters
- could have different return value



## copy

```C++
A a;
A b = a; 
```

shallow copy

```C++
A a;
A b;
a = b;
```

if `=` is overrided with deep copy operation, it's deep copy. 



## `char*` and `char[]`

`char*` the address of the head of an array (or a char). 

`char[]` the reference to the array. 

check [this](https://blog.csdn.net/daiyutage/article/details/8604720) for detailed confusing cases