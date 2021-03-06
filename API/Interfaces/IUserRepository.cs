using API.DTOs;
using API.Entities;
using API.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        public Task<Photo> AddPhotoAsync(Photo photo);
        public Task<char> GetUserInterest(int userId);
        public void Update(AppUser appUser);
        public void UpdatePhoto(Photo photo);
        public Task<PagedList<UserDTO>> GetUsersDTOAsync(string username, UserParams userParams, List<int> ForbiddenIds);
        public Task<AppUser> GetUserByIdAsync(int id);
        public Task<UserDTO> GetUserDTOByIdAsync(int id);
        public Task<UserDTO> GetUserDTOByUsernameAsync(string username);
        public Task<AppUser> GetUserByUsernameAsync(string username);
        public Task<UserDTO> GetUserDTOByEmailAsync(string email);
        public void DeleteUser(AppUser user);
        public Task<bool> UserExistsAsync(int id);
        public Task<IEnumerable<PhotoDTO>> GetUserPhotoDTOsAsync(int id);
        public Task<IEnumerable<Photo>> GetUserPhotoAsync(int id);
        public Task<AppUser> GetUserByEmailAsync(string email);
        public void DeletePhoto(Photo photo);
        public Task<Photo> GetProfilePhotoAsync(int userId);
    }
}
