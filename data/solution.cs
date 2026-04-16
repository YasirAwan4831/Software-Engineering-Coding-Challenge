using System;
using System.Net.Http;
using System.Threading.Tasks;

class Solution
{
    public static void Main(string[] args)
    {
        string category = Console.ReadLine();
        int minPrice = int.Parse(Console.ReadLine());
        int maxPrice = int.Parse(Console.ReadLine());

        int result = getProductsInRange(category, minPrice, maxPrice);
        Console.WriteLine(result);
    }

    public static int getProductsInRange(string category, int minPrice, int maxPrice)
    {
        int total = 0;
        int page = 1;

        using (HttpClient client = new HttpClient())
        {
            while (true)
            {
                string url = $"https://jsonmock.hackerrank.com/api/inventory?category={category}&page={page}";
                string response = client.GetStringAsync(url).Result;

                // total_pages 
                int totalPages = ExtractValue(response, "\"total_pages\":");

                // prices 
                int index = 0;
                while ((index = response.IndexOf("\"price\":", index)) != -1)
                {
                    index += 8;
                    int end = response.IndexOf(",", index);
                    int price = int.Parse(response.Substring(index, end - index));

                    if (price >= minPrice && price <= maxPrice)
                        total++;

                    index = end;
                }

                if (page >= totalPages)
                    break;

                page++;
            }
        }

        return total;
    }

    // helper function JSON  value  
    static int ExtractValue(string json, string key)
    {
        int start = json.IndexOf(key) + key.Length;
        int end = json.IndexOf(",", start);
        return int.Parse(json.Substring(start, end - start));
    }
}