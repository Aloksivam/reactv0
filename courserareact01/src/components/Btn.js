
// export default function Btn(){
//     function clickHandler(){
//         console.log('btn clicked')
//     }
//     return(<button onClick={clickHandler}>Click me</button>);
// }
export default function Btn(){
    function clickHandler(){
        console.log('btn clicked')
    }
    return(<button onMouseOver={clickHandler()}>Click me</button>);
}