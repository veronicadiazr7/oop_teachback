## Typescript’s Object Oriented Programming  
  

Typescript’s Object Oriented Programming is based on the four great pillars, one of them being **Encapsulation**. This is a concept that enables the developer to perform “*data hiding*”, in other words, some data (attributes or methods of a class) could need to be hidden so that it’s not modified by accident or on purpose by other code in the program. In order to perform encapsulation, it is required to use access modifiers which are markers on code that determine where the code can be accessed. Two of the four access modifiers are **protected** and **private**. In the private access modifier, the attributes and methods can only be accessed inside the class it was created, therefore not visible by any subclasses. In order to gain access to any attributes or methods from a private attribute or method, accessor methods are provided **(get/set)**. With the protected modifier, the attributes and methods can only be accessed in the class it was created (parent class) and its child classes, this is made possible thanks to one of the other 4 great pillars of OOP,  **inheritance**. Therefore, the use of the private modifier is recommended to be used when the subclasses can have access to the data, but not unrelated classes. 

In the case of the term **static**, classes have static elements that are not associated/bound with a particular instance of the class; they're used when we want to store data at the class level. The static elements of a class can be accessed through the class's constructor and they can be inherited. To define them we use the *static* keyword. Static elements can be **public, protected,** and **private**. Additionally, it is recommended to use static methods when developing a class function that doesn't rely on an internal state, a good tip is to check if the function or a class member is using the "*this*" keyword, if they’re not they can be converted into a static method. 
  
