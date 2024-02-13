using System.Collections.Generic;

namespace GamesGuides.Models
{
    public class RichText
    {
        public Dictionary<string, string> ImageLib { get; set; }
        public string RawHtml { get; set; }

        // denote images in the RawHtml as [imgname]

    }

    public class RichObj
    {
        public string str { get; set; }
        public bool isImg { get; set; }
    }
}
