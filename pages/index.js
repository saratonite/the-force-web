import React, { Component } from "react";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { getPosts } from "../libs/api";

class Index extends Component {
  static async getInitialProps({ req }) {
    const posts = await getPosts(req);
    return { posts };
  }
  render() {
    const { posts = [] } = this.props;

    return (
      <div>
        <h1>f=ma</h1>
        {posts.results.map(post => (
          <div key={post.id}>
            <h1>
              <Link href="/post/[slug]" as={`/post/${post.uid}`}>
                <a>{RichText.asText(post.data.title)}</a>
              </Link>
            </h1>
            <p>{RichText.asText(post.data.content)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Index;
