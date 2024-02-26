# React + Vite + Tailwind + React-Router

    Instalación de Vite_React y de Tailwind tal y como se indica en las guias de instalación:

```
	- [Vite](https://vitejs.dev/)

		npm create vite@latest . -- --template react

  - [ReactRouter](https://reactrouter.com/en/main/start/tutorial)

    npm install react-router-dom

	- [Tailwind](https://tailwindcss.com/docs/installation)

  		npm install -D tailwindcss postcss autoprefixer
		npx tailwindcss init -p

	
```

# Configuración Tailwind

Recomiendo instalar primero react roputer dom por que de si instalo primero tailwind mo me funciona bien

1. Configuramos las rutas que contendrán estilos tailwind en el fichero tailwind.config.js:

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Es muy importante añadir bien la rutas como es el caso del index.html

2. Añadimos las directivas de tailwind en nuestro fichero index.css

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Cambiamos la fuente por defecto en nuestra aplicación y el color de fondo:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @layer base {
     html {
       font-family: "Roboto", system-ui, sans-serif;
       background-color: #f9fafb;
     }
   }
   ```

4. Ejecutamos la herramienta CLI para escanear tus archivos de plantilla en busca de clases y construir tu CSS.

```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch

```

# Configuracion basica de React-router

1.  Se envuelve el componente App() en el archivo main.jsx

    ```js
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";
    import { BrowserRouter } from "react-router-dom";

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    ```

2.  Creamos el NavBar

    ```js
    import { Link } from "react-router-dom";

    export default function NavBar() {
      return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Altas">Altas</Link>
              </li>
              <li>
                <Link to="/Operqaciones">Operaciones</Link>
              </li>
              <li>
                <Link to="/Info">Info</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    ```

3.  Enrutamos App.jsx

    ```js
        import { Routes, Route } from "react-router-dom";
        import { Home, Altas, Operaciones, Info, NotFound } from "./Pages";
        export default function App() {

    return (
    <Routes>
		<Route index element={<Home />} />
		<Route path="Altas" element={<Altas />} />
		<Route path="Operaciones" element={<Operaciones />} />
		<Route path="Info" element={<Info />} />

		{/* Using path="*"" means "match anything", so this route
			acts like a catch-all for URLs that we don't have explicit
			routes for. */}
		<Route path="*" element={<NotFound />} />
	</Routes>

    );
    }
    ```

4.  Intrudicimos NavBar en el Header

    ```js
    import NavBar from "./ui/layouts/NavBar";

    export default function Header() {
      return (
        <div>
          <NavBar />
        </div>
      );
    }
    ```
# Cambio del favicon y el nombre pestaña

En index.html cambiamos la imagen y el texto
```html
<link rel="icon" type="image/svg+xml" href="/public/LogoPrestamoDefi.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prestamo Defi</title>
````

# Creacion de componentes

## Header Footer y AppLayout

Creampos los componentes header.jsx y Footer.jsx
AppLayout lo creamos para englobal el Header y el Footer en todas la paginas donde lo pongamos.

```js
	import PropTypes from "prop-types"
	import Footer from "../../Footer";
	import Header from "../../Header";

	export default function AppLayout({children}) {
		return (
			<>
			<Header />
			<main className="mx-auto min-h-[85vh]">{children}</main>
			<Footer />
			</>
		)
	}
	AppLayout.propTypes = {
	children: PropTypes.node.isRequired
	}
```
Luego englobamos el componente App.jsx:
```js
	import AppLayout from "./components/ui/layouts/AppLayout"

	function App() {

	return (
		<AppLayout>
		<h1>Esta es la pagina princial</h1>
	</AppLayout>
	)
	}

	export default App
```

