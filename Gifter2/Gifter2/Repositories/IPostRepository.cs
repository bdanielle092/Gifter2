using Gifter2.Models;
using System;
using System.Collections.Generic;

namespace Gifter2.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetById(int id);
        List<Post> GetByUserProfileId(int id);
        void Add(Post post);
        void Update(Post post);
        void Delete(int id);
        List<Post> Search(string criterion, bool sortDescending);

        List<Post> Hottest(DateTime startDate);
    }
}