export default {
  order: 11,
  id: "proxy-design-pattern",
  title: "Proxy Design Pattern",
  sections: [
    {
      title: "Overview",
      body: " The Proxy Design Pattern is a structural pattern that provides a surrogate or placeholder for another object to control access to it. In Low‑Level Design (LLD), a proxy acts as an intermediary that can add functionality like lazy initialization, access control, logging, or caching without modifying the original \"Real Subject\" or the client code. Core Components - Subject (Interface): An abstract class or interface defining common operations for both the real object and the proxy. - Real Subject: The actual object that performs the core business logic or resource‑heavy tasks. - Proxy: Holds a reference to the Real Subject and implements the same interface to intercept and manage client requests. Types of Proxies - Virtual Proxy: Delays the creation of expensive‑to‑instantiate objects until they are actually needed (Lazy Loading). - Protection Proxy: Controls access to the real object based on permissions or authentication. - Caching Proxy: Stores results of expensive operations to avoid redundant work for repeated requests. - Remote Proxy: Acts as a local representative for an object located in a different address space or server.",
    },
    {
      title: "Python Implementation Example",
      code: `from abc import ABC, abstractmethod

# 1. Subject Interface
class Database(ABC):
    @abstractmethod
    def execute_query(self, query: str):
        pass

# 2. Real Subject: Heavy to initialize
class RealDatabase(Database):
    def __init__(self):
        print("Connecting to heavy Database... (Takes time/resources)")

    def execute_query(self, query: str):
        print(f"Executing query: {query}")

# 3. Proxy: Implements the same interface
class DatabaseProxy(Database):
    def __init__(self):
        self._real_db = None  # Reference to the real object

    def execute_query(self, query: str):
        # Lazy Initialization: Create real object only when needed
        if self._real_db is None:
            self._real_db = RealDatabase()
        # Additional logic (e.g., logging)
        print(f"Proxy: Logging request for '{query}'")
        self._real_db.execute_query(query)

# Client Code
def run_app(db: Database):
    print("Client: Application started, but no DB connection yet.")
    db.execute_query("SELECT * FROM users")

proxy = DatabaseProxy()
run_app(proxy)`,
      codeLang: "python",
    },
    {
      title: "Other Proxy Types",
      note: [
        "Protection Proxy: Controls access to the original object based on access rights or permissions.",
        "Caching Proxy: Stores results of expensive operations to avoid redundant recompilation.",
        "Remote Proxy: Acts as a local representative for an object located in a different address space or server.",
      ],
    },
  ],
};