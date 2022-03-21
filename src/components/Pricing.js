import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../api";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Pricing = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const [service, setService] = useState([]);
  const [tiers, setTiers] = useState([]);

  useEffect(() => {
    getTiers();
    // eslint-disable-next-line
  }, []);
  const getTiers = async () => {
    const res = await api("get", `/tiers/getByService/${id}`);
    setTiers(res.data.tiers);
    setService(res.data.tiers[0].service);
  };

  return (
    <div className="pricing-conatianer">
      <span className="pricing-heading">{service.name}</span>
      <div className="pricing-description">
        <p>{service.description}</p>
      </div>
      <div className="tiers-container">
        {tiers.map((item, index) => {
          return (
            <div className="tier-container">
              <div className="tier-heading">
                <h2>{item.name}</h2>
              </div>
              <div className="tier-price">${item.price} / mo</div>
              <p
                style={{
                  width: 130,
                  margin: "10px auto",
                  textAlign: "center",
                }}
              >
                {item.description}
              </p>
              <div className="tier-btn">
                <Button
                  variant={index === 0 ? "outlined" : "contained"}
                  style={{ width: "90%", padding: 10 }}
                  onClick={() => history.push(`/checkout/${item._id}`)}
                >
                  Buy now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pricing-footer">
        <Divider sx={{ mb: 2, width: "100%" }} />
        <div className="footer-flex ">
          <div>© 2017-2020</div>
          <div>
            <strong>Features</strong>
            <br />
            <br />
            Cool stuff
            <br />
            Random feature
            <br />
            Team feature
            <br />
            Stuff for developers
            <br />
            Another one
            <br />
            Last time
          </div>
          <div>
            <strong>Resources</strong>
            <br />
            <br />
            Resource
            <br />
            Resource name
            <br />
            Another resource
            <br />
            Final resource
          </div>
          <div>
            <strong>About</strong>
            <br />
            <br />
            Team
            <br />
            Locations
            <br />
            Privacy
            <br />
            Terms
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
