import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Im8m_WJPYyybuVXX6WymkOZrJoAoJ3A-oQ&usqp=CAU"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso de Edteam</p>
        <p>Tu futuro te esta esperando</p>
        <a href="https://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />  
</div>
</>
)
export default App;



// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN solo elemento padre
// 3: Apoyarse d elos Fragment cuando necesito devolver dos elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra 
// 6: class => className
// 7: for => htmlFor