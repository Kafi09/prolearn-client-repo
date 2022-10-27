import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="px-5 pt-5">
                <h1 class="fs-4">Q1:What is CORS?</h1>
                <p class="fs-5">Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>

                <h1 class="fs-4">Q2:Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p class="fs-5">Ans: The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    
                    other alternate options for authentication:
                    - Auth0
                    - Okta
                    - Keycloak etc.
                </p>

                <h1 class="fs-4">Q3:</h1>
                <p class="fs-5">Ans:</p>

                <h1 class="fs-4">Q4:</h1>
                <p class="fs-5">Ans:</p>
                

            </section>
        </div>
    );
};

export default Blog;