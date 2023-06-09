//import React from 'react'
//import { initialState } from 'react-use-cart';
import React, {useState} from 'react';
import data from './data';
import feuille from './img/feuille.jpg';

const Search = () => {
   const [filter, setFilter] = useState('');
   const searchText = (event) =>{
       setFilter(event.target.value);
   }
   let dataSearch = data.productData.filter(item =>{
      return Object.keys(item).some(key =>
         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
   });

  return (
    <>
    <section className='py-4 container'>
    <div className='col-auto ms-auto'>
    <h3><img src={feuille} alt=""  />Plante</h3>
     
     </div>
     <hr />
         <div className='row justify-content-center'>
         <div className='col-12 mb-5'>
           
            <div className='mb-3 col-4 mx-auto text-center'>
                 <label className='form-lable h4'>Recherche</label>

                 <input type="text" className='form-control' value={filter} onChange={searchText.bind(this)} />
            </div>
        </div>

             {dataSearch.map((item, index)=>{
                 return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={item.img} className='card-img-top img-fluid' alt="" />
                        <div className="card-body">
                            <h5 className='card-title'>{item.title}</h5>
                            <p className='card-text'>{item.desc}</p>
                        </div>
                    </div>
                </div>
                 )
             })}

             
         </div>
     </section>
    </>
  )
}

export default Search