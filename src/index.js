import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Tandoori Mushroom Pizza",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/Tandoori-Mushroom-Pizza-Featured-Image.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Tikka Masala Pizza",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/chicken-tikka-masala-pizza-thumb.jpg",
    soldOut: false,
  },
  {
    name: "Tandoori Vegetarian Pizza",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/Vegetarian-Tandoori-Naan-Pizza-FF3.jpg",
    soldOut: false,
  },
  {
    name: "Paneer Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/paneer-pizza-recipe-1.jpg",
    soldOut: false,
  },
  {
    name: "Desi Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/butterchickenpizzanumber2top.jpg",
    soldOut: true,
  },
  {
    name: "Indian Chickpea Pizza",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/chickpea-and-spinach-masala-pizza-3.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>All We Need Is Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      {/* PROPS - EVE numbers and boolean in quotes, but if u want no use {} */}
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/paneer-pizza-recipe-1.jpg"
        soldOut="false"
      />
    </main>
  );
}

//pizza component
function Pizza(props) {
  console.log("props to pizza component are :", props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open
    </footer>
  );
}

// strict mode - wrap app component inside it
//strict mode - during dev it will render the component twice to check for bugs and check for outdated
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
