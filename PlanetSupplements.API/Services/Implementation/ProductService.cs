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
            return Task.Run(() => this.GetAllProducts());
        }

        public Task<Product> GetProductByIdAsync(int productId)
        {
            return Task.Run(() => this.GetProductById(productId));
        }

        public Task<IEnumerable<Product>> GetProductsByCategoryIdAsync(int categoryId)
        {
            return Task.Run(() => this.GetProductsByCategoryId(categoryId));
        }

        public Task<IEnumerable<Product>> GetProductsByIdsAsync(int[] productIds)
        {
            return Task.Run(() => this.GetProductsByCategoryIds(productIds));
        }

        private IEnumerable<Product> GetAllProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    ProductId = 1, Name = "Cellucor C4 Ice Blue Razz 30 serving", Price = 29.99, Categories = new List<int>{1,2}
                },
                new Product
                {
                    ProductId = 2, Name = "Adaptogen Science Tasty Whey Strawberry Creme 2lb", Price = 24.99, Categories = new List<int>{3,4}
                },
                new Product
                {
                    ProductId = 3, Name = "NutraKey Whey Optima Chocolate Lava Cake", Price = 32.99, Categories = new List<int>{2,3}
                },
                new Product
                {
                    ProductId = 4, Name = "BSN SYNTHA-6 – Chocolate Peanut Butter 3lb", Price = 36.49, Categories = new List<int>{1,4}
                },
                new Product
                {
                    ProductId = 5, Name = "Animal Flex 44 packs", Price = 34.99, Categories = new List<int>{5,6}
                },
                new Product
                {
                    ProductId = 6, Name = "CON-CRET Creatine HCL Lemon Lime 1.76oz", Price = 29.99, Categories = new List<int>{1,6}
                },
                new Product
                {
                    ProductId = 7, Name = "Now Foods – Vitamin E Cream 28,000 IU 4 oz", Price = 8.99, Categories = new List<int>{7}
                }
            };
        }

        private Product GetProductById(int productId)
        {
            return this.GetAllProducts().FirstOrDefault(p => p.ProductId == productId);
        }

        private IEnumerable<Product> GetProductsByCategoryId(int categoryId)
        {
            return this.GetAllProducts().Where(p => p.Categories.Contains(categoryId));
        }

        private IEnumerable<Product> GetProductsByCategoryIds(int[] productIds)
        {
            return this.GetAllProducts().Where(s => productIds.Contains(s.ProductId));
        }
    }
}