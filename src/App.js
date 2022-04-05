import './style.css';

import data from './data';

/*Import Components*/ 
import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Header/>
      <div className="flex-container">
      {
        data.map((item, index) => (
          <Card 
            key={index}
            item={item}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
