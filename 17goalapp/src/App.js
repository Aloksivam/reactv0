// import { useState } from "react";
import { useState, useRef, useEffect } from "react";
// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         show:false,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );
// //   const isFilledu
//   function saveData(e){setGiftCard({...giftCard,firstName:e.target.value})}
//   const submitHandler=(e)=>{
//     e.preventDefault();
//     setGiftCard({...giftCard,show:true})
//   }
//   function Formfillup() {
//     return(
//         <> 
//         <form onSubmit={submitHandler}> 
//             <input type="text" value={giftCard.firstName} onChange={saveData}/>
//         <button type="submit">submit</button></form>
//         </>
//     )
//   }
//   function spendGiftCard() {

//     setGiftCard((prevState) => {
//       return {...prevState,text: "Your coupon has been used.",valid:false,instructions:"Please visit our restaurant to renew your gift card.."}
//     })
//   }

//   return (

//     <>{giftCard.show==true? <div style={{padding: '40px'}}>
//     <h1>
//       Gift Card Page
//     </h1>
//     <h2>
//       Customer: {giftCard.firstName} {giftCard.lastName}
//     </h2>
//     <h3>
//       {giftCard.text}
//     </h3>
//     <p>
//       {giftCard.instructions}
//     </p>
//     {
//       giftCard.valid && (
//         <button onClick={spendGiftCard}>
//           Spend Gift Card
//         </button>
//       )
//     }
//   </div>:null
//     }
//     <Formfillup/>
//    </>
//   );
// }


// import { useState } from "react";

// import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    show: false,
    instructions: "To use your coupon, click the button below.",
  });

  const handleFirstNameChange = (e) => {
    const updatedFirstName = e.target.value;
    setGiftCard((prevState) => ({
      ...prevState,
      firstName: updatedFirstName,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setGiftCard((prevState) => ({
      ...prevState,
      show: true,
    }));
  };

  const spendGiftCard = () => {
    setGiftCard((prevState) => ({
      ...prevState,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card.",
    }));
  };

  function FormFillup() {
    return (
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={giftCard.firstName}
          onChange={handleFirstNameChange}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div>
      {giftCard.show ? (
        <div style={{ padding: "40px" }}>
          <h1>Gift Card Page</h1>
          <h2>
            Customer: {giftCard.firstName} {giftCard.lastName}
          </h2>
          <h3>{giftCard.text}</h3>
          <p>{giftCard.instructions}</p>
          {giftCard.valid && (
            <button onClick={spendGiftCard}>Spend Gift Card</button>
          )}
        </div>
      ) : (
        <FormFillup />
      )}
    </div>
  );
}
