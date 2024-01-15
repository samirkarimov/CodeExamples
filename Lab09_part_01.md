# **Requirements:**
# 1. Implement the Distance class with specified attributes and methods.
# 2. The compute method should raise NotImplementedError if called directly.
# 3. Implement the __add__, __sub__, __eq__, and __str__ methods.

# **Solution:**
```python
class Distance:
    def __init__(self, value: float | int = None, is_numeric: bool = None) -> None:
        """
        Constructor for initializing the Distance object.
        """

    def compute(self, x: list[float | int] | float | int | str, y: list[float | int] | float | int | str) -> None:
        """
        An abstract method that will raise NotImplementedError if called directly.
        """

    def __add__(self, other: Distance | float | int) -> Distance:
        """
        Overloads the + operator to handle addition of Distance object with another Distance or float or int.
        """

    def __sub__(self, other: Distance | float | int) -> Distance:
        """
        Overloads the - operator to handle subtraction of Distance object with another Distance or float or int.
        """

    def __eq__(self, other: Distance) -> bool:
        """
        Overloads the == operator to compare two Distance objects for equality based on their value.
        """

    def __str__(self) -> str:
        """
        Returns a string representation of the distance.
        """
