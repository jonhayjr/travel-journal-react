import './style.css';

import data from './data';

/*Import Components*/ 
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Header/>
      <CardContainer>
      {
        data.map((item, index) => (
          <Card 
            key={index}
            item={item}
          />
        ))
      }
      </CardContainer>
    </div>
  );
}

export default App;
