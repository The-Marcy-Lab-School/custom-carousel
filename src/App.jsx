import "./App.css";
import { Carousel } from "./components/carousel";

const carouselImages = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
  "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
];

const partData = [
  {
    title: "Part 1: Develop a functional carousel that can",
    tasks: [
      "Display images",
      "Allow users to manually switch images with `Prev` and `Next` buttons",
      "Show visual indicators (dots) for each image in the carousel",
    ],
  },
  {
    title: "Part 2: Abstract carousel functionality to custom hook",
    tasks: [
      "Create `useCarousel` hook to manage carousel state",
      "Refactor the Carousel component to use the hook",
      "Test the reusability of the hook to ensure it functions independently from the Carousel component and can be easily reused in other instances",
    ],
  },
  {
    title: "Part 3: Slideshow",
    tasks: [
      "Automatically move to the next image after a set interval",
    ],
  },
  {
    title: "Part 4: Polish & Stretch",
    tasks: [
      "Show progress bar for image timing",
      "Clicking on a 'dot/step' jumps the carousel to that image",
    ],
  }
];

const App = () => {
  return (
    <div
      style={{
        maxWidth: "42rem",
        minHeight: "100vh",
        margin: "2.5rem auto",
        padding: "0 1.25rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          display: "flex",
        }}
      >
        Code Challenge: Custom Carousel 🎠
      </div>

      <Carousel images={carouselImages} />

      <div style={{ marginTop: "1rem" }} />

      <h1 style={{ fontSize: "1.590rem", fontWeight: "extrabold" }}>
        Create a Functional Carousel using a Custom Hook!🪝
      </h1>

      <p style={{ fontWeight: "600", fontSize: "1rem", marginTop: "0" }}>
        Build a functional React carousel that cycles through images, then refactor the logic into a custom useCarousel hook.
      </p>

      {partData.map((part, idx) => (
        <div key={idx} style={{ marginBottom: ".5rem" }}>
          <h1 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
            {part.title}
          </h1>
          <div>
            {part.tasks.map((task, taskIdx) => (
              <label key={taskIdx} style={{cursor: "pointer", }}>
                <input type="checkbox" /> {task}
                <br />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
