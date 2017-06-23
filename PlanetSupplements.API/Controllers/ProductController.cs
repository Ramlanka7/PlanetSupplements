using System;
using PlanetSupplements.API.Models;
using PlanetSupplements.API.Services.Implementation;
using PlanetSupplements.API.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PlanetSupplements.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        private readonly IProductService productService;

        public ProductController()
        {
            //todo: Have to inject in constructor(Unity or Ninject)
            this.productService = new ProductService();
        }

        [HttpGet, Route("api/Product/GetProductsByCategory/{categoryId}")]
        public async Task<IEnumerable<Product>> GetProductsByCategory(int categoryId)
        {
            return await this.productService.GetProductsByCategoryIdAsync(categoryId);
        }

        [HttpGet, Route("api/Product/GetProductsByIds")]
        public async Task<CartViewModel> GetProductsByIds([FromUri] int[] productIds)
        {
            var cart = new CartViewModel
            {
                Cart = new List<Cart>()
            };

            if (productIds == null) return cart;

            var groupProducts = productIds.GroupBy(id => id);

            var singleProductIds = groupProducts.Select(s => s.Key).ToList();

            var products = await this.productService.GetProductsByIdsAsync(singleProductIds);

            foreach (var product in products)
            {
                var quantity = groupProducts.FirstOrDefault(a => a.Key == product.ProductId).Count();

                var item = new Cart
                {
                    ProductId = product.ProductId,
                    Name = product.Name,
                    Price = product.Price,
                    Image = null,
                    Quantity = quantity,
                    TotalPrice = Math.Round(product.Price * quantity, 2)
                };

                cart.Cart.Add(item);
            }

            cart.Items = productIds.Length;
            cart.Tax = 0.00;
            cart.SubTotal = Math.Round(cart.Cart.Sum(p => p.TotalPrice), 2);
            cart.Total = Math.Round(cart.SubTotal + cart.Tax,2);

            return cart;
        }

        public async Task<Product> GetProductById(int productId)
        {
            return await this.productService.GetProductByIdAsync(productId);
        }
    }
}