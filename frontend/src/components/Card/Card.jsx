import "./card.css";
import API from "../../api/api";

function Card(props){

  async function deleteCard(event){
    const buttonEl = event.target 
    
    buttonEl.disabled = true;

    const request = await API.item.delete(props.id)

    console.log(request);

    props.refreshItems();

    buttonEl.disabled = false;
  }
  return(
        <div className="card mb-3" style={{height:"100%"}}>
          <img src={props.url} className="card-img-top" alt={props.name} />
          <div className="card-body">
            <a href="#" className="card-title">
              <h5 className="card-title">{props.name}</h5>
            </a>
            <p className="card-text">{props.category}</p>
            <button onClick={deleteCard} className="btn btn-danger">
              Remover
            </button>
          </div>
        </div>
    )
};

export default Card;