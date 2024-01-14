

1. **`__init__`:**
   - **Purpose:** Initializes an object when it is created.
   - **Example:**
     ```python
     class Person:
         def __init__(self, name, age):
             self.name = name
             self.age = age
     ```

2. **`__str__`:**
   - **Purpose:** Returns a human-readable string representation of the object.
   - **Example:**
     ```python
     class Person:
         def __init__(self, name, age):
             self.name = name
             self.age = age

         def __str__(self):
             return f"{self.name}, {self.age} years old"
     ```

3. **`__repr__`:**
   - **Purpose:** Returns a string representation of the object that can be used to recreate the object.
   - **Example:**
     ```python
     class Point:
         def __init__(self, x, y):
             self.x = x
             self.y = y

         def __repr__(self):
             return f"Point({self.x}, {self.y})"
     ```

4. **`__len__`:**
   - **Purpose:** Returns the length of the object.
   - **Example:**
     ```python
     class Stack:
         def __init__(self):
             self.items = []

         def __len__(self):
             return len(self.items)
     ```

5. **`__add__`:**
   - **Purpose:** Defines the behavior of the `+` operator for objects of a class.
   - **Example:**
     ```python
     class Vector:
         def __init__(self, x, y):
             self.x = x
             self.y = y

         def __add__(self, other):
             return Vector(self.x + other.x, self.y + other.y)
     ```

6. **`__eq__`:**
   - **Purpose:** Defines the behavior of the equality operator (`==`) for objects of a class.
   - **Example:**
     ```python
     class Point:
         def __init__(self, x, y):
             self.x = x
             self.y = y

         def __eq__(self, other):
             return self.x == other.x and self.y == other.y
     ```

7. **`__iter__` and `__next__`:**
   - **Purpose:** Enables the object to be iterable, typically used in conjunction with iterators.
   - **Example:**
     ```python
     class Countdown:
         def __init__(self, start):
             self.start = start

         def __iter__(self):
             return self

         def __next__(self):
             if self.start <= 0:
                 raise StopIteration
             self.start -= 1
             return self.start + 1
     ```

