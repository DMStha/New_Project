import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate

const Userlist = ({ mode }) => {
  const navigate = useNavigate();

  const users = [
    { _id: 1, name: "Diom", address: "Kathmandu" },
    { _id: 2, name: "Rahul", address: "Pokhara" },
    { _id: 3, name: "Raju", address: "Pokhara" },
    { _id: 4, name: "Raja", address: "Pokhara" },
  ];

  const handleUser = (user_id, userName) => {
    navigate(`/${user_id}/${userName}`);
  };

  return (
    <div className={`bg-color1 ${mode} min-vh-100 py-5 `}>
      <div className="container mt-4">
        <h2 className={`text-center mb-5 fw-bold text-light`}>User List</h2>
        <div className="row g-4">
          {users.map((user) => (
            <div key={user._id} className="col-md-5 m-2">
              <Card className="custom-card shadow-lg border-0 rounded-lg p-3 transition-all hover-shadow hover:bg-light">
                <Card.Body>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-bold">
                      <i className="bi bi-person-circle text-light"></i>{" "}
                      {user.name}
                    </h5>
                    <Button
                      onClick={() => handleUser(user._id, user.name)}
                      variant="outline-light"
                      size="sm"
                    >
                      View Profile
                    </Button>
                  </div>
                  <p className=" mb-0 text-warning">
                    <i className="bi bi-geo-alt-fill text-danger"></i>{" "}
                    {user.address}
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userlist;
