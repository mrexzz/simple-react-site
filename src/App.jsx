import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Mapping from './components/Mapping';
import Projeler from './components/Projeler';
import Tevazu from './components/Tevazu';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Background />
      <Mapping />
      <Projeler />
      <Tevazu />
      <Card />
      <Footer />


      {/* <div className="card" style={{display: "flex",justifyContent:"center",alignItems:"center",width: "18rem"}}>
            <img src="https://fastly.picsum.photos/id/445/200/300.jpg?hmac=7dfJBQTfK8boCS5_EXpFW8SC_8VKMgDw5yFInpEee4s" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"> content.</p>
              <a href="#" className="btn btn-primary">Bilgi..</a>
            </div>
            </div> */}



    </>
  )
}

export default App