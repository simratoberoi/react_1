{/*dynamic components and reusable components*/}
function Random(){
    let number = Math.random()*100;
    return <h2 style={{'background-color': '#2B2B2B', 'color': '#ffffff', 'max-width': '20%', 'height': '5vh', 'justify-content': 'center', 'text-align': 'justify'}}>Random number is: {Math.round(number)}</h2>
}
export default Random;