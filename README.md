### Wikal

A local wiki

## info

# tech: indexdb, backbone.js

# structure: collection Articles, view Articles (nav), model Article, view Article

# routes:
local/ 				get  : list all articles
local/name			get  : view article
local/edit/name 	get  : edit article
local/edit/name 	post : save article
local/delete/name 	post : delete article

# future improvements: sync via node.js / leveldb