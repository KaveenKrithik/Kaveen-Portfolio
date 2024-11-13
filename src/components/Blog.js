import React from "react";
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <h3>MY BLOG</h3>
      <div className="blog-post">
        <h4>Understanding React Lifecycle</h4>
        <p>Published on Jan 2024</p>
        <p>
React's component lifecycle refers to the series of events that occur from when a component is created to when it's removed from the DOM. Understanding these phases is essential for managing tasks like data fetching, state updates, and resource cleanup.

Key Phases of the React Lifecycle:
Mounting: This phase happens when a component is created and inserted into the DOM. It includes methods like initialization, rendering the component, and performing tasks after the component is mounted, such as fetching data.

Updating: Occurs when a component’s state or props change, causing a re-render. React provides methods to manage updates efficiently, such as checking if a re-render is necessary or performing actions after the component updates.

Unmounting: This phase happens when the component is removed from the DOM. It's the right time to clean up resources, like canceling network requests or clearing timers.

React's Hooks allow functional components to manage these lifecycle phases in a simpler way. By understanding the lifecycle, you can optimize your app's performance and manage resources effectively.</p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

export default Blog;

