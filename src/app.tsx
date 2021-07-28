import * as React from 'react';
import * as ReactDom from 'react-dom';
import MainContainer from './components/MainContainer'

// function render(){
//     ReactDom.render(<h2> Hello from React!</h2>, document.body);
// }

// render();
/*
ReactDom.render(
    <MainContainer />,
    document.getElementById('root')
)
*/

export function App(){
    return(
        <MainContainer/>
    )
}