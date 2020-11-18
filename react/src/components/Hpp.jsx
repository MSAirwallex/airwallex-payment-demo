import React from "react";
import { redirectToCheckout, loadAirwallex } from "airwallex-payment-elements";

const intentid = "replace-with-your-intent-id";
const client_secret = "replace-with-your-client-secret";

const Hpp = () => {
  const redirectHpp = async () => {
    try {
      await loadAirwallex({
        env: "staging",
      });
      await redirectToCheckout({
        env: "staging",
        id: intentid,
        client_secret: client_secret,
      });
    } catch (error) {
      // handle errors here
    }
  };

  return (
    <div>
      <h2>Option #1: Hosted payment page (HPP) integration</h2>
      <button onClick={redirectHpp}>Redirect to HPP</button>
    </div>
  );
};

export default Hpp;