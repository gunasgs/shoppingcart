import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CartItems from "./CartItems";
import { useState } from "react";
import Nav from "./Nav.js";
function App() {
  const [items, setitems] = useState([
    {
      id: 1,
      img: "https://aayantradingfze.com/wp-content/uploads/apple-final.png",
      brand: "Iphone",
      model: "13PRO",
      price: 100000,
      isstock: true,
    },
    {
      id: 2,
      img: "https://cdn.iconscout.com/icon/free/png-256/samsung-226432.png",
      brand: "Samsung",
      model: "S22",
      price: 90000,
      isstock: true,
    },
    {
      id: 3,
      img: "https://cdn.iconscout.com/icon/free/png-256/oneplus-2849945-2370670.png",
      brand: "Oneplus",
      model: "9R",
      price: 80000,
      isstock: "true",
    },
    {
      id: 4,
      img: "https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview",
      brand: "google",
      model: "Pixel4",
      price: 70000,
      isstock: false,
    },
    {
      id: 5,
      img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/lg-512.png",
      brand: "LG",
      model: "G8X",
      price: 70000,
      isstock: "false",
    },
    {
      id: 6,
      img: "https://cdn.iconscout.com/icon/free/png-256/vivo-282151.png",
      brand: "Vivo",
      model: "X50",
      price: 60000,
      isstock: false,
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/512/882/882745.png",
      brand: "Oppo",
      model: "Reno",
      price: 50000,
      isstock: true,
    },
    {
      id: 8,
      brand: "MI",
      img: "https://i.pinimg.com/originals/9a/54/d3/9a54d3272a85435f8aa767452b6cf0fe.png",
      model: "11",
      price: 40000,
      isstock: "true",
    },
    {
      id: 9,
      img: "https://cdn.iconscout.com/icon/free/png-256/nokia-2-226428.png",
      brand: "Nokia",
      model: "10",
      price: 40000,
      isstock: true,
    },
    {
      id: 10,
      img: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/realme-mobile-logo.png",
      brand: "Realme",
      model: "13",
      price: 30000,
      isstock: true,
    },
    {
      id: 11,
      img: "https://cdn.iconscout.com/icon/free/png-256/sony-226421.png",
      brand: "Sony",
      model: "x",
      price: 20000,
      isstock: true,
    },
    {
      id: 12,
      img: "https://cdn-icons-png.flaticon.com/512/882/882744.png",
      brand: "Asus",
      model: "z",
      price: 20000,
      isstock: false,
    },
  ]);

  const [Cartitems, setcart] = useState([]);
  const [total, settotal] = useState(0);

  let showprice = (data) => {
    setcart([...Cartitems, data]);
    settotal(total + data.price);
  };

  let remove = (item) => {
    let index = Cartitems.findIndex((citem) => citem.id === item.id);
    Cartitems.splice(index, 1);
    setcart([...Cartitems]);
    settotal(total - item.price);
  };

  return (
    <>
      <div>
        <Nav />
      </div>

      <section>
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-lg-10 ">
              <div className="row">
                {items.map((mob) => {
                  return (
                    <Card
                      handle={showprice}
                      mobile={mob}
                      cartitems={Cartitems}
                    />
                  );
                })}
              </div>
            </div>
          
            <div className="col-lg-2">
              <h2 className="text-center">Cart({Cartitems.length})</h2>
              <ol>
                {Cartitems.map((item) => {
                  return <CartItems remove={remove} item={item} />;
                })}
              </ol>
              <h3 className=" text-center">Total : {total}</h3>
            </div>
          </div>
        </div>
     
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
