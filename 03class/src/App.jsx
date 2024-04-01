
import Card from './components/card'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='font-bold text-red-900'>click her</h1>
      <Card username="poovarasan" department="desine manager"/> {/* thie porps the assain the key and value that is pros the anoter name is dump components  */}
      <Card username="sla" department="best one" img="https://images.pexels.com/photos/15625357/pexels-photo-15625357/free-photo-of-white-flower-against-purple-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Card username="logan" department="fighting part"/>
    </>
  )
}

export default App
