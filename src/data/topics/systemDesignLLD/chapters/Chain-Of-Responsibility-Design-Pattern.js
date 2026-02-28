export default {
  order: 12,
  id: "chain-of-responsibility-design-pattern",
  title: "Chain Of Responsibility Design Pattern",
  sections: [
    {
      title: "Overview",
      body: " The Chain of Responsibility (CoR) is a behavioral design pattern that allows a request to be passed along a chain of potential handlers. Each handler in the chain decides either to process the request or to pass it to the next handler. Core Components - Handler (Interface/Abstract Class): Defines the common interface for all concrete handlers, usually including a method to handle the request and another to set the next handler. - Concrete Handlers: The actual classes that contain processing logic. They either handle the specific request or delegate it to the next link in the chain. - Client: Assembles the chain and initiates the request by sending it to the first handler.",
    },
    {
      title: "Python Implementation Example",
      code: `from abc import ABC, abstractmethod

# 1. Handler Interface
class MoneyHandler(ABC):
    def __init__(self):
        self.next_handler = None

    def set_next(self, handler):
        self.next_handler = handler
        return handler

    @abstractmethod
    def handle(self, amount):
        if self.next_handler:
            return self.next_handler.handle(amount)
        print(f"Remaining amount {amount} cannot be dispensed.")
        return None

# 2. Concrete Handlers
class Rupee2000Handler(MoneyHandler):
    def handle(self, amount):
        if amount >= 2000:
            num = amount // 2000
            remainder = amount % 2000
            print(f"Dispensing {num} x ₹2000 notes")
            if remainder > 0:
                return super().handle(remainder)
        else:
            return super().handle(amount)

class Rupee500Handler(MoneyHandler):
    def handle(self, amount):
        if amount >= 500:
            num = amount // 500
            remainder = amount % 500
            print(f"Dispensing {num} x ₹500 notes")
            if remainder > 0:
                return super().handle(remainder)
        else:
            return super().handle(amount)

class Rupee100Handler(MoneyHandler):
    def handle(self, amount):
        if amount >= 100:
            num = amount // 100
            remainder = amount % 100
            print(f"Dispensing {num} x ₹100 notes")
            if remainder > 0:
                return super().handle(remainder)
        else:
            return super().handle(amount)

# 3. Client Code
atm_chain = Rupee2000Handler()
atm_chain.set_next(Rupee500Handler()).set_next(Rupee100Handler())
print("--- Withdrawal: ₹2600 ---")
atm_chain.handle(2600)`,
      codeLang: "python",
    },
    {
      title: "Use Cases & Notes",
      note: [
        "Key Use Cases: Logging systems, web middleware architectures, and customer support escalation where multiple handlers evaluate a request.",
        "Advantages: Decoupling allows the sender not to know which object handles the request and flexibility to reorder/remove handlers at runtime.",
        "Disadvantages: If the chain is long, requests might require passing through many handlers before resolution.",
      ],
    },
  ],
};