import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";
import  { ProductCard } from "./components/ProductCard"
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={<h1>Welcome</h1>}/>
    </>

  )
}
function Products(){
  return(
  <ProductCard> </ProductCard>
  )
}


