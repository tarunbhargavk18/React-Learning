import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
        const date = new Date();
        return(
            <div>
                <form>
                    <label htmlFor="name" className="label">Enter name:</label>
                    <input type="text" id="name"  placeholder="Enter name"/>
                    <button style ={{color:"white",backgroundColor:"blue"}}>Submit</button>
                </form>
                <h1>The date is {date.getDate()}</h1>
            </div>
        )
}

ReactDOM.render((<App/>), document.querySelector('#root'));