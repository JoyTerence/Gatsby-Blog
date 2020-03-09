---
title: GraphQL
description: Should you switch to graphql?
date: '2020-02-20'
image: ./graphql.png
tags: ['graphql','facebook','query-manipulation language', 'REST']
---

![Graphql vs Rest](./graphqlvsrest.png)

---

Traditionally REST APIs are used for quite some time now to fetch data from a server to a client. Due to its stateless nature and clear advantages over SOAP, it was readily adopted and used by the community. However, as with anything, REST has few flaws. The URL based fetching of resources places an significant burden to remember the multiple endpoints. The other problem is rather a basic one, the `REST fails to provide the client with only the required data`.

GraphQL, a query language was released on 2015 by Facebook, is one of the exciting technologies that heavily utilizes graph based relationships between data and provides a  powerful means of querying and manipulating it.

It should be also noted that GraphQL is _transport-layer agnostic_ and _database agnostic_. This means that it does not care about the network protocol (TCP, Websockets...) nor does it care about the database (MySQL, MongoDB...) used to store and query data. GraphQL is querying language for the APIs and not to be mistaken as query language for databases.

With GraphQL, you model your business domain as a graph.

In the server, this is achieved by defining schemas. Here we define different data and their types and relations.

```graphql
type Character {
  name: String!
}

type Query {
  hero: Character
}
```

The client can then query for this data as follows in a format similar to json,

```graphql
query {
    hero {
        name
    }
}
```

***Note the Object-Oriented relationship between the data***

## Things to consider:

---
![thinking](./thinking.webp)

### Advantages

#### Single Endpoint and tailored data

GraphQL is designed to query via only one endpoint. Using this endpoint, one can query a personalized data. This means that the developer needs to know only the format of data. Unlike REST, where one needs to remember the format of data and parse for relevant fields in the data dump as well as remember the multiple endpoints to recieve these dumps.

#### Peformance and Optimization

GraphQL is generally the least possible request, hence the affects on performance is not intensive if the database fetch and writes are efficiently written. During my discussions with a fellow Avaya employee, I was asked how would a query for particular fields from database (GraphQL) be efficient than the entire dump of data (REST). This again depends on how the resolver functions (functions responsible for fetching the data in GraphQL) are written. With the former there is lesser reads/writes and also lesser bits transferred over the wire. Moreover, REST might lead to situations of heavy network loads. And yes, before you point it out, REST does come with caching. I'll cover it in the disadvantages section.

#### Version Management

With an end point that provides with no means of control over data, any change will be a breaking change, which needs to be tackled by means of versioning.

There are two ways to maintain backward compatibility:

* Create different API versions

* Evolve one API version

In case of GraphQL, it follows the second method and thus new features can be added as new fields without a breaking change. [This is what GraphQL creators had to say about this](https://graphql.org/learn/best-practices/#versioning).

> While there’s nothing that prevents a GraphQL service from being versioned just like any other REST API, GraphQL takes a strong opinion on avoiding versioning by providing the tools for the continuous evolution of a GraphQL schema.

#### Easy to learn

GraphQL is easy to learn and the docs are really helpful. One can also make use of GraphiQL which can be used to test out the apis. [This Interactive GraphQL playground provided by GitHub](https://developer.github.com/v4/explorer/) helped me save time on structuring my queries while developing a react native app.

### Disadvantages

#### Error Management

Checking the response status is enough to get an idea about the type of error, while querying for the data, in case of REST. But in GraphQL every error is sent as a payload with 200 Success. This forces the client to implement the parsing logic.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Parsing error...",
      "locations": [
        {
          "line": 15,
          "column": 16
        }
      ]
    }
  ]
}
```

It is an added overhead to parse this payload to find the exact error message. Moreover, the payload could be different for different errors too.

#### Lack of web-caching

A HTTP level cache reduces the traffic/load to a server. This can be easily acheived using REST API due to it's multiple endpoints (using URL patterns, HTTP methods ...). However with GraphQL, with its single endpoint, it is hard to realize the benefits of the caching. Using third party tools to acheive would be an additional complex layer for what is achieved easily in REST. However, the official docs propose using [Globally Unique IDs](https://graphql.org/learn/caching/#globally-unique-ids) to mitigate these problems, but again this may not be the solution every time.

#### Static schemas

The entire functionality revolves around the schemas. What the client can request and get as response is dictated by the schema definition that's designed and the query the client makes. As of today, there is limited support to modify these schemas at runtime. This could lead to bad practises like relying heavily on resolvers for complex requirements, which means abandoning many of the benefits brought by GraphQL. Such as a generic schema as follows:

```graphql
type Query {
  request(query: String!): Response
}

type Response {
  body: String
}
```

## What should you do?

---
Ironicaly, the conclusion here might sound inconclusive.
![ironic](dont-know.gif)
But truth be told, it entirely depends on your requirements.

GraphQL is the new kid on the block. It brings with it a number of exciting features. But it is important to understand the tradeoffs before making architectural decisions of migration. I would recommend staying with REST when there are fewer entities and lesser need for establishing complex relationships between the data. GraphQL shines when there is a need to establish such relationships on data across various domains such as payments, users, activities, orders, history etc.

I recommend going through the [official documentation](https://graphql.org/learn/) provided by Facebook and various sources to get additional insights while making a decision to stay on REST or to migrate to GraphQL.
