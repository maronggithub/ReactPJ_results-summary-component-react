import { useState } from 'react';
import './Index.css';
import data from "./data.json";

function App() {
  const[items] = useState(data);
  return (
    <div className="body">
      <div className='container'>
        <div className='outerbox'>
          <div className='resultbox'>
            <p className='resulthead'>Your Result</p>
            <p className='resultscore'><span>76</span> of 100</p>
            <h2>Great</h2>
            <p className='resultdes'>
            You scored higher than 65% of
            the people who have taken these tests.
            </p>
          </div>
          <div className='summarybox'>
            <h2>Summary</h2>
            <div className='summarylist'>
              {items.map((item,id) => (
                <div key={item.id} style={{backgroundColor:`${item.color}10`}} className='listbox'>
                  <h3 style={{color:`${item.color}`}}>
                    <img src={item.icon} alt={item.category}></img>
                    {item.category}
                  </h3>
                  <p><span className='score'>{item.score}</span>{" "}/ 100</p>
                </div>
              ))}
            </div>
            <button className='button'>Continue</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
