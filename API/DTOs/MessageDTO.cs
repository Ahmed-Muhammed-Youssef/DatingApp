﻿using API.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class MessageDTO
    {
        public int Id { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime? ReadDate { get; set; }
        [Required]
        public DateTime SentDate { get; set; }

        [Required]
        public string SenderPhotoUrl { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int RecipientId { get; set; }
    }
}
