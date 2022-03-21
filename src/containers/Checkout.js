import React, { useEffect, useState } from "react";
import CheckoutHeader from "../components/CheckoutHeader";
import BillingForm from "../components/BillingForm";
import Cart from "../components/Cart";
import api from "../api";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const [service, setService] = useState({});
  const [tier, setTier] = useState({});
  const [billingValues, setBillingValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    getTier();
    // eslint-disable-next-line
  }, []);

  const getTier = async () => {
    const res = await api("get", `/tiers/${id}`);
    setTier(res.data.tier);
    setService(res.data.tier.service);
  };

  // handle change function
  const handleChange = (name, value) => {
    setBillingValues((prev) => {
      prev[name] = value;
      return { ...prev };
    });
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api("post", `/users/`, billingValues);
    toast.success(res.data.message);
    history.push("/");
  };

  return (
    <div className="checkout-conatainer">
      <CheckoutHeader />
      <div className="checkout-flex">
        <div style={{ width: "65%" }}>
          <BillingForm
            values={billingValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div style={{ width: "30%" }}>
          <Cart tier={tier} service={service} />
        </div>
      </div>
      <div>© 2017-2020 Service Provider</div>
    </div>
  );
};

export default Checkout;
