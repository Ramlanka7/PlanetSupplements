using PlanetSupplements.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PlanetSupplements.API.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsyc();

        Task<Product> GetProductByIdAsync(int productId);

        Task<IEnumerable<Product>> GetProductsByCategoryIdAsync(int categoryId);
    }
}