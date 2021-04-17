import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Guitars</h1>
    <div>
      <img
        className="guitar-img"
        src=" https://cdn.mos.cms.futurecdn.net/2ahx5EMCazvGZWA224XxFb.jpg"
      ></img>
      <img
        className="guitar-img"
        src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7qjD6MvrzFJ6o31h5-usdWnlcfeAEK8Zz5ZATv_cxWL4Q4ZuEToDTFqwHf-ZX82UKNs&usqp=CAU"
      ></img>
      <img
        className="guitar-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUbmeodpRoGxNy9iIPQiTxCiNZLgFHpuGuU0cmM4NA_U6u6jAhGpOPPRavG2E1EsqNDU&usqp=CAU "
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
