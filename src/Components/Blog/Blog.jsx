

const Blog = () => {
    return (
        <div className="p-12">
            
            <h1><span className="text-2xl">Num1 Answer:</span> Refresh tokens ensure a more seamless authentication experience by allowing a user to obtain new access tokens without having to re-authenticate. This is done by using a long-lived refresh token to obtain new access tokens, even after the original access token has expired. <br />
            Typically, when a user logs in, the server generates a pair of tokens, an access token and a refresh token. The access token has a short lifetime and is used to authenticate the user and grant them access to protected resources. The refresh token has a longer lifetime and is used to obtain new access tokens after the original access token has expired.</h1> <br />
            <h1> <span className="text-2xl">Num2 Answer:</span> SQL (Structured Query Language) databases are based on the relational model and use tables to store structured data. They provide a predefined schema and enforce data integrity through constraints. SQL databases use the SQL language to query and manipulate <br />
            NoSQL (Not Only SQL) databases are non-relational databases that provide a flexible schema and store data in various formats like key-value pairs, documents, columnar, or graph-based models. They offer horizontal scalability, high availability, and can handle large amounts of unstructured or semi-structured data. NoSQL databases use different query languages specific to their data model.</h1>  <br /><br />
            <h1> <span className="text-2xl">Num3 Answer:</span> Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware, and other common web development tasks. <br />

            NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. It combines the best features of Express.js and other frameworks and introduces a modular architecture inspired by Angular. NestJS provides a powerful dependency injection system, supports TypeScript, and offers built-in support for handling HTT</h1> <br /> <br />

            <h1> <span className="text-2xl">Num4 Answer:</span> MongoDB's aggregation framework is a powerful tool for performing advanced data analysis operations on MongoDB collections. It allows you to process and transform data using a pipeline of stages, including filtering, sorting, grouping, projecting, joining, and aggregating operations. The aggregation pipeline consists of multiple stages that are applied sequentially to the input documents, allowing you to perform complex data manipulations and generate aggregated results. It provides powerful operators and functions for data transformation, grouping, and aggregation, making it suitable for various data analysis scenarios.</h1>
        </div>
    );
};

export default Blog;
