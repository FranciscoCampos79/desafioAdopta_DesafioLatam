import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import MyCards from './components/MyCards';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header title="Adopta un Perrito"/>

      <div className='row' style={{ gap: '20px'}}>
        <MyCards colorborde='success' imagen="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600" title="Un buen perrito." descripcion="Un perrito que se hace y se deja queres. Dale todo tu amor." colorBdg='success'/>

        <MyCards colorborde='warning' imagen="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=600" title="Un perro valiente." descripcion="Un valiente y poderoso amigo y compañero. Él siempre te cuidara y protegera." colorBdg='warning' />

        <MyCards colorborde='primary' imagen="https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?auto=compress&cs=tinysrgb&w=600" title="Un fiel compañero." descripcion="El compañero que siempre has querido tener. Fiel y amoroso, contigo y los demas." colorBdg='primary'/>

        <MyCards colorborde='danger' imagen="https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&w=600" title="Un gran amigo." descripcion="Ese amigo que siempre va a todos lados contigo y nunca te defraudara." colorBdg='danger'/>
      </div>

      <Footer title="Muchos perritos estan esperan a tener un amigo como tu. Dales una oportunidad y ven a buscar ese amigo que siempre has querido tener."/>
    </>
  )
}

export default App;