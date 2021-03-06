﻿using Microsoft.AspNetCore.Mvc;
using Gifter2.Data;
using Gifter2.Repositories;
using Gifter2.Models;
using System;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
        }
        [HttpPost]
        public IActionResult Add(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult update(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("search")]
        public IActionResult Search(string q, bool sortDesc)
        {
            if (q == null)
            {
                return Ok(_postRepository.GetAll());
            }
            else {
                return Ok(_postRepository.Search(q, sortDesc));
            }
        }

        //hottest is the end point and since is the query sting para.
        [HttpGet("hottest")]
        public IActionResult Hottest(DateTime since)
        {
            return Ok(_postRepository.Hottest(since));
        }
    }
}
