using GamesGuides.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace GamesGuides.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var gameList = new GameList() { List = new List<Game>() };
            gameList.List.Add(new Game() { Title = "7Wonders", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "7WondersDuel", Available = true, Rectangle = false });

            gameList.List.Add(new Game() { Title = "Adrenaline", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "AirlinesEurope", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Alchemists", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "AlienFrontiers", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Antarctica", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Antidote", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Aquatica", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Archipelago", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ArkNova", Available = true, Rectangle = true });
            // Anomia
            // Azul

            gameList.List.Add(new Game() { Title = "BarkAvenue", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "BearRaid", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "BetweenTwoCities", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "BlackOrchestra", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "BloodOfAnEnglishman", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Brass", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "BroomService", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "BunnyBunnyMooseMoose", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "BunnyKingdom", Available = true, Rectangle = false });
            // Bang

            gameList.List.Add(new Game() { Title = "Cacao", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CampaignTrail", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "CaptainSonar", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Carcassonne", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CashNGuns", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "CastlesOfBurgundy", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CastlesOfMadKingLudwig", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Catacombs", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Cave", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "CenturyNewWorld", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CenturyEasternWonders", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CenturySpiceRoad", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "ChampionsOfMidgard", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ChicagoExpress", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Chinatown", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Citadels", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Clank", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ClansOfCaledonia", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Climbers", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "ColtExpress", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Concordia", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "CostaRica", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Cryo", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Cuzco", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Cyclades", Available = true, Rectangle = false });
            // Catan
            // Cheating Moth
            // Codenames
            // Coup

            gameList.List.Add(new Game() { Title = "DeadMansDraw", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DealWithTheDevil", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Dimension", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DinosaurWorld", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Dogs", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Dominion", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DragonsGold", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DuneImperium", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DungeonFighter", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "DungeonPetz", Available = true, Rectangle = false });
            // Diplomacy
            // Dixit
            // Dr Eureka

            gameList.List.Add(new Game() { Title = "Eclipse", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "EldritchHorror", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Elfenland", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Elysium", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "EscapePlan", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "EscapeRollWrite", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Escape", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ExcavationEarth", Available = false, Rectangle = false });
            // Empire Builder
            // Ergo
            // Exploding Kittens

            gameList.List.Add(new Game() { Title = "FireballIsland", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "FiveTribes", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ForScience", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ForbiddenDesert", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ForbiddenIsland", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "FormulaD", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Fort", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Furnace", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "FuryOfDracula", Available = true, Rectangle = false });
            // Favor of the Pharaoh
            // Friday

            gameList.List.Add(new Game() { Title = "GaiaProject", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "GalaxyTrucker", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "GameOfThrones", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "GameOfThronesLCG", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "GhostBlitz", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Gizmos", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "GoNutsForDonuts", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "GoodCopBadCop", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "GreatWesternTrail", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Guardians", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "GuardiansCall", Available = false, Rectangle = false });
            // The Game

            gameList.List.Add(new Game() { Title = "Hanabi", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "HandOfTheKing", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "HappyPigs", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Heat", Available = true, Rectangle = false });
            // Hey Fish
            // Hive

            gameList.List.Add(new Game() { Title = "Icecool", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Imhotep", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ImperialSettlers", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Ishtar", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "IsleOfSkye", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Istanbul", Available = true, Rectangle = true });
            // Inkling

            gameList.List.Add(new Game() { Title = "Jaipur", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Jamaica", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "JollyRoger", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "JuicyFruits", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "JunkArt", Available = true, Rectangle = false });

            gameList.List.Add(new Game() { Title = "K2", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "KanbanEv", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Keyflower", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Keyforge", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "KingOfNewYork", Available = true, Rectangle = false });
            // Kingdomino

            gameList.List.Add(new Game() { Title = "LadiesAndGentlemen", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Lanterns", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LasVegas", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LastWill", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LegendaryEncountersAliens", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "LifeOfTheAmazonia", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Llamaland", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LordsOfVegas", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LordsOfWaterdeep", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "LostCities", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "LostLegacy", Available = true, Rectangle = true });
            // Love Letter

            gameList.List.Add(new Game() { Title = "MaglevMetro", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Magnate", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Maracaibo", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "MarcoPolo", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "MedievalAcademy", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Memoir44", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "MentalBlocks", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Messina1347", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Mexica", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "MissionRedPlanet", Available = true, Rectangle = false });
            // Mind
            // Monikers

            gameList.List.Add(new Game() { Title = "OnMars", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "OneNightUltimateWerewolf", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "OriginsFirstBuilders", Available = false, Rectangle = false });
            
            gameList.List.Add(new Game() { Title = "Pandemic", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "PandemicRapidResponse", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Pipeline", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "PowerGrid", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "ProdigalsClub", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "PuertoRico", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Pulsar2849", Available = true, Rectangle = false });
            // Patchwork
            // Poetry for Neanderthals
            // Popcorn Dice

            gameList.List.Add(new Game() { Title = "QuacksOfQuedlinburg", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Queendomino", Available = true, Rectangle = false });

            gameList.List.Add(new Game() { Title = "RaceForTheGalaxy", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "RajasOfTheGanges", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "RavenousRiver", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ReaversOfMidgard", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ResistanceAvalon", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Rex", Available = false, Rectangle = false });
            // Rhino Hero

            gameList.List.Add(new Game() { Title = "Saboteur", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "SamuraiSpirit", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SanJuan", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Sanctum", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Scoville", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Scream", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "SearchForPlanetX", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Seasons", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SilverAndGold", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "SmallIslands", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SmartPhone", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SnowTails", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SpaceAlert", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SpaceCadets", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SpiritIsland", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "StarFighters", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "StarTrekPinball", Available = true, Rectangle = true });
            gameList.List.Add(new Game() { Title = "StarWarsRebellion", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "StarWarsDeckBuildingGame", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "StarshipCaptains", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SteamPark", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SteamWorks", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "Stockpile", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Suburbia", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SuperCamelot", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SurviveEscapeFromAtlantis", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "SushiGoParty", Available = false, Rectangle = true });
            // Say Anything
            // Skull
            // Splendor
            // Spyfall
            // Star Realms

            gameList.List.Add(new Game() { Title = "Tekhenu", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TerraformingMars", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TerrorInMeepleCity", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Tesseract", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ThroughTheAges", Available = true, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TinyEpicDefenders", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Tiwanaku", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TopGun", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TrekkingTheWorld", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TuringMachine", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "TwoRoomsAndABoom", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Tzolkin", Available = false, Rectangle = false });
            // Telestrations
            // Ticket to Ride
            // Timeline Challenge
            // Trumpet

            gameList.List.Add(new Game() { Title = "UltraTinyEpicGalaxies", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "UnderwaterCities", Available = false, Rectangle = false });

            gameList.List.Add(new Game() { Title = "Viceroy", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "Village", Available = true, Rectangle = false });

            gameList.List.Add(new Game() { Title = "WelcomeToTheDungeon", Available = false, Rectangle = true });
            gameList.List.Add(new Game() { Title = "RussianRoulette", Available = false, Rectangle = false });
            // Wavelength
            // We Didn't Playtest

            gameList.List.Add(new Game() { Title = "Yamatai", Available = false, Rectangle = false });

            gameList.List.Add(new Game() { Title = "Zapotec", Available = false, Rectangle = false });
            gameList.List.Add(new Game() { Title = "ZooTycoon", Available = true, Rectangle = false });

            return View(gameList);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
