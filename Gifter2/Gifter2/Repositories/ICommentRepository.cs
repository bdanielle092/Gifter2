using Gifter2.Models;
using System.Collections.Generic;

namespace Gifter2.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetAll();
        Comment GetById(int id);
        List<Comment> GetByPostId(int id);
        void Add(Comment comment);
        void Update(Comment comment);
        void Delete(int id);
    }
}