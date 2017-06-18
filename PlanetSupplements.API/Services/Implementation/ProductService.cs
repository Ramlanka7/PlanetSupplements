using PlanetSupplements.API.Models;
using PlanetSupplements.API.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlanetSupplements.API.Services.Implementation
{
    public class ProductService : IProductService
    {
        public Task<IEnumerable<Product>> GetAllProductsAsyc()
        {
            return Task.Run(() => GetAllProducts());
        }

        public Task<Product> GetProductByIdAsync(int productId)
        {
            return Task.Run(() => GetProductById(productId));
        }

        private IEnumerable<Product> GetAllProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    ProductId = 1, Name = "Cellucor C4 Ice Blue Razz 30 serving", Price = 29.99
                },
                new Product
                {
                    ProductId = 2, Name = "Adaptogen Science Tasty Whey Strawberry Creme 2lb", Price = 24.99
                },
                new Product
                {
                    ProductId = 3, Name = "NutraKey Whey Optima Chocolate Lava Cake", Price = 32.99
                },
                new Product
                {
                    ProductId = 4, Name = "BSN SYNTHA-6 – Chocolate Peanut Butter 3lb", Price = 36.49
                },
                new Product
                {
                    ProductId = 5, Name = "CON-CRET Creatine HCL Lemon Lime 1.76oz", Price = 29.99
                }
            };
        }

        private Product GetProductById(int productId)
        {
            var allProducts = this.GetAllProducts();
            return allProducts.FirstOrDefault(p => p.ProductId == productId);
        }
    }
}