using System.Collections.Generic;

namespace GamesGuides.Data
{
    public class HappyPigsSeasonCardData : IData
    {
        public List<HappyPigsSeasonCard> SeasonCards;
        public List<HappyPigsPrices> PigPrices;

        public HappyPigsSeasonCardData()
        {
            SeasonCards = new List<HappyPigsSeasonCard>()
            {
                new HappyPigsSeasonCard { SeasonNum = 1, Duplicate = false, Feed = 8,  Mate = 9,  Buy = 10, Sell = 7, Name = "No Effect" },
                new HappyPigsSeasonCard { SeasonNum = 1, Duplicate = false, Feed = 8,  Mate = 9,  Buy = 10, Sell = 7, Name = "Field Sale", Description = "field price -$3" },
                new HappyPigsSeasonCard { SeasonNum = 1, Duplicate = true,  Feed = 7,  Mate = 8,  Buy = 9,  Sell = 6, Name = "Season of Love", Description = "1 piglet for each mating pair" },
                new HappyPigsSeasonCard { SeasonNum = 1, Duplicate = true,  Feed = 7,  Mate = 9,  Buy = 10, Sell = 6, Name = "Vaccination", Description = "3 vaccines for most small pigs" },
                new HappyPigsSeasonCard { SeasonNum = 2, Duplicate = false, Feed = 9,  Mate = 10, Buy = 7,  Sell = 8, Name = "Family Day", Description = "$25 for all 4 sizes" },
                new HappyPigsSeasonCard { SeasonNum = 2, Duplicate = false, Feed = 9,  Mate = 9,  Buy = 6,  Sell = 7, Name = "Vaccination", Description = "3 vaccines for most small pigs" },
                new HappyPigsSeasonCard { SeasonNum = 2, Duplicate = true,  Feed = 8,  Mate = 9,  Buy = 6,  Sell = 7, Name = "Season of Love", Description = "1 piglet for each mating pair" },
                new HappyPigsSeasonCard { SeasonNum = 2, Duplicate = true,  Feed = 9,  Mate = 9,  Buy = 7,  Sell = 8, Name = "Sanitary Inspection", Description = "pig price +$3" },
                new HappyPigsSeasonCard { SeasonNum = 3, Duplicate = false, Feed = 9,  Mate = 6,  Buy = 7,  Sell = 9, Name = "Sanitary Inspection", Description = "pig price +$3" },
                new HappyPigsSeasonCard { SeasonNum = 3, Duplicate = false, Feed = 9,  Mate = 7,  Buy = 8,  Sell = 9, Name = "Government Aid", Description = "3 supplements for most piglets" },
                new HappyPigsSeasonCard { SeasonNum = 3, Duplicate = true,  Feed = 10, Mate = 7,  Buy = 8,  Sell = 9, Name = "Pig Fair", Description = "$25 for most big pigs" },
                new HappyPigsSeasonCard { SeasonNum = 3, Duplicate = true,  Feed = 9,  Mate = 6,  Buy = 7,  Sell = 8, Name = "Liquidation Sale", Description = "BOGO on items" },
                new HappyPigsSeasonCard { SeasonNum = 4, Duplicate = false, Feed = 6,  Mate = 7,  Buy = 9,  Sell = 10, Name = "Pig Fair", Description = "$25 for most big pigs" },
                new HappyPigsSeasonCard { SeasonNum = 4, Duplicate = false, Feed = 7,  Mate = 8,  Buy = 9,  Sell = 9, Name = "Family Day", Description = "$25 for all 4 sizes" },
                new HappyPigsSeasonCard { SeasonNum = 4, Duplicate = false, Feed = 7,  Mate = 8,  Buy = 9,  Sell = 10, Name = "Vaccination", Description = "3 vaccines for most small pigs" },
                new HappyPigsSeasonCard { SeasonNum = 4, Duplicate = false, Feed = 6,  Mate = 7,  Buy = 9,  Sell = 9, Name = "Ham Festival", Description = "pig prices: 5 / 9 / 14 / 20" },
                new HappyPigsSeasonCard { SeasonNum = 4, Duplicate = true,  Feed = 6,  Mate = 7,  Buy = 8,  Sell = 9, Name = "Bacon Festival", Description = "pig prices: 6 / 10 / 15 / 21" },
            };

            PigPrices = new List<HappyPigsPrices>()
            {
                new HappyPigsPrices { Name = "Piglet", Normal = 3, SanitaryInspection = 6, Ham = 5, Bacon = 6 },
                new HappyPigsPrices { Name = "Small Pig", Normal = 6, SanitaryInspection = 9, Ham = 9, Bacon = 10 },
                new HappyPigsPrices { Name = "Average Pig", Normal = 10, SanitaryInspection = 13, Ham = 14, Bacon = 15 },
                new HappyPigsPrices { Name = "Big Pig", Normal = 15, SanitaryInspection = 18, Ham = 20, Bacon = 21 },
            };
        }
    }

    public class HappyPigsSeasonCard
    {
        public string Name { get; set; }
        public int SeasonNum { get; set; }
        public bool Duplicate { get; set; }
        public int Feed { get; set; }
        public int Mate { get; set; }
        public int Buy { get; set; }
        public int Sell { get; set; }
        public string Description { get; set; }
    }

    public class HappyPigsPrices
    {
        public string Name { get; set; }
        public int Normal { get; set; }
        public int SanitaryInspection { get; set; }
        public int Ham { get; set; }
        public int Bacon { get; set; }
    }
}
