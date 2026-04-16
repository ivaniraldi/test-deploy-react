function Card(props) {
    console.log(props)
 
    return (
    <div className="card mx-2 w-25">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsIt_dANHnwv2De5P_KLf93PJqUF4mHxX5w&s" className="card-img-top" alt="Plumon" />
      <div className="card-body">
        <h5 className="card-title fw-light mb-3">
          {props.titulo}
        </h5>
        <p className="card-text h6 fw-light">Plumones Manolino</p>
        <p className="fw-light">
          <i className="fas fa-map-marker-alt fa-xs"></i>
          9191 Avenida Vitacura, Chile
        </p>
        <hr />
        <ul className="list-group list-group-flush text-right">
          <li
            className="
                    list-group-item
                    ms-auto
                    fw-light
                    gris
                    py-0
                    pe-1
                    2
                    1
                    5
                    py-0
                    pe-1
                    2
                    1
                    5
                  "
          >
            ${props.precio}
            <span className="h5 fw-bold green ms-3">$22.990</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
