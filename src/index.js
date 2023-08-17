import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogList from './components/BlogList'
import './styles/Menu.css'
import ArticleListProvider from './components/DataContext'
//import Menu from './components/Menu'
//import Footer from './components/Footer'


import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Description from './components/Description';
import AddForm from './components/AddForm';
const titre='Cuisine Africaine & Recettes'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ArticleListProvider>

    <div className="title">
            <nav className='navbar'>
              <div className="title-text"><h1>{titre}</h1></div> 
              <div className="nav-links">
                    <ul>
                        <li  ><NavLink to='/'>Blog</NavLink>  </li>
                        <li ><NavLink to='/ajouter'>Ajouter un article</NavLink> </li>
                        <li ><NavLink to='/apropos'>A Propos</NavLink> </li>
                    </ul>
              </div> 
                    <div >
                        <button className="btn-application" onClick={(e)=>{e.preventDefault(); window.open('https://play.google.com/store/apps/details?id=cm.seeds.cuisinedafrique&hl=fr&gl=US','_blank')}}>Ouvrir dans l'Application </button>
                    </div>
            </nav>
            
        </div>
      
      <Routes>
        <Route path='/' element={<BlogList/>}/>
        <Route path='*' element={<div>Erreur</div>}/>
        <Route path='/ajouter' element={<AddForm/>}/>
        <Route path='/description/:identifiant' element={<Description/>}/>
      </Routes>
     </ArticleListProvider> 
    </Router>
      
      
    
  </React.StrictMode>
);


