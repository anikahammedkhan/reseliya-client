import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className="flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <HelmetProvider>
                <Helmet>
                    <title>Blog</title>
                    <meta name="description" content="Blog" />
                </Helmet>
            </HelmetProvider>
            <div className='text-center my-8'>
                <h2 className="text-5xl font-semibold text-green-600">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 w-3/4 mx-auto">
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">What are the different ways to manage a state in a React application?</summary>
                    <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-lg">
                        There are three ways to manage a state in a React application:
                        <ul className="list-disc list-inside">
                            <li>useState</li>
                            <li>useReducer</li>
                            <li>useContext</li>
                        </ul>
                    </div>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">How does prototypical inheritance work?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-lg">
                        Prototypical inheritance is a way of creating objects in JavaScript. It is a way of creating objects that inherit features from other objects. It is a way of creating objects that inherit features from other objects.
                        <br />
                        In JavaScript, objects are created using functions. The function is called a constructor function. The constructor function is used to create objects. The constructor function is used to create objects.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">What is a unit test? Why should we write unit tests?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-lg">
                        A unit test is a test that tests a single unit of code. A unit of code is a single function, method, or class. A unit of code is a single function, method, or class.
                        <br />
                        Unit tests are important because they help us to find bugs in our code. They help us to find bugs in our code. They help us to find bugs in our code.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 text-xl">React vs. Angular vs. Vue?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 text-lg">
                        React is a JavaScript library for building user interfaces. Angular is a JavaScript framework for building web applications. Vue is a JavaScript framework for building user interfaces.
                        <br />
                        AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.
                        <br />
                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.
                        <br />
                        Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.
                        <br />
                        Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it's simple to use and connect with other libraries or applications. This framework's fast learning angle is almost a trademark. It's a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
                        <br />
                        Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalist's modern style.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Blog;