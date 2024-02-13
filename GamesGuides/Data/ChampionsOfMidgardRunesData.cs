using System.Collections.Generic;

namespace GamesGuides.Data
{
    public class ChampionsOfMidgardRunesData : IData
    {
        public List<ChampionsOfMidgardRuneCard> RuneCards;

        public ChampionsOfMidgardRunesData()
        {
            RuneCards = new List<ChampionsOfMidgardRuneCard>()
            {
                new ChampionsOfMidgardRuneCard { Name = "Awareness", Points = 3, Description = "peek at top 3 journey cards, return in any order" },
                new ChampionsOfMidgardRuneCard { Name = "Friendship", Points = 2, Description = "you + another discard 1 [ChampionsOfMidgard/blame.png]" },
                new ChampionsOfMidgardRuneCard { Name = "Gifts", Points = 2, Description = "gain 4<span class='cross'></span> [ChampionsOfMidgard/anyresource.png]" },
                new ChampionsOfMidgardRuneCard { Name = "Glory", Points = 1, Description = "50% more [ChampionsOfMidgard/glory.png] for 1 enemy" },
                new ChampionsOfMidgardRuneCard { Name = "Healing", Points = 2, Description = "Negate losses in 1 round" },
                new ChampionsOfMidgardRuneCard { Name = "The Hunt", Points = 3, Description = "1 [ChampionsOfMidgard/glory.png] for each hit" },
                new ChampionsOfMidgardRuneCard { Name = "Journey", Points = 2, Description = "Discard journey card, reveal the next" },
                new ChampionsOfMidgardRuneCard { Name = "Knowledge", Points = 3, Description = "View all facedown journeys" },
                new ChampionsOfMidgardRuneCard { Name = "Leadership", Points = 2, Description = "Activate <b>all</b> leader abilities on a [ChampionsOfMidgard/helmet.png] roll" },
                new ChampionsOfMidgardRuneCard { Name = "Patience", Points = 2, Description = "Clone the effect of ANY faceup rune card" },
                new ChampionsOfMidgardRuneCard { Name = "Potential", Points = 3, Description = "Reroll any blank [ChampionsOfMidgard/warrior.png]" },
                new ChampionsOfMidgardRuneCard { Name = "Reaction", Points = 3, Description = "[ChampionsOfMidgard/shield.png] results also deal 1 damage" },
                new ChampionsOfMidgardRuneCard { Name = "Resurrection", Points = 1, Description = "Discard 2 [ChampionsOfMidgard/soul.png] for 2 matching [ChampionsOfMidgard/warrior.png]" },
                new ChampionsOfMidgardRuneCard { Name = "Success", Points = 1, Description = "Reveal & score a destiny card" },
                new ChampionsOfMidgardRuneCard { Name = "Training", Points = 1, Description = "Exchange any 2 [ChampionsOfMidgard/warrior.png] with any 2 from supply" },
                new ChampionsOfMidgardRuneCard { Name = "True Vision", Points = 2, Description = "Draw +2 destiny cards, only keep 1" },
                new ChampionsOfMidgardRuneCard { Name = "Virtue", Points = 3, Description = "Discard a [ChampionsOfMidgard/blame.png] or another player takes a [ChampionsOfMidgard/blame.png]" },
                new ChampionsOfMidgardRuneCard { Name = "Wealth", Points = 3, Description = "Double [ChampionsOfMidgard/gold.png] (max 5)" },
            };

        }
    }

    public class ChampionsOfMidgardRuneCard
    {
        public string Name { get; set; }
        public int Points { get; set; }
        public string Description { get; set; }
    }
}
