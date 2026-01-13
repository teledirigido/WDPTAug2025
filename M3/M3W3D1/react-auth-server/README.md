### API Documentation

We will start our project by first documenting all of the routes and data models for our API. Following best practices we will use _verbs_ to specify the type of operation being done and _nouns_ when naming endpoints.

#### Routes

##### Project routes

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| GET       | `/api/projects`            | (empty)      | Returns all the projects      |
| POST      | `/api/projects`            | JSON         | Adds a new project            |
| GET       | `/api/projects/:projectId` | (empty)      | Returns the specified project |
| PUT       | `/api/projects/:projectId` | JSON         | Edits the specified project   |
| DELETE    | `/api/projects/:projectId` | (empty)      | Deletes the specified project |

##### Task routes

| HTTP verb | URL                  | Request body | Action                     |
| --------- | -------------------- | ------------ | -------------------------- |
| POST      | `/api/tasks`         | JSON         | Adds a new task            |

<hr>

#### Models

##### Project Model

```js
{
  title: String,
  description: String,
  tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
}
```

##### Task Model

```js
{
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' }
}
```
