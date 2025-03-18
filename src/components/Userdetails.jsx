import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap"; // Using Bootstrap Card for styling

const Users = ({ mode }) => {
  // Add mode as a prop
  const { user_id, userName } = useParams();

  return (
    <div className={`bg-${mode} min-vh-100 py-2`}>
      <div className="container mt-4">
        <h3 className="text-center mb-4">User Details</h3>
        <Card className="shadow-lg border-0 rounded-lg">
          <Card.Body>
            <h5 className="fw-bold">User ID: {user_id}</h5>
            <p className="text-muted">User Name: {userName}</p>
            <Button
              variant="outline-primary"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Users;
