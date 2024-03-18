import Nav from './component/Nav'
import Footer from './component/Footer'
import Card from './component/Card'

const App = () => {
  return (
    <>
      <Nav />
      <Footer />
      <div className="cards">
        <Card img="https://manforhimself.com/wp-content/uploads/2021/02/zayn-malik-cropped-short-blue-dyed-hair-man-for-himself-1200-600x600.jpg" name="zayn malik" age="31" />
        <Card img="https://cdns-images.dzcdn.net/images/artist/297bb4be579250bdcd9025c427e5b59e/500x500.jpg" name="lil pump" age="23" />
        <Card img="https://resources.tidal.com/images/7fb0547f/51a0/4ca1/9cf1/f7cee74aeaa6/750x750.jpg" name="Chris Brown" age="34" />
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwQvEqXCuvYOLESmHktdyvJL-Pf_dnEK1Dw&usqp=CAU" name="justin bieber" age="30" />
      </div>
    </>
  )
}

export default App
