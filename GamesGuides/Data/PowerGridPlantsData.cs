using System.Collections.Generic;

namespace GamesGuides.Data
{
    public class PowerGridPlantsData : IData
    {
        public List<PowerGridPlant> Plants;

        public PowerGridPlantsData()
        {
            Plants = new List<PowerGridPlant>() {
                new PowerGridPlant { num = 3,  amt = 2, power = 1, efficiency = 2, type = "oil" },
                new PowerGridPlant { num = 4,  amt = 2, power = 1, efficiency = 2, type = "coal" },
                new PowerGridPlant { num = 5,  amt = 2, power = 1, efficiency = 2, type = "mix" },
                new PowerGridPlant { num = 6,  amt = 1, power = 1, efficiency = 1, type = "garbage" },
                new PowerGridPlant { num = 7,  amt = 3, power = 2, efficiency = 1.5, type = "oil" },
                new PowerGridPlant { num = 8,  amt = 3, power = 2, efficiency = 1.5, type = "coal" },
                new PowerGridPlant { num = 9,  amt = 1, power = 1, efficiency = 1, type = "oil" },
                new PowerGridPlant { num = 10, amt = 2, power = 2, efficiency = 1, type = "coal" },
                new PowerGridPlant { num = 11, amt = 1, power = 2, efficiency = 0.5, type = "nuclear" },
                new PowerGridPlant { num = 12, amt = 2, power = 2, efficiency = 1, type = "mix" },
                new PowerGridPlant { num = 13, amt = 0, power = 1, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 14, amt = 2, power = 2, efficiency = 1, type = "garbage" },
                new PowerGridPlant { num = 15, amt = 2, power = 3, efficiency = 0.67, type = "coal" },
                new PowerGridPlant { num = 16, amt = 2, power = 3, efficiency = 0.67, type = "oil" },
                new PowerGridPlant { num = 17, amt = 1, power = 2, efficiency = 0.5, type = "nuclear" },
                new PowerGridPlant { num = 18, amt = 0, power = 2, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 19, amt = 2, power = 3, efficiency = 0.67, type = "garbage" },
                new PowerGridPlant { num = 20, amt = 3, power = 5, efficiency = 0.6, type = "coal" },
                new PowerGridPlant { num = 21, amt = 2, power = 4, efficiency = 0.5, type = "mix" },
                new PowerGridPlant { num = 22, amt = 0, power = 2, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 23, amt = 1, power = 3, efficiency = 0.33, type = "nuclear" },
                new PowerGridPlant { num = 24, amt = 2, power = 4, efficiency = 0.5, type = "garbage" },
                new PowerGridPlant { num = 25, amt = 2, power = 5, efficiency = 0.4, type = "coal" },
                new PowerGridPlant { num = 26, amt = 2, power = 5, efficiency = 0.4, type = "oil" },
                new PowerGridPlant { num = 27, amt = 0, power = 3, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 28, amt = 1, power = 4, efficiency = 0.25, type = "nuclear" },
                new PowerGridPlant { num = 29, amt = 1, power = 4, efficiency = 0.25, type = "mix" },
                new PowerGridPlant { num = 30, amt = 3, power = 6, efficiency = 0.5, type = "garbage" },
                new PowerGridPlant { num = 31, amt = 3, power = 6, efficiency = 0.5, type = "coal" },
                new PowerGridPlant { num = 32, amt = 3, power = 6, efficiency = 0.5, type = "oil" },
                new PowerGridPlant { num = 33, amt = 0, power = 4, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 34, amt = 1, power = 5, efficiency = 0.2, type = "nuclear" },
                new PowerGridPlant { num = 35, amt = 1, power = 5, efficiency = 0.2, type = "oil" },
                new PowerGridPlant { num = 36, amt = 3, power = 7, efficiency = 0.43, type = "coal" },
                new PowerGridPlant { num = 37, amt = 0, power = 4, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 38, amt = 3, power = 7, efficiency = 0.43, type = "garbage" },
                new PowerGridPlant { num = 39, amt = 1, power = 6, efficiency = 0.17, type = "nuclear" },
                new PowerGridPlant { num = 40, amt = 2, power = 6, efficiency = 0.33, type = "oil" },
                new PowerGridPlant { num = 42, amt = 2, power = 6, efficiency = 0.33, type = "coal" },
                new PowerGridPlant { num = 44, amt = 0, power = 5, efficiency = 0, type = "renew" },
                new PowerGridPlant { num = 46, amt = 3, power = 7, efficiency = 0.43, type = "mix" },
                new PowerGridPlant { num = 50, amt = 0, power = 6, efficiency = 0, type = "renew" }
            };
        }
    }

    public class PowerGridPlant
    {
        public int num { get; set; }
        public string type { get; set; }
        public int amt { get; set; }
        public int power { get; set; }
        public double efficiency { get; set; }
    }

}
