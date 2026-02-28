export default {
  order: 1,
  id: "strategy-pattern",
  title: "Strategy Design Pattern",
  sections: [
    {
      title: "Overview",
      body: "The Strategy Design Pattern is a behavioral pattern that allows you to define a family of algorithms, encapsulate each one as a separate class, and make them interchangeable at runtime. Instead of using massive conditional statements (if/elif/else) to select behavior, you delegate the task to a strategy object that can be swapped dynamically.",
    },
    {
      title: "Key Components",
      body: "The Strategy pattern is built around three core components:",
      note: [
        "Strategy Interface — A common interface (often an Abstract Base Class) that defines the method(s) all concrete strategies must implement.",
        "Concrete Strategies — Classes that implement specific versions of the algorithm (e.g., CreditCardPayment, PayPalPayment).",
        "Context — The class that uses a strategy. It maintains a reference (through composition or dependency injection) to a strategy object and calls its method without knowing the implementation details.",
      ],
    },
    {
      title: "Python Implementation Example",
      body: "In this example, we use Python's abc module to enforce the strategy interface and demonstrate runtime switching of strategies.",
      code: `from abc import ABC, abstractmethod

# 1. Strategy Interface
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

# 2. Concrete Strategies
class CreditCardPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paying {amount} using Credit Card.")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount):
        print(f"Paying {amount} using PayPal.")

# 3. Context Class
class ShoppingCart:
    def __init__(self, payment_strategy: PaymentStrategy):
        self._payment_strategy = payment_strategy

    def set_strategy(self, strategy: PaymentStrategy):
        self._payment_strategy = strategy

    def checkout(self, amount):
        self._payment_strategy.pay(amount)

# Client Code
cart = ShoppingCart(CreditCardPayment())
cart.checkout(100)  # Paying 100 using Credit Card.

# Swap strategy at runtime
cart.set_strategy(PayPalPayment())
cart.checkout(200)  # Paying 200 using PayPal.`,
      codeLang: "python",
    },
    {
      title: "Benefits",
      body: "The Strategy pattern provides several architectural advantages:",
      note: [
        "Open/Closed Principle — You can add new strategies (e.g., a CryptoPayment class) without modifying existing classes like ShoppingCart.",
        "Runtime Switching — You can change an object's behavior while the program is running.",
        "Isolation — Complex algorithm logic is separated from the main business logic of the context class.",
      ],
    },
    {
      title: "Real-World Use Cases",
      body: "Common real-world applications of the Strategy pattern include:",
      note: [
        "Payment Processing — Choosing between different payment gateways (Stripe, PayPal, Bitcoin).",
        "Navigation Systems — Selecting the fastest, shortest, or most scenic route in a GPS application.",
        "Data Compression/Serialization — Swapping between algorithms like ZIP, GZIP, or formats like JSON and XML.",
        "Sorting/Filtering — Applying different sorting logic (e.g., Bubble Sort vs. Quick Sort) based on dataset size.",
      ],
    },
  ],
};
