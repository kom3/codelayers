export default {
  order: 5,
  id: "decorator-pattern",
  title: "Decorator Design Pattern",
  sections: [
    {
      title: "Overview",
      body: "The Decorator Pattern is a structural design pattern used in Low-Level Design (LLD) to dynamically add new behavior or responsibilities to an object without modifying its source code. It uses composition as a flexible alternative to subclassing, effectively solving the 'class explosion' problem where creating every possible combination of features via inheritance becomes unmanageable.",
    },
    {
      title: "Core Components",
      note: [
        "Component Interface: Defines the common interface for both the core objects and their wrappers.",
        "Concrete Component: The base object with original functionality (e.g., a 'Plain Coffee').",
        "Base Decorator: An abstract class that implements the component interface and contains a reference to a component object.",
        "Concrete Decorators: Specific wrappers that extend the base decorator to add specific behaviors (e.g., 'Milk' or 'Sugar').",
      ],
    },
    {
      title: "Python Implementation Example",
      body: "This example shows how to implement the Decorator pattern in Python using abstract base classes and concrete decorators.",
      code: `from abc import ABC, abstractmethod

# 1. Component Interface
class Coffee(ABC):
    @abstractmethod
    def get_description(self) -> str:
        pass

    @abstractmethod
    def get_cost(self) -> float:
        pass

# 2. Concrete Component
class PlainCoffee(Coffee):
    def get_description(self):
        return "Plain Coffee"
    
    def get_cost(self):
        return 2.0

# 3. Base Decorator (Abstract)
class CoffeeDecorator(Coffee):
    def __init__(self, coffee: Coffee):
        self._coffee = coffee

    def get_description(self):
        return self._coffee.get_description()

    def get_cost(self):
        return self._coffee.get_cost()

# 4. Concrete Decorators
class MilkDecorator(CoffeeDecorator):
    def get_description(self):
        return f"{self._coffee.get_description()}, Milk"
    
    def get_cost(self):
        return self._coffee.get_cost() + 0.5

class SugarDecorator(CoffeeDecorator):
    def get_description(self):
        return f"{self._coffee.get_description()}, Sugar"
    
    def get_cost(self):
        return self._coffee.get_cost() + 0.2

# Usage
if __name__ == "__main__":
    my_order = PlainCoffee()
    my_order = MilkDecorator(my_order)
    my_order = SugarDecorator(my_order)

    print(f"Order: {my_order.get_description()}")
    print(f"Total Cost: \${my_order.get_cost():.2f}")`,
      codeLang: "python",
    },
    {
      title: "Key Advantages",
      note: [
        "Adheres to Open/Closed Principle: New functionality can be added by creating new decorator classes without touching existing ones.",
        "Solves Class Explosion: Avoids creating dozens of subclasses for every permutation of features (e.g., CoffeeWithMilk, CoffeeWithSugar, CoffeeWithMilkAndSugar).",
        "Runtime Flexibility: Allows features to be added or removed at runtime based on user input or state.",
        "Layered Responsibility: Each decorator handles one specific task, following the Single Responsibility Principle.",
      ],
    },
    {
      title: "Common LLD Use Cases",
      note: [
        "Beverage Systems: Adding various toppings to drinks or pizzas.",
        "UI Components: Adding scrollbars, borders, or shadows to basic text views.",
        "Data Processing: Stacking encryption, compression, and logging layers onto file streams.",
        "Web Services: Wrapping API calls with authentication, rate limiting, and execution timing logic.",
      ],
    },
  ],
};