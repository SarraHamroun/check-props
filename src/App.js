
import './App.css';
import Navb from './Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';

function App() {
  const displa={ display:'flex', justifyContent:'space-around'}
  return (
    <div>
   <Navb />
  <div> <h1 style={{textAlign: 'center', fontSize:'50px'}}> Zara Spring collection</h1> </div>,
   <div style={displa} className='robe'>
   <Products name='Robe rouge' size='S,M,L' price='98 DT' myStyle={{ width: '18rem' }}> <img src='https://www.3suisses.fr/media/produits/4473/img//robe-unie-sans-manches-ouverture-dos-femme-rouge-1_1140x1140.jpg' alt='robe'/> </Products>
   <Products name='Robe blanche' size='S,M' price='78 DT' myStyle={{ width: '18rem' }}> <img src='https://cdn1.brentinyparis.com/165060-zoom_image/robe-blanche-cotelee-avec-decollete-en-coeur.jpg' alt='robe'/> </Products>
   <Products name='Robe verte' size='M' price='198 DT' myStyle={{ width: '18rem' }}> <img src='https://www.3suisses.fr/media/produits/4473/img//robe-courte-fendue-manches-longues-col-v-femme-vert-1_1140x1140.jpg' alt='robe'/> </Products>
   </div>
   </div>
  );
}

export default App;
