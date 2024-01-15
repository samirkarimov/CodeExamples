 COMP100 2023F Lab 09: Object Oriented Programming - In-Lab
### Deadline Friday, December 29, 2023 05:20 PM

Although sample test cases are provided, be aware that additional test cases may be used during grading.

## Question 1: Creating the Distance Class

### Objective
Develop a `Distance` class that represents a general concept of distance, which will be the foundation for more specific distance calculations.

### Class Structure

- **Class Name**: `Distance`
- **Attributes**:
   - `value` (float): Represents the numerical value of the calculated distance.
   - `is_numeric` (bool): Indicates if the distance is numeric.
- **Methods**:
   - `__init__(self, value: float | int=None, is_numeric: bool=None) -> None`: Constructor for initializing the Distance object. If value is provided, is_numeric must also be explicitly set.
      - Raise `ValueError` with an appropriate message, if `value` is not `None` and `is_numeric` is `None`.
      - Raise `TypeError` with an appropriate message, if any of the arguments are not `None` and of incorrect type. For example, if a `str` value is passed to `value`, raise the error.
   - `compute(self, x: list[float | int] | float | int | str, y: list[float | int] | float | int | str)`: An abstract method that will calculate the distance based on inputs `x` and `y`. The method should be implemented in subclasses for specific distance calculations. If called directly, raise `NotImplementedError`.
   - `__add__(self, other: Distance | float | int) -> Distance`: Overloads the `+` operator to handle the addition of a `Distance` object with another `Distance` object or a `float` or an `int`.
      - Return a new `Distance` object representing the result of the operation. Do not return `float` or `int`.
      - Raise `TypeError` with an appropriate message, if `other` is neither a `Distance` nor a `float` nor an `int`.
      - Raise `ValueError` with an appropriate message, if `is_numeric` attributes of both operands do not match. **Important:** If `other` is of type `float` or `int`, it will not have `is_numeric` property. So, tread carefully!
      - Raise `ValueError`, if both operands are `Distance` and either of them has `value` of `None`.
   - `__sub__(self, other: Distance | float | int) -> Distance`: Same as `__add__` but performs subtraction.
   - `__eq__(self, other: Distance) -> bool`: Overloads the `==` operator to compare two `Distance` objects for equality based on their `value`.
   - `__str__(self) -> str`: Returns a string representation of the distance:
      - `Distance: <value>, Numeric: <is_numeric>`

### Task Instructions
1. The `compute` method should raise `NotImplementedError` if it is called directly from an instance of the `Distance` class.
2. You may provide any custom messages while raising exception from the above mentioned methods.

**IMPORTANT:** You need to complete all TODOs in the provided `.py` files. Remove `pass` in TODOs and write code under TODOs.

### Example Usage
```python
dist1 = Distance(5, True)
dist2 = Distance(3, True)

print(dist1)  # Output: "Distance: 5, Numeric: True"

result_add = dist1 + dist2 # this will call __add__ method
print(result_add)  # Output: "Distance: 8, Numeric: True"

print(dist2 + 3.3) # Output: "Distance: 6.3, Numeric: True"

print(dist1 == dist2) # Output: False

dist1.compute(5, 3)  # This should raise NotImplementedError
```

## Question 2: Implementing Specific Distance Subclasses

### Objective
Extend the `Distance` class by creating subclasses for specific types of distance calculations. Each subclass should implement its own method to calculate the distance according to the mathematical formulas provided.

### Subclasses to Implement

1. **ManhattanDistance**
    - Manhattan distance measures the distance between points in a grid-like path.
    - `is_numeric`: `True`
    - Formula:
   
   ![manhattan](assets/manhattan.png)
   
2. **CosineDistance**
   - Cosine distance measures the cosine of the angle between two vectors.
   - `is_numeric`: `True`
   - Formula:
   
   ![cosine](assets/cosine.png)

3. **HammingDistance**
   - Used to measure the difference between two strings of equal length. If `normalize` is set to `True`, the distance is normalized by the length of the strings.
   - `is_numeric`: `False`
   - Formula: Number of positions at which the corresponding symbols are different. For example:
     - "Th**is** is" and "Th**at** is" is 2. Here, we have two different characters and the hamming distance is 2.

