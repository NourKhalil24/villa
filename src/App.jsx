import './App.css'
import BestApartment from './components/BestApartment/BestApartment'
import Hero from './components/Hero/Hero'
import LeftImage from './components/LeftImage/LeftImage'
import NavBar from './components/NavBar/NavBar'
import SubHeader from './components/SubHeader/SubHeader'

function App() {
  return (
      <div className='app'>
        <SubHeader />
        <NavBar logo="VILLA" navitems={["Home" , "Properties" , "Propperty Details" ,"Contact Us"]}  />
        <Hero imgbg="./banner-01.jpg" location="Melbourne," loc="Australia" hery="Be Quick!" desc="Get the best villa in town" />
       <LeftImage/>
       <BestApartment />
      </div>
        
  )
}

export default App
