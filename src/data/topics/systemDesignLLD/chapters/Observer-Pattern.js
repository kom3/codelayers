export default {
  order: 4,
  id: "observer-pattern",
  title: "Observer Design Pattern",
  sections: [
    {
      title: "Overview",
      body: "The Observer Pattern is a behavioral design pattern used in Low-Level Design (LLD) to establish a one-to-many relationship between objects. When a central object, called the Subject (or Observable), changes its state, all its dependents, called Observers, are notified and updated automatically.",
    },
    {
      title: "Core Components",
      body: "The pattern consists of four primary elements:",
      note: [
        "Subject/Observable (Interface/Abstract Class): Defines methods to attach, detach, and notify observers.",
        "Concrete Subject/Observable: The actual object being 'observed' (e.g., a Weather Station or Stock Market). It stores the state and triggers the notification method when that state changes.",
        "Observer (Interface/Abstract Class): Defines an update() method that the subject calls to push notifications.",
        "Concrete Observer: Objects that react to the subject's updates (e.g., a Phone Display or Email Alert system).",
      ],
    },
    {
      title: "Python Implementation Example",
      body: "This example demonstrates how to implement the Observer pattern with Python's abc module, including both the Subject and Observer interfaces as well as concrete implementations.",
      code: `from abc import ABC, abstractmethod

# 1. Observer Interface
class Observer(ABC):
    @abstractmethod
    def update(self, temperature: float):
        pass

# 2. Subject/Observable Interface
class Observable(ABC):
    @abstractmethod
    def attach(self, observer: Observer):
        pass
    
    @abstractmethod
    def detach(self, observer: Observer):
        pass
    
    @abstractmethod
    def notify(self):
        pass

# 3. Concrete Subject/Observable
class WeatherStation(Observable):
    def __init__(self):
        self._observers = []
        self._temperature = 0.0

    def attach(self, observer: Observer):
        if observer not in self._observers:
            self._observers.append(observer)

    def detach(self, observer: Observer):
        self._observers.remove(observer)

    def notify(self):
        for observer in self._observers:
            observer.update(self._temperature)

    def set_temperature(self, temp: float):
        print(f"WeatherStation: New temperature is {temp}°C")
        self._temperature = temp
        self.notify()

# 4. Concrete Observers
class PhoneDisplay(Observer):
    def update(self, temperature: float):
        print(f"Phone Display: Updated to {temperature}°C")

class TVDisplay(Observer):
    def update(self, temperature: float):
        print(f"TV Display: Showing weather {temperature}°C")

# Client Usage
if __name__ == "__main__":
    station = WeatherStation()
    phone = PhoneDisplay()
    tv = TVDisplay()

    station.attach(phone)
    station.attach(tv)

    station.set_temperature(25.5)  # Both displays update automatically`,
      codeLang: "python",
    },
    {
      title: "Key Advantages in LLD",
      note: [
        "Loose Coupling: The Subject does not need to know the concrete class of any Observer; it only interacts via the Observer interface.",
        "Open/Closed Principle: You can add new Observer types (e.g., a SmartMirrorDisplay) without modifying the WeatherStation class.",
        "Dynamic Relationships: Observers can subscribe or unsubscribe at runtime.",
      ],
    },
    {
      title: "Common Use Cases",
      note: [
        "Event-Driven Systems: Notifying UI components when underlying data changes (MVC architecture).",
        "Stock Market Updates: Real-time broadcasting of price changes to multiple trading platforms.",
        "Notification Services: Social media followers getting notified when an influencer posts.",
      ],
    },
  ],
};