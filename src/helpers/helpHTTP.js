export const helpHTTP = () => {
    const customFetch = (endpoint, options) => {
      const defaultHeaders = {
        //accept: 'application/json',
      };
  
      const controller = new AbortController(); //          Manejador de errores en caso
      options.signal = controller.signal; //            que no responda el fetch
  
      options.method = options.method || "GET"; //     Si no vienen opciones es un metodo GET
      options.headers = options.headers
        ? { ...defaultHeaders, ...options.headers } // Se unen las opciones de la petición con las default
        : defaultHeaders; // Si no se setea unicamente las default
  
      options.body = JSON.stringify(options.body) || false; // Seteamos false en caso de que no exista
      if (!options.body) delete options.body; //  Elimina la propiedad del objeto
  
      //console.log(options);
  
      setTimeout(() => {
        controller.abort(); //Si despues de 3s no obtenemos respuesta del servidor, que aborte
      }, 45000);
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options);
  
    const post = (url, options = {}) => {
      options.method = "POST"
      return customFetch(url, options)
    };
  
    const put = (url, options) => {
      options.method = "PUT"
      return customFetch(url, options)
    };
  
    const del = (url, options) => {
      options.method = "DELETE"
      return customFetch(url, options)
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };
  