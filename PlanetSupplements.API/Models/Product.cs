using System.Collections.Generic;

namespace PlanetSupplements.API.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public IEnumerable<byte[]> Images { get; set; }

        public bool OnSale { get; set; }

        public List<int> Categories { get; set; }
    }
}