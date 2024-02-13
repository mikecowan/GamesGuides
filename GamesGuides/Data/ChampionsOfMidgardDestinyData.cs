using System.Collections.Generic;

namespace GamesGuides.Data
{
    public class ChampionsOfMidgardDestinyData : IData
    {
        public List<ChampionsOfMidgardDestinyCard> Colors;
        public List<ChampionsOfMidgardDestinyCard> Resources;
        public List<ChampionsOfMidgardDestinyCard> EnemyTypes;
        public List<ChampionsOfMidgardDestinyCard> Souls;

        public ChampionsOfMidgardDestinyData()
        {
            Colors = new List<ChampionsOfMidgardDestinyCard>()
            {
                new ChampionsOfMidgardDestinyCard() { Name = "Crusher of Ice", PointsA = 6, PointsB = 3, Description = "Most blue cards" },
                new ChampionsOfMidgardDestinyCard() { Name = "Earth Smasher", PointsA = 6, PointsB = 3, Description = "Most yellow cards" },
                new ChampionsOfMidgardDestinyCard() { Name = "Master of Flames", PointsA = 6, PointsB = 3, Description = "Most red cards" },
            };

            Resources = new List<ChampionsOfMidgardDestinyCard>()
            {
                new ChampionsOfMidgardDestinyCard() { Name = "Craftsman", PointsA = 5, PointsB = 2, Description = "Most [ChampionsOfMidgard/wood.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Despised", PointsA = 4, PointsB = 2, Description = "Most [ChampionsOfMidgard/blame.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Leader of Armies", PointsA = 7, PointsB = 3, Description = "Most [ChampionsOfMidgard/warrior.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Odin's Favored", PointsA = 4, PointsB = 2, Description = "Most [ChampionsOfMidgard/horn.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Prepared", PointsA = 5, PointsB = 2, Description = "Most [ChampionsOfMidgard/food.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Prosperous", PointsA = 5, PointsB = 2, Description = "Most [ChampionsOfMidgard/gold.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Runemaster", PointsA = 4, PointsB = 2, Description = "Most [ChampionsOfMidgard/rune.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Valkyries' Favored", PointsA = 6, PointsB = 3, Description = "Most [ChampionsOfMidgard/blessing.png]" },
            };

            EnemyTypes = new List<ChampionsOfMidgardDestinyCard>()
            {
                new ChampionsOfMidgardDestinyCard() { Name = "Liberator", PointsA = 6, PointsB = 3, Description = "Most Bergrisar" },
                new ChampionsOfMidgardDestinyCard() { Name = "Monster Hunter", PointsA = 4, PointsB = 2, Description = "Most Monsters" },
                new ChampionsOfMidgardDestinyCard() { Name = "Slayer of the Undead", PointsA = 7, PointsB = 3, Description = "Most Draugr" },
                new ChampionsOfMidgardDestinyCard() { Name = "Troll Slayer", PointsA = 6, PointsB = 3, Description = "Most Trolls" },
            };

            Souls = new List<ChampionsOfMidgardDestinyCard>()
            {
                new ChampionsOfMidgardDestinyCard() { Name = "Odin's Blacksmith", PointsA = 5, PointsB = 2, Description = "Most [ChampionsOfMidgard/axesoul.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Odin's Fletcher", PointsA = 5, PointsB = 3, Description = "Most [ChampionsOfMidgard/archersoul.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Odin's Hafter", PointsA = 4, PointsB = 2, Description = "Most [ChampionsOfMidgard/pikesoul.png]" },
                new ChampionsOfMidgardDestinyCard() { Name = "Odin's Swordsmith", PointsA = 4, PointsB = 2, Description = "Most [ChampionsOfMidgard/swordsoul.png]" },
            };

        }
    }

    public class ChampionsOfMidgardDestinyCard
    {
        public string Name { get; set; }
        public int PointsA { get; set; }
        public int PointsB { get; set; }
        public string Description { get; set; }
    }

}
