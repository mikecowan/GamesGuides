using System.Collections.Generic;

namespace GamesGuides.Data
{
    public class ChampionsOfMidgardJourneyData : IData
    {
        public List<ChampionsOfMidgardJourneyCard> Land;
        public List<ChampionsOfMidgardJourneyCard> Sea;

        public ChampionsOfMidgardJourneyData()
        {
            Land = new List<ChampionsOfMidgardJourneyCard>()
            {
                new ChampionsOfMidgardJourneyCard { Name = "All Quiet", Quantity = 10, Description = "" },
                new ChampionsOfMidgardJourneyCard { Name = "Avalanche", Quantity = 2, Description = "Lose 1 [ChampionsOfMidgard/warrior.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Bandits", Quantity = 2, Description = "Fight for [ChampionsOfMidgard/glory.png][ChampionsOfMidgard/glory.png][ChampionsOfMidgard/glory.png] or pay [ChampionsOfMidgard/gold.png][ChampionsOfMidgard/gold.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Blizzard", Quantity = 2, Description = "Pay [ChampionsOfMidgard/gold.png] per [ChampionsOfMidgard/warrior.png], or lose them" },
                new ChampionsOfMidgardJourneyCard { Name = "Blocked Path", Quantity = 2, Description = "Pay [ChampionsOfMidgard/gold.png][ChampionsOfMidgard/gold.png] or quit" },
                new ChampionsOfMidgardJourneyCard { Name = "Lone Warrior", Quantity = 2, Description = "Pay [ChampionsOfMidgard/gold.png] to gain a [ChampionsOfMidgard/warrior.png] (optional)" },
                new ChampionsOfMidgardJourneyCard { Name = "Lost", Quantity = 2, Description = "Pay [ChampionsOfMidgard/gold.png] or lose [ChampionsOfMidgard/warrior.png][ChampionsOfMidgard/warrior.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Mercenaries", Quantity = 2, Description = "Pay [ChampionsOfMidgard/gold.png] for [ChampionsOfMidgard/warrior.png] (may repeat up to twice)" },
                new ChampionsOfMidgardJourneyCard { Name = "Thief", Quantity = 2, Description = "Lose [ChampionsOfMidgard/gold.png] if able" }
            };

            Sea = new List<ChampionsOfMidgardJourneyCard>()
            {
                new ChampionsOfMidgardJourneyCard { Name = "All Quiet", Quantity = 8, Description = "" },
                new ChampionsOfMidgardJourneyCard { Name = "Kraken", Quantity = 2, Description = "Fight for [ChampionsOfMidgard/glory.png][ChampionsOfMidgard/glory.png][ChampionsOfMidgard/glory.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Lost", Quantity = 2, Description = "Lose 2<span class='cross'></span> ([ChampionsOfMidgard/food.png] / [ChampionsOfMidgard/warrior.png])" },
                new ChampionsOfMidgardJourneyCard { Name = "No Wind", Quantity = 2, Description = "Lose [ChampionsOfMidgard/food.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Odin's Trial", Quantity = 2, Description = "Lose 2<span class='cross'></span> ([ChampionsOfMidgard/food.png] / [ChampionsOfMidgard/warrior.png]); gain [ChampionsOfMidgard/horn.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Shipwreck", Quantity = 2, Description = "Gain [ChampionsOfMidgard/gold.png][ChampionsOfMidgard/gold.png]" },
                new ChampionsOfMidgardJourneyCard { Name = "Storm", Quantity = 2, Description = "Lose  ([ChampionsOfMidgard/food.png] / [ChampionsOfMidgard/warrior.png])" },
                new ChampionsOfMidgardJourneyCard { Name = "Whirlpool", Quantity = 2, Description = "Lose [ChampionsOfMidgard/warrior.png]" }
            };
        }
    }

    public class ChampionsOfMidgardJourneyCard
    {
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }
}
