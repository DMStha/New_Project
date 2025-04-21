import React, { useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/productContext";

const News = (props) => {
  const { fetchData, articles } = useContext(ProductContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`bg-color1 ${props.mode} min-vh-100 py-4`}>
      <div className="container">
        <h3 className="text-center text-white mb-4">Top Headlines</h3>
        <div className="row g-4">
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <Card className="custom-card shadow-lg border-0 rounded-lg h-100 ">
                  {article.urlToImage && (
                    <Card.Img
                      variant="top"
                      src={article.urlToImage}
                      alt={article.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title
                      className="fw-bold"
                      style={{ fontSize: "1rem" }}
                    >
                      {article.title}
                    </Card.Title>
                    <Card.Text
                      className="flex-grow-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {article.description || "No description available."}
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p className="text-white text-center">Loading articles...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
