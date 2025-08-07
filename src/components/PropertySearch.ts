import { mockProperties } from "../data/mockProperties";
import type { Property } from "../data/mockProperties";

interface SearchFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
}

export class PropertySearch {
  private container: HTMLDivElement;
  private properties: Property[] = [];
  private filteredProperties: Property[] = [];
  private currentFilters: SearchFilters = {
    location: "",
    minPrice: 0,
    maxPrice: 3000,
    bedrooms: 0,
  };
  private currentSort: string = "price-low";

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.initializeProperties();
    this.render();
  }

  private initializeProperties(): void {
    this.properties = mockProperties;
    this.filteredProperties = [...this.properties];
    this.sortProperties(this.currentSort);
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="search-page">
        <div class="search-filters">
          <div class="filter-section">
            <h3>Search Filters</h3>
            
            <div class="filter-group">
              <label for="location">Location</label>
              <input type="text" id="location" placeholder="Enter city, area, or postcode" value="${
                this.currentFilters.location
              }">
            </div>
            
            <div class="filter-group">
              <label>Monthly Rent (£)</label>
              <div class="price-inputs">
                <input type="number" id="minPrice" placeholder="Min" value="${
                  this.currentFilters.minPrice
                }">
                <span>-</span>
                <input type="number" id="maxPrice" placeholder="Max" value="${
                  this.currentFilters.maxPrice
                }">
              </div>
            </div>
            
            <div class="filter-group">
              <label for="bedrooms">Bedrooms</label>
              <select id="bedrooms">
                <option value="0" ${
                  this.currentFilters.bedrooms === 0 ? "selected" : ""
                }>Any</option>
                <option value="1" ${
                  this.currentFilters.bedrooms === 1 ? "selected" : ""
                }>1+</option>
                <option value="2" ${
                  this.currentFilters.bedrooms === 2 ? "selected" : ""
                }>2+</option>
                <option value="3" ${
                  this.currentFilters.bedrooms === 3 ? "selected" : ""
                }>3+</option>
              </select>
            </div>
            
            <button class="search-btn" id="searchBtn">Search Properties</button>
            <button class="clear-btn" id="clearBtn">Clear Filters</button>
          </div>
        </div>
        
        <div class="search-results">
          <div class="results-header">
            <h3>${this.filteredProperties.length} Properties Found</h3>
            <div class="sort-controls">
              <label for="sortBy">Sort by:</label>
              <select id="sortBy">
                <option value="price-low" ${
                  this.currentSort === "price-low" ? "selected" : ""
                }>Price: Low to High</option>
                <option value="price-high" ${
                  this.currentSort === "price-high" ? "selected" : ""
                }>Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div class="properties-grid" id="propertiesGrid">
            ${this.renderProperties()}
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderProperties(): string {
    return this.filteredProperties
      .map(
        (property) => `
        <div class="property-card" data-id="${property.id}">
          <div class="property-image">
            <img src="${property.image}" alt="${property.title}">
            <div class="property-badge ${property.type}">${property.type}</div>
          </div>
          <div class="property-content">
            <h4 class="property-title">${property.title}</h4>
            <p class="property-address">${property.address}</p>
            <div class="property-details">
              <span class="detail">
                <i class="fas fa-bed"></i>
                ${property.bedrooms} bed
              </span>
              <span class="detail">
                <i class="fas fa-bath"></i>
                ${property.bathrooms} bath
              </span>
            </div>
            <p class="property-description">${property.description}</p>
            <div class="property-footer">
              <div class="property-price">£${property.price.toLocaleString()}/month</div>
              <button class="view-details-btn">View Details</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  private attachEventListeners(): void {
    const searchBtn = this.container.querySelector("#searchBtn");
    const clearBtn = this.container.querySelector("#clearBtn");
    const sortSelect = this.container.querySelector("#sortBy");

    searchBtn?.addEventListener("click", () => this.performSearch());
    clearBtn?.addEventListener("click", () => this.clearFilters());
    sortSelect?.addEventListener("change", (e) =>
      this.sortProperties((e.target as HTMLSelectElement).value)
    );
  }

  private performSearch(): void {
    const location =
      (this.container.querySelector("#location") as HTMLInputElement)?.value ||
      "";
    const minPrice = parseInt(
      (this.container.querySelector("#minPrice") as HTMLInputElement)?.value ||
        "0"
    );
    const maxPrice = parseInt(
      (this.container.querySelector("#maxPrice") as HTMLInputElement)?.value ||
        "3000"
    );
    const bedrooms = parseInt(
      (this.container.querySelector("#bedrooms") as HTMLSelectElement)?.value ||
        "0"
    );

    this.currentFilters = {
      location,
      minPrice,
      maxPrice,
      bedrooms,
    };

    this.filteredProperties = this.properties.filter((property) => {
      const matchesLocation =
        !location ||
        property.address.toLowerCase().includes(location.toLowerCase()) ||
        property.title.toLowerCase().includes(location.toLowerCase());

      const matchesPrice =
        property.price >= minPrice && property.price <= maxPrice;
      const matchesBedrooms = bedrooms === 0 || property.bedrooms >= bedrooms;

      return matchesLocation && matchesPrice && matchesBedrooms;
    });

    this.render();
  }

  private clearFilters(): void {
    this.currentFilters = {
      location: "",
      minPrice: 0,
      maxPrice: 3000,
      bedrooms: 0,
    };
    this.filteredProperties = [...this.properties];
    this.render();
  }

  private sortProperties(sortBy: string): void {
    this.currentSort = sortBy;
    switch (sortBy) {
      case "price-low":
        this.filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        this.filteredProperties.sort((a, b) => b.price - a.price);
        break;
    }
    this.render();
  }
}
