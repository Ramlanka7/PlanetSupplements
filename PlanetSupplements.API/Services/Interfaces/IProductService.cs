using System.Collections.Generic;
using System.Threading.Tasks;
using PlanetSupplements.API.Models;

namespace PlanetSupplements.API.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsyc();

        Task<Product> GetProductByIdAsync(int productId);
    }
}