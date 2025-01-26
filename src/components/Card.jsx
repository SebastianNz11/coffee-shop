import { BsStarFill } from "react-icons/bs";

export const Card = ({ products }) => {
  return (
    <div className="container">
      <div className="row ms-5 me-5  d-flex justify-content-center">
        {products.map((p) => (
          <div className="col-md-4 col-lg-4 col-sm-12 mb-5" key={p.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div>
                <img src={p.image} className="card-img-top" />
                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-9">{p.name}</div>
                      <div className="col-3 text-end bg-success text-white rounded-3">
                        {p.price}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <BsStarFill className="me-2 text-warning" />
                        {p.rating}({p.votes} votos)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
