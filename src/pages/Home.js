import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">

        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4 mt-5">Chat App</h1>
              <p className="lead">Un gran lugar para compartir tus pensamientos con amigos.</p>
              <div className="mt-5">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Crear una cuenta</Link>
                <Link className="btn px-5" to="/login">Inicia sección</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}