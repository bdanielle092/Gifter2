using Gifter2.Models;
using System.Collections.Generic;

namespace Gifter2.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Add(UserProfile userProfile);
        void Update(UserProfile userProfile);
        public void Delete(int id);
    }
}