import "./card.css";

function Card(){
    return(
        <div className="card mb-3" >
          <img src="http://picsum.photos/300/200" className="card-img-top" alt="..." />
          <div className="card-body">
            <a href="#" className="card-title">
              <h5 className="card-title"> Card title </h5>
            </a>
            <p className="card-text">Categoria</p>
            <a href="#" className="btn btn-danger">
              Remover
            </a>
          </div>
        </div>
    )
};

export default Card;