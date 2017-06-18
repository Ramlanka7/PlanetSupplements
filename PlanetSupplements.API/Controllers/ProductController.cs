using PlanetSupplements.API.Models;
using PlanetSupplements.API.Services.Implementation;
using PlanetSupplements.API.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace PlanetSupplements.API.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IProductService productService;

        public ProductController()
        {
            //todo: Have to inject in constructor(Unity or Ninject)
            this.productService = new ProductService();
        }

        public async Task<IEnumerable<Product>> GetProductsByCategory(int categoryId)
        {
            return await this.productService.GetProductsByCategoryIdAsync(categoryId);
        }

        public async Task<Product> GetProductById(int productId)
        {
            return await this.productService.GetProductByIdAsync(productId);
        }
    }
}