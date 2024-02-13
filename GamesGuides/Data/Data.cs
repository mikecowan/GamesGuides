namespace GamesGuides.Data
{
    public class Data
    {
        public IData GetItem(string name)
        {
            switch (name)
            {
                case "ChampionsOfMidgardDestinyCards":
                    return new ChampionsOfMidgardDestinyData();
                case "ChampionsOfMidgardJourneyCards":
                    return new ChampionsOfMidgardJourneyData();
                case "ChampionsOfMidgardRuneCards":
                    return new ChampionsOfMidgardRunesData();
                case "HappyPigsTables":
                    return new HappyPigsSeasonCardData();
                case "PowerGridPlants":
                    return new PowerGridPlantsData();
                
                default:
                    return null;
            }
        }
    }
}
