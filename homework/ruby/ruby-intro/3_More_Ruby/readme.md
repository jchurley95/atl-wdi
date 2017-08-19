[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW Reading: Practical Object-Oriented Design in Ruby

[POODR](http://www.poodr.com/) (pronounced "pooder") explains object-oriented design (OOD) in Ruby. Javascript is an object-oriented language but it is not class-based like it is in Ruby, Java, C++, C, etc.. POODR was written by Sandi Metz, a software developer and author focused on writing flexible object-oriented code in Ruby and Rails.

## Exercise Objectives

- have fun reading material on programmatic thinking and design
- gain insight to programming languages from a design standpoint
- gain an intermediate level of understanding Ruby as a class-based language
- start thinking about the differences in Javascript and Ruby

## Directions

Read the first 3 chapters of POODR [available as a PDF here](https://github.com/edenzik/cs105b/blob/master/books/Practical%20Object-Oriented%20Design%20in%20Ruby.pdf) and answer the questions below.


### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?

```
Programs are made up of parts that interact to produce the behavior of the whole, these parts are called objects, and these interactions are messages passed between them. Object-oriented design is about managing these dependencies.
```

2. What does SOLID stand for?

```
SOLID:
    Single Responsibility
    Open-Closed
    Liskov Substitution
    Interface Segregation
    Dependency Inversion

Similar to DRY
```

3. Ruby is a class-based object-oriented language. What does that mean?

```
Combining data and behaviors into a single object, you can then define a class that provides a blueprint for the construction of similar objects.
```

4. Where are methods defined in Ruby?

```
Invoked in response to messages, these are definitions of object behavior.
```

5. Why does single Responsibility matter?

```
Classes with more than one responsibility are difficult to reuse. The process of getting only the parts you need is impossible. Duplicating the code in response to this leads to more maintenance and more bugs. 
```

6. What does `attr_reader` do?

```
Allows succeeding classes to inherit attributes of preceding classes, such as a RoadBike class inheriting the size from a Bicycle class. RoadBike is a subclass of Bicycle.
```

7. What are 4 benefits Metz outlines for methods that have a single responsibility?

```
Expose previously hidden qualities
Avoid the need for comments
Encourage reuse
Easy to move to another class
```

8. What are 4 things an object knows when it has a dependency?

```
The name of another class
The name of a message that it intends to send to someone other than self (methods on other objects)
The arguments that a message requires
The order of those arguments
```

9. Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?

```
injecting dependencies is when one object supplies the dependencies of another object, which allows the class to make acquiring dependencies something else's problem and upholds the idea of single responsibility.

isolating dependencies involves isolating unneccessary dependencies when you cannot remove them. It's like giving the class an immune system, which protects it from vulnerabilities coming from foreign dependencies that may otherwise break the code.
```
