using GamesGuides.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GamesGuides.Controllers
{
    public class GamesController : Controller
    {
        private List<string> nums = new List<string>()
        {
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        };

        private List<string> specialDataGames = new List<string>()
        {
            "ChampionsOfMidgardDestinyCards",
            "ChampionsOfMidgardRuneCards",
            "ChampionsOfMidgardJourneyCards",
            "HappyPigsTables",
            "PowerGridPlants"
        };

        public IActionResult Index(string gamename)
        {
            var firstChar = gamename.Substring(0, 1);
            if (nums.Contains(firstChar))
                firstChar = "7";

            var data = new Data.Data();
            
            if (specialDataGames.Contains(gamename))
            {
                var modeltest = data.GetItem(gamename);

                return View($"{firstChar}/{gamename}", modeltest);
            }
            //else if (gamename == "PowerGridPlants")
            //{
            //    var model = new PowerGridPlantsData();
            //    return View($"{firstChar}/{gamename}", model);
            //}
            //else if (gamename == "ChampionsOfMidgardRuneCards")
            //{
            //    var model = new ChampionsOfMidgardRunesData();
            //    return View($"{firstChar}/{gamename}", model);
            //}
            //else if (gamename == "HappyPigsTables")
            //{
            //    var model = new HappyPigsSeasonCardData();
            //    return View($"{firstChar}/{gamename}", model);
            //}

            //return View($"", data);

            return View($"{firstChar}/{gamename}");
            //return View(gamename);
        }
    }
}
