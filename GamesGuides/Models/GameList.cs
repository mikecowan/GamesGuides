using System.Collections.Generic;

namespace GamesGuides.Models
{
    public class GameList
    {
        public List<Game> List { get; set; }

    }

    public class Game
    {
        public string Title { get; set; }
        public bool Available { get; set; }
        public bool Rectangle { get; set; }
    }
}
