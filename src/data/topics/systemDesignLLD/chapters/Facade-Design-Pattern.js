export default {
  order: 8,
  id: "facade-design-pattern",
  title: "Facade Design Pattern",
  sections: [
    {
      title: "Overview",
      body: " The Facade Design Pattern is a structural pattern that provides a simplified, high-level interface to a complex subsystem. While the Adapter pattern aims for interoperability (making incompatible things work together), the Facade pattern focuses on simplicity (hiding complexity behind a single entry point). Core Components - Facade Class: The entry point that orchestrates multiple subsystem classes. - Subsystem Classes: Specialized classes that perform low-level operations. They are unaware of the Facade. - Client: Interacts only with the Facade to perform complex tasks with one call.",
    },
    {
      title: "Python Implementation Example",
      code: `# 1. Subsystem Classes (The complex parts)
class Lights:
    def dim(self, level):
        print(f"Lights dimmed to {level}%")

class Projector:
    def on(self):
        print("Projector turned on")

    def set_input(self, source):
        print(f"Projector input set to {source}")

class SoundSystem:
    def set_volume(self, level):
        print(f"Sound volume set to {level}")

# 2. Facade Class (The simplified interface)
class HomeTheaterFacade:
    def __init__(self):
        # Composition: Holding references to subsystems
        self.lights = Lights()
        self.projector = Projector()
        self.sound = SoundSystem()

    def watch_movie(self, movie_name):
        print(f"--- Preparing to watch {movie_name} ---")
        self.lights.dim(10)
        self.projector.on()
        self.projector.set_input("DVD")
        self.sound.set_volume(20)
        print("Movie started!")

# 3. Client Code
if __name__ == "__main__":
    # Client doesn't need to know how to set up the projector or lights
    theater = HomeTheaterFacade()
    theater.watch_movie("Inception")`,
      codeLang: "python",
    },
    {
      title: "Facade vs Adapter",
      note: [
        "Primary Intent: Facade Pattern simplifies a complex subsystem interface; Adapter Pattern makes incompatible interfaces compatible.",
        "Scope: Facade usually wraps multiple subsystem classes; Adapter typically wraps a single class.",
        "Timing: Facade is often used during design to simplify usage; Adapter is used to integrate existing legacy or 3rd‑party code.",
      ],
    },
  ],
};