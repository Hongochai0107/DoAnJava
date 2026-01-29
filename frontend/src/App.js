import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import "./assets/sass/app.scss";
import { CartProvider } from "./layouts/CartContext";
import { UserProvider } from "./context/UserContext";

function App(){
  return(
    <UserProvider>
      <CartProvider>
        <div>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </CartProvider>
    </UserProvider>
  );
}
export default App;