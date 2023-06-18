import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Tandoori Mushroom Pizza",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "₹250",
    photoName: "pizzas/Tandoori-Mushroom-Pizza-Featured-Image.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Tikka Masala Pizza",
    ingredients: "Tomato and mozarella",
    price: "₹480",
    photoName: "pizzas/chicken-tikka-masala-pizza-thumb.jpg",
    soldOut: false,
  },
  {
    name: "Tandoori Vegetarian Pizza",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "₹270",
    photoName: "pizzas/Vegetarian-Tandoori-Naan-Pizza-FF3.jpg",
    soldOut: false,
  },
  {
    name: "Paneer Pizza",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "₹360",
    photoName: "pizzas/paneer-pizza-recipe-1.jpg",
    soldOut: false,
  },
  {
    name: "Desi Pizza",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "₹230",
    photoName: "pizzas/butterchickenpizzanumber2top.jpg",
    soldOut: true,
  },
  {
    name: "Indian Chickpea Pizza",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "₹200",
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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      {/* send each pizza obj as a prop */}
      {/* only if there is some pizza data */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We're still working on our Menu. Please come back later</p>
      )}

      {/* PROPS - EVE numbers and boolean in quotes, but if u want no use {} */}
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/paneer-pizza-recipe-1.jpg"
        soldOut="false"
      /> */}
    </main>
  );
}

//pizza component
function Pizza(props) {
  console.log("props to pizza component are :", props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
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
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00. Dine in or Order from the website.
            You can also find us on Swiggy!
          </p>
          <button className="btn">Order online</button>
        </div>
      ) : (
        <p>
          We are currently closed! Please come back between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
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
