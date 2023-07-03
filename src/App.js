import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Card from './ Card';
import Data from './Data';
import { useState } from 'react';


function App() {

  const [filter, setFilter] = useState('');

  const searchText = (event) => {

    setFilter(event.target.value);
  }

  const dataSearch = Data.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })

  console.log('demo', dataSearch);

  return (

    <>

      <div className='container justify-content-center'>

        <form className="col-sm-4 d-flex ms-auto mt-5 text-center">

          <input className="form-control text-center me-2" type="search" onChange={searchText.bind(this)} value={filter} placeholder="Search" aria-label="Search" />

          <br />

        </form>

      </div>


      <div className='container'>

        <div className='row'>

          {

            dataSearch.map((elem, index) => {

              return (

                <Card imgsrc={elem.img} desc={elem.desc} key={index} />

              )
            })


          }

        </div>
      </div>
    </>


  );
}

export default App;