### Subclasses Members

- **Attributes:**
   - For all distance subclasses, set `is_numeric` accordingly.
   - `normalize` (bool): Only declare it in `HammingDistance` and pass the value in its constructor
- **Method:**
   - `compute(self, x: list[float | int] | float | int | str, y: list[float | int] | float | int | str) -> Distance`: It will override the `compute` method of `Distance` base class and will calculate the distance based on inputs `x` and `y`, and formulas given above.
      - Return a new `Distance` object representing the result of the operation. Do not return `float` or `int`.
      - `compute` method of  `HammingDistance` will only accept `str` and method definition will be `def compute(self, x: str, y: str) -> Distance`.
      - Errors for `ManhattanDistance`:
         - Raise `TypeError` with an appropriate message, if any of the arguments are neither `list`, `float`, nor `int`.
         - Raise `TypeError` with an appropriate message, if `x` and `y` are of different types. However, one if one of them is `float`, other one can be an `int`.
         - Raise `ValueError` with an appropriate message, if `x` and `y` are `list` but their lengths are not equal.
      - Errors for `CosineDistance`:
         - Raise `TypeError` with an appropriate message, if `x` and `y` are not `list`.
         - Raise `ValueError` with an appropriate message, if `x` and `y` are `list` but their lengths are different.
      - Errors for `HammingDistance`:
         - Raise `TypeError` with an appropriate message, if `x` and `y` are not strings.
         - Raise `ValueError` with an appropriate message, if `x` and `y` are strings but their lengths are different.

### Task Instructions

1. Create each of the above subclasses of the `Distance` class, implementing the `compute` method according to the provided formulas.
2. Make sure the `is_numeric` attribute is set appropriately in each subclass. **Do not declare `is_numeric` again**.
3. For `HammingDistance`, include an additional attribute `normalize`. If `normalize` is `True`, divide the Hamming distance by the length of the strings to normalize it.
4. Ensure that each subclass's `compute` method correctly calculates and sets the `value` attribute based on the input data.
5. `x_i` and `y_i` in formulas above, refer to *i*-th element of `x` and `y` lists, `n` is the number of elements, and "." represents multiplication. For scalar values (`int` and `float`), same formulas will be applied and `n` will be 1.
7. About Hamming Distance:
   - Hamming distance counts how many characters are different given two strings of equal length. For example, "Th**is** is" and "Th**at** is" is 2. Here, we have two different characters and the hamming distance is 2.
   - Add an option in the constructor to *normalize* the distance by dividing it by the number of characters. The number of total characters is 7 (the space is included), therefore the normalized distance is 2/7 = 0.285 in this case.
   - The symbols may be letters, bits, or decimal digits, among other possibilities. For example, the Hamming distance between:
      - "ka**rol**in" and "ka**thr**in" is 3.
      - "k**a**r**o**lin" and "k**e**r**s**tin" is 3.
      - "k**athr**in" and "k**erst**in" is 4.
      - "10**1**1**1**01" and "10**0**1**0**01" is 2.
      - "2**17**3**8**96" and "2**23**3**7**96" is 3.

### Example Usage

```python
# Manhattan Distance Example
manhattan = ManhattanDistance()
manhattan_dist = manhattan.compute([1, 2], [4, 6])
print(manhattan_dist)  # Output: "Distance: 7, Numeric: True"

print(manhattan_dist + 3) # Output: "Distance: 10, Numeric: True"

# Cosine Distance Example
cosine = CosineDistance()
cosine_dist = cosine.compute([1, 2, 3], [4, 5, 6])
print(cosine_dist)  # Output: "Distance: 0.025368153802923787, Numeric: True"
# distance after decimal can be a little bit different as we are only checking for certain threshold

# Hamming Distance Example with normalization
hamming = HammingDistance(normalize=True)
hamming_dist = hamming.compute("hello", "holla")
print(hamming_dist)  # Output: "Distance: 0.4, Numeric: False"

# Hamming Distance Example without normalization
hamming = HammingDistance(normalize=False)
hamming_dist = hamming.compute("hello", "holla")
print(hamming_dist)  # Output: "Distance: 2, Numeric: False"
```
