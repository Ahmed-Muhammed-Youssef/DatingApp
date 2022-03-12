﻿using API.DTOs;
using API.Entities;
using API.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void DeleteMessage(Message message, int issuerId);
        Task<Message> GetMessageAsync(int messageId);
        Task<IEnumerable<MessageDTO>> GetAllPagedMessagesDTOForUserAsync(int userId, ReceiveMessagesOptions options);
        Task<IEnumerable<MessageDTO>> GetMessagesDTOThreadAsync(int senderId, int recipientId);
        Task<bool> SaveAsync();
    }
}
