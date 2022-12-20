import API from '../../api/api'
import { useState, useEffect } from 'react'

function Create() {
  const [category, setCategory] = useState([{ _id: 0, name: 'Carregando...' }])
  
  async function loadCategory() {
    const categoryFromDB = await API.category.list()
    const categoryReaded = await categoryFromDB.json()
    console.log('Carregou!')
    setCategory(categoryReaded)
  }

  useEffect(function () {
    loadCategory()
  }, [])

  // Pegar as categorias
  // Cadastrar na variável de estado

  async function cadastraItem(event) {
    event.preventDefault()

    const formEl = event.target;

    formEl.submit.disabled = true;

    // Criar um body da requisição
    const body = {
      name: formEl.nome.value,
      imageUrl: formEl.url.value,
      category: formEl.categoria.value,
    };

    const request = await API.item.create(body);
    console.log(request)
    formEl.submit.disabled = false;

    if (request.status == 201){
      // Deu certo
      alert ("Item Cadastrado com sucesso!!")
      formEl.nome.value = ""
      formEl.url.value = ""
    }else{
      // Deu errado
      alert ("Aconteceu algo, seu item NÃO foi cadastrado. :(")
    };
  };

  return (
    <form className="container" onSubmit={cadastraItem}>
      <h1>Cadastro de Items</h1>
      <div className="form-group mt-2">
        <label>Nome: </label>
        <input className="form-control" type="text" name="nome" />
      </div>

      <div className="form-group mt-2">
        <label>Url da Imagem: </label>
        <input className="form-control" type="url" name="url" />
      </div>

      <div className="form-group mt-2">
        <label>Categoria</label>
        <select className="form-control" name="categoria">
          {category.map(el => (
            <option key={el._id} value={el._id}>{el.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group mt-2">
        <button type="submit" name="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </div>
    </form>
  )
}

export default Create
