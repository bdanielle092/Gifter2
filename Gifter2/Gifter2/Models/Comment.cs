using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter2.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }

        [Required]
        public int postId { get; set; }
        public Post post { get; set; }

        [Required]
        public string Message { get; set; }
    }
}
