import axios from 'axios'
// const serverURI = 'http://10.0.0.115:3000/'
const serverURI = 'https://books-app-mysql.herokuapp.com/'

const catchError = async (err) => {
    /// Error
    if (err.response) {
      // console.log(err.response.data.msg);
      return err.response;
      /// Error de mala conexion
    } else if (err.request) {
      // console.log(err.request)
      return {
        data: {
          msg: "No se ha contactado con el servidor, revise su conexion a internet y vuelva a intentarlo",
        },
      };
      /// Error inesperado
    } else {
      // console.log("Error", err.message);
      return {
        data: { msg: "Ha ocurrido un error inesperado, intente nuevamente" },
      };
    }
  };

  
export const getBooks = async (req, res) =>{
try {
    let response = await axios.get(`${serverURI}books`)
    return response.data
} catch (error) {
    catchError(error)
}

}


export const addNewBook = async (book) =>{
    try {
        console.log(book)
        let response = await axios.post(`${serverURI}addNewBook`, book)
        return response
    } catch (error) {
        catchError(error)
    }
}

export const deleteBook = async (id) =>{
  try {
    // console.log(id)
    let response = await axios.post(`${serverURI}deleteBook`,{id})
    return response
} catch (error) {
    catchError(error)
}
}

export const updateBook = async (book,bookId)=>{
  try {
    console.log(book, bookId)
    let response = await axios.put(`${serverURI}updateBook/${bookId}`,book)
    return response
  } catch (error) {
    
  }
}