const express = require('express');

const Posts = require('../data/db.js');

const router = express.Router();

// POSTS

router.post('/', (req, res) => {
    Posts.insert(req.body)
    .then(post => {
        res.status(201).json(post)
    })
    .catch(err => {
        res.status(500).json({
            message: err,
        });
    });

})

router.post('/:id/comments', (req, res) => {
    Posts.insertComment(req.body)
    .then(comment => {
        res.status(201).json(comment);
    })
    .catch(err => {
        res.status(500).json({
            message: err,
        })
    })
})


//GET

router.get("/", (req, res) => {
    Posts.find(req.query)
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: err });
      });
  });

  
  
  
  router.get("/:id", (req, res) => {
    Posts.findById(req.params.id)
      .then(post => {
       res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).json({ message: err });
      });
  });
  
  router.get("/:id/comments", (req, res) => {
    Posts.findPostComments(req.params.id)
          .then(post => {
            res.status(200).json(post);
          })
          .catch(err => {
            res.status(500).json({ message: err });
          });
      
});

 // DELETE

    router.delete("/:id", (req,res) => {
        Posts.remove(req.params.id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
    });

    
    // PUT
    
    router.put("/:id", (req, res) => {
        Posts.update(req.params.id, req.body)
          .then(post => {
            res.status(201).json(post);
          })
          .catch(err => {
            res.status(500).json({ message: err });
          });
      });



module.exports = router;