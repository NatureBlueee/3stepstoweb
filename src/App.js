import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCode,
  faShoppingCart,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const UnsplashImage = ({ query, alt }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`https://source.unsplash.com/featured/?${query}`).then((response) =>
      setImageUrl(response.url)
    );
  }, [query]);

  return <img src={imageUrl} alt={alt} className="unsplash-image" />;
};

const AnimatedSection = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const ContentSection = ({ title, children, icon }) => (
  <AnimatedSection>
    <section className="content-section">
      <h2>
        <FontAwesomeIcon icon={icon} /> {title}
      </h2>
      {children}
    </section>
  </AnimatedSection>
);

const fetchComments = async () => {
  // 实际应用中，这里应该是一个 API 调用
  return [
    { id: 1, author: "张三", content: "非常实用的指南！" },
    { id: 2, author: "李四", content: "我用AI生成了我的第一个网站，太棒了！" },
  ];
};

const App = () => {
  const [showPresentation, setShowPresentation] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: "", content: "" });
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
    };
    loadComments();
  }, []);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (editingComment) {
      setComments(
        comments.map((c) =>
          c.id === editingComment.id ? { ...c, ...newComment } : c
        )
      );
      setEditingComment(null);
    } else {
      setComments([...comments, { id: Date.now(), ...newComment }]);
    }
    setNewComment({ author: "", content: "" });
  };

  const handleCommentDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleCommentEdit = (comment) => {
    setEditingComment(comment);
    setNewComment({ author: comment.author, content: comment.content });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>3步打造个人网站</h1>
        <button
          className="toggle-button"
          onClick={() => setShowPresentation(!showPresentation)}
        >
          {showPresentation ? "返回内容" : "查看演示"}
        </button>
      </header>
      <main className="app-main">
        {showPresentation ? (
          <iframe
            src="https://gamma.app/embed/klbqa94thalqt87"
            className="presentation-frame"
            title="3 Steps to Your Website"
          />
        ) : (
          <>
            <section className="hero">
              <UnsplashImage query="website,design" alt="Hero" />
              <div className="hero-content">
                <h1>打造你的数字名片</h1>
                <p>让全世界认识你，展示你的才华</p>
              </div>
            </section>
            <div className="content-grid">
              <div className="main-content">
                <ContentSection title="为什么需要个人网站？" icon={faLightbulb}>
                  <UnsplashImage query="personal,brand" alt="Personal Brand" />
                  <ul className="feature-list">
                    <li>展示个人品牌</li>
                    <li>提升专业形象</li>
                    <li>拓展全球机会</li>
                    <li>建立在线存在感</li>
                  </ul>
                </ContentSection>

                <ContentSection title="第一步：明确需求" icon={faCode}>
                  <UnsplashImage query="planning,strategy" alt="Planning" />
                  <p>使用麦肯锡的思考工具 - 哲学三问来明确你的网站需求：</p>
                  <div className="step-grid">
                    <div className="step-item">
                      <h3>是什么</h3>
                      <p>博客？作品集？商品展示？日常生活分享？</p>
                    </div>
                    <div className="step-item">
                      <h3>为什么</h3>
                      <p>你的目标受众是谁？</p>
                    </div>
                    <div className="step-item">
                      <h3>怎么做</h3>
                      <p>选择实现方式 - AI生成、自己编码还是购买服务？</p>
                    </div>
                  </div>
                </ContentSection>

                <ContentSection title="第二步：选择路径" icon={faShoppingCart}>
                  <UnsplashImage query="choice,path" alt="Choose Path" />
                  <div className="path-grid">
                    <div className="path-item">
                      <h3>AI生成</h3>
                      <p>快速、基础功能齐全、成本低</p>
                      <p>工具：Gamma、ChatGPT + AIPPT</p>
                    </div>
                    <div className="path-item">
                      <h3>编码实现</h3>
                      <p>高度可定制、可维护性强</p>
                      <p>工具：Next.js、React等现代框架 + AI辅助编码</p>
                    </div>
                    <div className="path-item">
                      <h3>购买服务</h3>
                      <p>一站式解决方案、省时省力</p>
                      <p>缺点：成本较高</p>
                    </div>
                  </div>
                </ContentSection>

                <ContentSection title="第三步：上线托管" icon={faCloud}>
                  <UnsplashImage query="cloud,hosting" alt="Cloud Hosting" />
                  <div className="hosting-grid">
                    <div className="hosting-item">
                      <h3>自主上线</h3>
                      <p>优点：功能全面、长期成本低</p>
                      <p>缺点：学习成本高</p>
                      <p>选择：阿里云、腾讯云、AWS等</p>
                    </div>
                    <div className="hosting-item">
                      <h3>第三方服务</h3>
                      <p>优点：操作简单、快速上线</p>
                      <p>缺点：功能可能受限、长期成本较高</p>
                      <p>选择：WordPress、Wix、Squarespace等</p>
                    </div>
                  </div>
                </ContentSection>
              </div>

              <div className="sidebar">
                <ContentSection title="留言板">
                  <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input
                      type="text"
                      placeholder="姓名"
                      value={newComment.author}
                      onChange={(e) =>
                        setNewComment({ ...newComment, author: e.target.value })
                      }
                      required
                    />
                    <textarea
                      placeholder="留言"
                      value={newComment.content}
                      onChange={(e) =>
                        setNewComment({
                          ...newComment,
                          content: e.target.value,
                        })
                      }
                      required
                    />
                    <button type="submit">
                      {editingComment ? "更新留言" : "发表留言"}
                    </button>
                  </form>
                  <ul className="comment-list">
                    {comments.map((comment) => (
                      <li key={comment.id} className="comment-item">
                        <strong>{comment.author}</strong>
                        <p>{comment.content}</p>
                        <div className="comment-actions">
                          <button onClick={() => handleCommentEdit(comment)}>
                            编辑
                          </button>
                          <button
                            onClick={() => handleCommentDelete(comment.id)}
                          >
                            删除
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ContentSection>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
