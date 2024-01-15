# **Requirements:**
# 1. Implement subclasses (ManhattanDistance, CosineDistance, HammingDistance) of the Distance class.
# 2. Each subclass should have an is_numeric attribute appropriately set.
# 3. For HammingDistance, include a normalize attribute.
# 4. Implement compute method in each subclass based on the provided formulas.
# 5. Handle errors and validations in compute method for each subclass.

# **Solution:**
```python
class ManhattanDistance(Distance):
    def compute(self, x: list[float | int], y: list[float | int]) -> Distance:
        """
        Override compute method for Manhattan Distance calculation.
        """
    
class CosineDistance(Distance):
    def compute(self, x: list[float | int], y: list[float | int]) -> Distance:
        """
        Override compute method for Cosine Distance calculation.
        """

class HammingDistance(Distance):
    def __init__(self, normalize: bool = False) -> None:
        """
        Constructor for initializing HammingDistance object.
        """
    
    def compute(self, x: str, y: str) -> Distance:
        """
        Override compute method for Hamming Distance calculation.
        """
