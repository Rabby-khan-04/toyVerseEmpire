import React from "react";
import { useTitle } from "../../hooks/useTitle";
import "./Blog.css";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="py-16 lg:py-24">
      <div className="container text-white">
        <div className="space-y-8 p-4">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is an
              access token and refresh token? How do they work and where should
              we store them on the client-side
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              <span className="font-semibold text-primary">
                Access tokens :{" "}
              </span>{" "}
              An access token is a secure token used for authentication and
              authorization. It contains user information and permissions,
              allowing access to protected resources in an application.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">
                Refresh Token :{" "}
              </span>{" "}
              Since access tokens aren’t valid for an extended period because of
              security reasons, a refresh token helps re-authenticate a user
              without the need for login credentials.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">-- </span> Access
              tokens authenticate and authorize resource access. They expire
              quickly. Refresh tokens are long-lived and obtain new access
              tokens.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">-- </span> Tokens
              should be securely stored on the client-side. Use HTTP-only
              cookies or secure Web Storage API.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>Compare SQL
              and NoSQL databases
              <span className="font-bold text-primary">!</span>
            </h2>
            <table className="border-collapse blog__table w-full text-xl">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>SQL</th>
                  <th>NOSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definition</td>
                  <td>
                    SQL databases are primarily called RDBMS or Relational
                    Databases
                  </td>
                  <td>
                    NoSQL databases are primarily called as Non-relational or
                    distributed database
                  </td>
                </tr>
                <tr>
                  <td>Query Language</td>
                  <td>Structured query language (SQL)</td>
                  <td>No declarative query language</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>SQL databases are table based databases</td>
                  <td>
                    NoSQL databases can be document based, key-value pairs,
                    graph databases
                  </td>
                </tr>
                <tr>
                  <td>Schema</td>
                  <td>SQL databases have a predefined schema</td>
                  <td>NoSQL databases are horizontally scalable</td>
                </tr>
                <tr>
                  <td>Examples</td>
                  <td>Oracle, Postgres, and MS-SQL.</td>
                  <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is
              express js<span className="font-bold text-primary">?</span> What
              is Nest JS
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              <span className="font-semibold text-primary">Node.js: </span>{" "}
              Node.js is an open source and cross-platform runtime environment
              for executing JavaScript code outside of a browser.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-primary">Express.js: </span>{" "}
              Express is a small framework that sits on top of Node.js’s web
              server functionality to simplify its APIs and add helpful new
              features. It makes it easier to organize your application’s
              functionality with middle ware and routing.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              <span className="font-bold text-primary">Q : </span>What is
              MongoDB aggregate and how does it work
              <span className="font-bold text-primary">?</span>
            </h2>
            <p className="text-xl">
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages.
              The stages make up what is known as a pipeline. The stages in a
              pipeline can filter, sort, group, reshape and modify documents
              that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
