import React, { useEffect, useState } from "react";
import api from "../api";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useHistory } from "react-router-dom";

const Services = () => {
  const history = useHistory();
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    const res = await api("get", "/services/");
    setServices(res.data.services);
  };
  return (
    <div className="services-contianer">
      {services.map((item) => {
        return (
          <div style={{ width: 345 }}>
            <h2 style={{ marginBottom: 10 }}>{item.name}</h2>
            <p>{item.description}</p>
            <Button
              variant="contained"
              endIcon={<ChevronRightIcon />}
              style={{ marginTop: 10, backgroundColor: "#596267" }}
              onClick={() => history.push(`/detail/${item._id}`)}
            >
              View details
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
