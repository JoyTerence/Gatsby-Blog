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

It should be also noted that GraphQL is _transport-layer agnostic_ and _database agnostic_. This means that it does not care about the network protocol(TCP, Websockets...) nor does it care about the database(MySQL, MongoDB...) used to store and query data. GraphQL is querying language for the APIs and not to be mistaken as query language for databases.

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
***Note: the Object-Oriented relationship between the data queried***

**<h2>Things to consider:</h2>**

---

**_<h2>Advantages</h2>_**

**Single Endpoint and tailored data**

GraphQL is designed to work through only one endpoint. Using this endpoint, one can query a personalized data. This means that the developer now needs to know the format of data only. Unlike, REST where one needs to remember the format of data and parse for relevant fields in the data dump as well as remember the multiple endpoints to recieve these dumps.

**Peformance and Optimization**

GraphQL is generally the least possible request, hence the affects on performance is not intensive if the database fetch and writes are efficiently written. During my discussions with a fellow Avaya employee, I was asked how would a query for particular fields from database(GraphQL) be efficient than the entire dump of data(REST). This again depends on how the resolver functions(functions responsible for fetching the data in GraphQL) are written. With the former there is lesser reads/writes and also lesser bits transferred over the wire. REST might lead to situations of heavy network loads. And yes, before you point it out, REST does come with caching. I'll cover it in the disadvantages section.
