import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PropertySearch } from "./components/PropertySearch";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <h1>OpenRent</h1>
        </div>
        <nav class="nav">
          <a href="#" class="nav-link active">Find a Property</a>
          <a href="#" class="nav-link">Saved Properties</a>
        </nav>
      </div>
    </header>
    
    <main class="main-content">
      <div class="search-container">
        <div id="search-component"></div>
      </div>
    </main>
  </div>
`;

new PropertySearch(
  document.querySelector<HTMLDivElement>("#search-component")!
);
