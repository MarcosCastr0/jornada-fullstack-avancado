import API from '../../api/api'
import { useState } from 'react'
import { useEffect } from 'react'

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

  return (
    <form className="container">
      <h1>Cadastro de Items</h1>
      <div className="form-group mt-2">
        <label>Nome: </label>
        <input className="form-control" type="text" name="nome" />
      </div>

      <div className="form-group mt-2">
        <label>Url da Imagem: </label>
        <input className="form-control" type="text" name="nome" />
      </div>

      <div className="form-group mt-2">
        <label>Categoria</label>
        <select className="form-control" name="categoria">
          {category.map(el => (
            <option key={el._id}>{el.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group mt-2">
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </div>
    </form>
  )
}

export default Create
