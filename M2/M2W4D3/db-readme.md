

1-to-Many
One Project has Many Tasks
One Task belongs to one project

Project (id: 1) 
  -> Task (id: 1, projectId: 1)
  -> Task (id: 2, projectId: 1)

Project (id: 2)
  -> Task (id: 3, projectId: 2)

Project (id: 3)
  -> Task (id:4, projectId: 3)

ENDPOINT - ALL PROJECTS 

/projects -> return only projects
/projects?_emdeb=tasks -> returns projects with tasks embeded
_embed = tasks

ENDPOINT - SINGLE PROJECTS

/projects/:id/?_embed=tasks



---

instagram.com/217398781293/?fbid=1290381902

hostname: duckduck.com

https://duckduckgo.com/?q=v-for+index&t=newext&atb=v378-1
q = v-for+index
t = newext
atb = v378-1