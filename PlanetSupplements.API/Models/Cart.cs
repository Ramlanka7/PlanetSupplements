namespace PlanetSupplements.API.Models
{
    public class Cart
    {
        public int ProductId { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public byte[] Image { get; set; }

        public int Quantity { get; set; }

        public double TotalPrice { get; set; }
    }
}