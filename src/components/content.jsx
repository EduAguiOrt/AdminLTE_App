const Content = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  {" "}
                  Top Navigation <small>Example 3.0</small>
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Layout</a>
                  </li>
                  <li className="breadcrumb-item active">Top Navigation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 col-lg-8">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title ">
                      <i className="fas fa-user mr-2"></i>
                      Agregar alumnos
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <labe>Nombre:</labe>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aquí"
                        maxLength={10}
                      />
                    </div>
                    <div className="form-group">
                      <labe>Apellidos:</labe>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aquí"
                      />
                    </div>
                    {/* poner en una fila los dos input */}
                    {/* col-xs-12 col-md-8 col-lg-8 */}
                    <div className="row">
                      <div className="form-group col-xs-12 col-md-8 col-lg-6">
                        <labe>Edad:</labe>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="0"
                        />
                      </div>
                      <div className="form-group col-xs-12 col-md-8 col-lg-6">
                        <labe>Calificación:</labe>
                        <input
                          type="number"
                          step="0.5"
                          max="10"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <labe>Email:</labe>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="eda@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="btn  btn-orange btn-info btn-lg float-right">
                      Aceptar
                    </button>
                    <button className="btn  btn-secondary">Cancelar</button>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title ">
                      <i className="fas fa-user mr-2"></i>
                      Agregar alumnos
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <labe>Nombre:</labe>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aquí"
                        maxLength={10}
                      />
                    </div>
                    <div className="form-group">
                      <labe>Apellidos:</labe>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aquí"
                      />
                    </div>
                    {/* poner en una fila los dos input */}
                    <div className="form-group">
                      <labe>Edad:</labe>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group">
                      <labe>Calificación:</labe>
                      <input
                        type="number"
                        step="0.5"
                        max="10"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group">
                      <labe>Email:</labe>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="eda@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="btn  btn-orange btn-info btn-lg float-right">
                      Aceptar
                    </button>
                    <button className="btn  btn-secondary">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
