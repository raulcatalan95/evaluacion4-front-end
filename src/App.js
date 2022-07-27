import './App.css'; 
import { useState } from 'react';
import ropa_1 from './ropa_1.jpeg';
import ropa_2 from './ropa_2.jpg';


function App() {

  const [productos, setProductos] = useState([])

  function mostrar(event){
    event.preventDefault();
    const codigoProducto = event.target.txt_codigo.value
    const articuloProducto = event.target.txt_articulo.value
    const descripcionProducto = event.target.txt_descripcion.value
    const precioProducto = parseFloat(event.target.txt_precio.value)
    const cantidadProducto = parseFloat(event.target.txt_cantidad.value) 
    const totalProductos = precioProducto * cantidadProducto
    const totalDescuentoProductos = totalProductos - (totalProductos * 0.1)
    
    const venta ={
      codigo : codigoProducto,
      articulo : articuloProducto,
      descripcion: descripcionProducto,
      precio: precioProducto,
      cantidad: cantidadProducto,
      total: totalProductos,
      totalDescuento: totalDescuentoProductos
    }
    setProductos([...productos,venta])
    event.target.txt_codigo.value = ''
    event.target.txt_articulo.value = ''
    event.target.txt_descripcion.value = ''
    event.target.txt_precio.value = ''
    event.target.txt_cantidad.value = ''
    
  }

  return (
    <div className='w-100'>
      <div className='header d-flex align-items-center m-4 p-4 w-100'>
          <h1>MyOutfit</h1>
          <div className='row w-100 justify-content-center'>
              <div className='col-12 col-md-5'>
                  <img className='left-img' src={ropa_1}/>
              </div>
              <div className='col-12 col-md-5'>
                  <img className='left-img' src={ropa_2}/>
              </div>
          </div>
      </div>
      
      <div className="container w-100">
      <form onSubmit={mostrar}>
        
        <h2>Venta Prodcutos</h2>
              <div className="row">
                <div className="col-12 col-sm-6">
                  Ingrese Codigo
                  <input required className='form-control' type="text" name="txt_codigo"/><br/>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-6">
                  Ingrese Articulo
                  <input required className='form-control' type="text" name="txt_articulo"/><br/>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-6">
                  Ingrese Descripcion
                  <input required className='form-control' type="text" name="txt_descripcion"/><br/>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-6">
                  Ingrese Precio
                  <input required className='form-control' type="text" name="txt_precio"/><br/>
                </div>
                </div>
                <div className="row">
                <div className="col-12 col-sm-6">
                  Ingrese Cantidad
                  <input required className='form-control' type="number" name="txt_cantidad"/><br/>
                </div>
                </div>
                
              <input className='btn btn-primary' type="submit" value="Comprar"/>
        
      </form>
     <div className='container contenedor-table'>
        <div className='second-contenedor'>

      <table className='table mt-5'>
  <thead className='thead-dark'>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Artículo</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Total</th>
      <th scope="col">Total Descuento</th>
    </tr>
  </thead>
  <tbody>
     {productos.map(item =>{
       return(
         <tr key={item.codigo}>
          <td>{item.codigo}</td>
          <td>{item.articulo}</td>
          <td>{item.descripcion}</td>
          <td>{item.precio}</td>
          <td>{item.cantidad}</td>
          <td>{item.total}</td>
          <td>{item.totalDescuento}</td>
        </tr>
        )
      })}
   
  </tbody>
</table>
      
      </div>
          </div>

      </div>
    </div>
  );
}


export default App;
