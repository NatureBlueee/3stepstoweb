import React, { useState } from "react";
import "./App.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ParallaxSection from "./components/ParallaxSection";

const NavBar = ({ activeSection, setActiveSection }) => (
  <nav className="navbar">
    <ul>
      <li
        className={activeSection === "home" ? "active" : ""}
        onClick={() => setActiveSection("home")}
      >
        首页
      </li>
      <li
        className={activeSection === "why" ? "active" : ""}
        onClick={() => setActiveSection("why")}
      >
        为什么
      </li>
      <li
        className={activeSection === "steps" ? "active" : ""}
        onClick={() => setActiveSection("steps")}
      >
        三步骤
      </li>
    </ul>
  </nav>
);

const ContentSection = ({ title, children, icon, id }) => (
  <section className="content-section" id={id}>
    <h2>
      <span className="icon">{icon}</span> {title}
    </h2>
    {children}
  </section>
);

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <button className="collapsible-toggle" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

const App = () => {
  const [showPresentation, setShowPresentation] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {!showPresentation && (
        <header className="app-header">
          <h1>3步打造个人网站</h1>
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </header>
      )}
      <button
        className="toggle-button"
        onClick={() => setShowPresentation(!showPresentation)}
      >
        {showPresentation ? "返回内容" : "查看演示"}
      </button>
      <main className="app-main">
        {showPresentation ? (
          <iframe
            src="https://gamma.app/embed/klbqa94thalqt87"
            className="presentation-frame"
            title="3 Steps to Your Website"
            allowFullScreen
          />
        ) : (
          <>
            <section className="hero">
              <div className="hero-background"></div>
              <div className="hero-content">
                <h1 className="hero-title">打造你的数字名片</h1>
                <p className="hero-subtitle">让全世界认识你，展示你的才华</p>
                <p className="hero-quote">
                  "在数字时代，你的在线形象就是你的第一印象。" - 克里斯·安德森
                </p>
                <a
                  href="#why"
                  className="cta-button"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why");
                  }}
                >
                  了解更多
                </a>
              </div>
            </section>
            <div className="content-container">
              <ParallaxSection speed={0.2}>
                <ContentSection title="为什么需要个人网站？" icon="💡" id="why">
                  <p>
                    在当今数字化时代，拥有一个个人网站已经成为展示专业形象和拓展职业机会的重要工具。正如
                    Cursor 的创始人 Michael Hulet
                    所说："个人网站是你在互联网上的家，它让你完全控制如何向世界展示自己。"
                  </p>
                  <ul className="feature-list">
                    <li>
                      <strong>展示个人品牌：</strong>
                      让你的专业形象更加突出，建立独特的个人品牌。
                    </li>
                    <li>
                      <strong>拓展全球机会：</strong>
                      打破地域限制，接触更多潜在客户或雇主。根据 LinkedIn
                      的调查，76% 的招聘者会在面试前查看候选人的在线资料。
                    </li>
                    <li>
                      <strong>建立在线存在感：</strong>
                      在数字时代树立你的专业权威，增加被发现的机会。
                    </li>
                    <li>
                      <strong>展示作品集：</strong>
                      直观展示你的技能和成就，让你的才华得到充分展现。
                    </li>
                  </ul>
                  <p>
                    正如 Cursor
                    团队在他们的博客中指出的："一个精心设计的个人网站可以成为你职业生涯中最有价值的资产之一。"
                  </p>

                  <Collapsible title="成功案例">
                    <div className="case-study">
                      <h4>案例：设计师 Sarah 的故事</h4>
                      <p>
                        Sarah
                        是一名平面设计师，她通过创建个人网站展示她的作品集，成功吸引了多个高端客户。她的网站不仅展示了她的设计作品，还包含了她的设计理念和工作流程。这让潜在客户能够更全面地了解她的专业能力。
                      </p>
                      <p>
                        结果：在推出个人网站后的 6 个月内，Sarah
                        的客户咨询量增加了 150%，并成功签下了两个长期合作项目。
                      </p>
                    </div>
                  </Collapsible>

                  <div className="resources">
                    <h4>相关资源：</h4>
                    <ul>
                      <li>
                        <a
                          href="https://www.linkedin.com/business/talent/blog/talent-acquisition/how-to-use-social-media-for-recruiting"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn: How to Use Social Media for Recruiting
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://cursor.sh/blog/importance-of-personal-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Cursor: The Importance of Having a Personal Website
                        </a>
                      </li>
                    </ul>
                  </div>
                </ContentSection>
              </ParallaxSection>

              <ParallaxSection speed={-0.2}>
                <ContentSection title="三步打造个人网站" icon="🚀" id="steps">
                  <div className="steps-container">
                    <div className="step">
                      <h3>第一步：明确需求</h3>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/plan.png`}
                        alt="明确需求"
                        className="step-image"
                      />
                      <p>使用麦肯锡的思考工具 - 哲学三问来明确你的网站需求：</p>
                      <ul>
                        <li>
                          <strong>是什么：</strong>
                          定义你的网站类型（博客、作品集、商品展示等）。考虑你想要展示的内容和功能。
                        </li>
                        <li>
                          <strong>为什么：</strong>
                          明确你的目标受众和网站目的。你是想吸引潜在雇主、客户，还是分享你的专业知识？
                        </li>
                        <li>
                          <strong>怎么做：</strong>
                          选择最适合你的实现方式。考虑你的技术能力、时间和预算。
                        </li>
                      </ul>
                      <p>
                        Cursor 的 AI
                        辅助编码功能可以帮助你更好地规划和设计你的网站结构。正如
                        Cursor 团队所说："好的规划是成功的一半。利用 AI
                        工具可以让你的规划过程更加高效和全面。"
                      </p>

                      <Collapsible title="操作技巧">
                        <div className="tips">
                          <h4>需求分析清单</h4>
                          <ul>
                            <li>
                              列出你想在网站上展示的核心内容（如：简历、作品集、博客文章等）
                            </li>
                            <li>
                              确定你的目标受众（如：潜在雇主、客户、同行等）
                            </li>
                            <li>
                              思考你希望访问者在浏览你的网站后采取什么行动（如：联系你、下载你的作品集等）
                            </li>
                            <li>
                              考虑你的长期目标，确保网站设计能够支持未来的扩展
                            </li>
                          </ul>
                        </div>
                      </Collapsible>

                      <div className="resources">
                        <h4>相关资源：</h4>
                        <ul>
                          <li>
                            <a
                              href="https://www.mckinsey.com/industries/public-and-social-sector/our-insights/the-three-questions"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              McKinsey: The Three Questions
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://cursor.sh/features/ai-code-generation"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Cursor: AI Code Generation
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="step">
                      <h3>第二步：选择路径</h3>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/path.png`}
                        alt="选择路径"
                        className="step-image"
                      />
                      <ul>
                        <li>
                          <strong>AI生成：</strong>
                          快速、基础功能齐全、成本低（如Gamma、ChatGPT +
                          AIPPT）。适合快速原型设计或简单的展示页面。
                        </li>
                        <li>
                          <strong>编码实现：</strong>
                          高度可定制、可维护性强（如Next.js、React +
                          AI辅助编码）。Cursor 的 AI
                          辅助编码功能可以大大提高你的开发效率。
                        </li>
                        <li>
                          <strong>购买服务：</strong>
                          一站式解决方案、省时省力（但成本较高，可定制性较低）。适合不想深入技术细节的用户。
                        </li>
                      </ul>
                      <p>
                        Cursor 的创始人 Michael Hulet
                        曾说："选择正确的工具和方法可以让你的网站开发事半功倍。不要害怕尝试新技术，比如
                        AI 辅助编码，它们可能会成为你的得力助手。"
                      </p>

                      <Collapsible title="路径对比">
                        <div className="comparison-table">
                          <table>
                            <thead>
                              <tr>
                                <th>路径</th>
                                <th>优点</th>
                                <th>缺点</th>
                                <th>适合人群</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>AI生成</td>
                                <td>快速、低成本</td>
                                <td>自定义程度低</td>
                                <td>需要快速建站的初学者</td>
                              </tr>
                              <tr>
                                <td>编码实现</td>
                                <td>高度自定义、可扩展</td>
                                <td>学习曲线陡峭</td>
                                <td>有编程基础或愿意学习的人</td>
                              </tr>
                              <tr>
                                <td>购买服务</td>
                                <td>省时省力</td>
                                <td>成本较高</td>
                                <td>预算充足、不想处理技术细节的人</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Collapsible>

                      <div className="resources">
                        <h4>相关资源：</h4>
                        <ul>
                          <li>
                            <a
                              href="https://nextjs.org/learn/basics/create-nextjs-app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Next.js: Create a Next.js App
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://cursor.sh/blog/ai-assisted-coding"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Cursor: The Future of AI-Assisted Coding
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="step">
                      <h3>第三步：上线托管</h3>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/cloud.png`}
                        alt="上线托管"
                        className="step-image"
                      />
                      <ul>
                        <li>
                          <strong>自主上线：</strong>
                          功能全面、长期成本低（如阿里云、腾讯云、AWS等）。适合有技术背景或愿意学习的用户。
                        </li>
                        <li>
                          <strong>第三方服务：</strong>
                          操作简单、快速上线（如WordPress、Wix、Squarespace等）。适合快速建站或不想处理技术细节的用户。
                        </li>
                      </ul>
                      <p>
                        Cursor
                        团队建议："无论你选择哪种托管方式，都要确保你的网站有良好的性能和全性。使用像
                        Cursor
                        这样的现代开发工具可以帮助你更好地管理和维护你的代码。"
                      </p>

                      <Collapsible title="托管注意事项">
                        <div className="hosting-tips">
                          <h4>选择托管服务时的考虑因素：</h4>
                          <ul>
                            <li>可靠性和正常运行时间</li>
                            <li>安全性和数据保护</li>
                            <li>性能和加载速度</li>
                            <li>可扩展性</li>
                            <li>客户支持质量</li>
                            <li>价格和长期成本</li>
                          </ul>
                        </div>
                      </Collapsible>

                      <div className="resources">
                        <h4>相关资源：</h4>
                        <ul>
                          <li>
                            <a
                              href="https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Netlify: A Step-by-Step Guide: Deploying on
                              Netlify
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://cursor.sh/blog/code-maintenance"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Cursor: Best Practices for Code Maintenance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ContentSection>
              </ParallaxSection>

              <ContentSection title="设计与用户体验" icon="🎨" id="design">
                <p>
                  一个好的个人网站不仅要有优质的内容，还需要出色的设计和用户体验。以下是一些关键考虑因素：
                </p>

                <Collapsible title="响应式设计">
                  <p>
                    确保你的网站在各种设备（桌面电脑、平板、手机）上都能正常显示和使用。响应式设计可以提升用户体验，并有利于搜索引擎优化。
                  </p>
                  <ul>
                    <li>使用弹性布局和弹性图片</li>
                    <li>采用移动优先的设计策略</li>
                    <li>测试不同屏幕尺寸下的显示效果</li>
                  </ul>
                </Collapsible>

                <Collapsible title="简明了的导航">
                  <p>清晰的导航结构可以帮助访客快速找到他们需要的信息。</p>
                  <ul>
                    <li>保持主导航菜单简单，通常不超过5-7个选项</li>
                    <li>使用描述性的标签，避免使用行业术语</li>
                    <li>考虑使用面包屑导航，特别是对于层级较深的网站</li>
                  </ul>
                </Collapsible>

                <Collapsible title="视觉层次">
                  <p>良好的视觉层次可以引导用户的注意力，突出重要信息。</p>
                  <ul>
                    <li>使用不同的字体大小和粗细来区分标题和正文</li>
                    <li>利用颜色对比来强调关键元素</li>
                    <li>使用留白来分隔不同的内容区域</li>
                  </ul>
                </Collapsible>

                <Collapsible title="加载速度优化">
                  <p>网站加载速度直接影响用户体验和搜索引擎排名。</p>
                  <ul>
                    <li>优化图片大小和格式</li>
                    <li>使用浏览器缓存</li>
                    <li>最小化和压缩CSS、JavaScript文件</li>
                    <li>考虑使用内容分发网络（CDN）</li>
                  </ul>
                </Collapsible>

                <Collapsible title="无障碍设计">
                  <p>
                    确保你的网站对所有用户都是可访问的，包括那些使用辅助技术的人。
                  </p>
                  <ul>
                    <li>使用语义化HTML</li>
                    <li>提供替代文本（alt text）给图片</li>
                    <li>确保颜色对比度足够</li>
                    <li>使键盘导航成为可能</li>
                  </ul>
                </Collapsible>

                <p>
                  记住，好的设计应该是不引人注意的。它应该让用户专注于内容，而不是设计本身。正如
                  Cursor
                  团队所说："最好的用户界面是几乎看不见的界面。它应该直观到用户甚至不会意识到他们正在与之交互。"
                </p>

                <div className="resources">
                  <h4>相关资源：</h4>
                  <ul>
                    <li>
                      <a
                        href="https://material.io/design"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Material Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nielsen Norman Group: 10 Usability Heuristics for User
                        Interface Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://web.dev/measure/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Web.dev: Measure
                      </a>
                    </li>
                  </ul>
                </div>
              </ContentSection>

              <ContentSection title="内容策略" icon="📝" id="content">
                <p>
                  优质的内容是任何成功网站的核心。以下是一些制定有效内容策略的建议：
                </p>

                <Collapsible title="了解你的受众">
                  <p>在创建内容之前，先要了解你的目标受众。考虑以下问题：</p>
                  <ul>
                    <li>你的理想读者是谁？</li>
                    <li>他们在寻找什么样的信息？</li>
                    <li>他们面临什么样的挑战？</li>
                    <li>你如何能帮助解决这些挑战？</li>
                  </ul>
                </Collapsible>

                <Collapsible title="定义你的独特价值主张">
                  <p>明确你能为读者提供什么独特的价值。这可能是：</p>
                  <ul>
                    <li>你的专业知识和经验</li>
                    <li>独特的见解或观点</li>
                    <li>特殊的技能或才能</li>
                    <li>解决特定问题的能力</li>
                  </ul>
                </Collapsible>

                <Collapsible title="创建内容日历">
                  <p>规划你的内容发布可以帮助你保持一致性和质量。考虑：</p>
                  <ul>
                    <li>定期更新的频率（每周、每月等）</li>
                    <li>不同类型的内容（博客文章、案例研究、视频等）</li>
                    <li>重要日期或事件（行业会议、产品发布等）</li>
                  </ul>
                </Collapsible>

                <Collapsible title="优化搜索引擎（SEO）">
                  <p>确保你的内容能被搜索引擎找到：</p>
                  <ul>
                    <li>研究使用相关的关键词</li>
                    <li>创建描述性的标题和元描述</li>
                    <li>使用内部链接连接相关内容</li>
                    <li>确保你的网站结构对搜索引擎友好</li>
                  </ul>
                </Collapsible>

                <Collapsible title="鼓励互动">
                  <p>让你的内容更具互动性可以增加访客的参与度：</p>
                  <ul>
                    <li>在博客文章末尾提出问题，鼓励评论</li>
                    <li>创建调查或测验</li>
                    <li>邀请读者分享他们的经验或观点</li>
                    <li>考虑添加一个简单的联系表单</li>
                  </ul>
                </Collapsible>

                <p>
                  记住，内容创作是一个持续的过程。正如 Cursor
                  团队所强调的："持续创作高质量的内容不仅可以吸引访客，还能建立你的权威性和信任度。利用数据分析工具来了解哪些内容最受欢迎，并据此调整你的策略。"
                </p>

                <div className="resources">
                  <h4>相关资源：</h4>
                  <ul>
                    <li>
                      <a
                        href="https://moz.com/beginners-guide-to-content-marketing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Moz: The Beginner's Guide to Content Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://backlinko.com/seo-this-year"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Backlinko: SEO This Year
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://buffer.com/library/content-marketing-strategy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buffer: How to Create a Content Marketing Strategy
                      </a>
                    </li>
                  </ul>
                </div>
              </ContentSection>

              <ContentSection title="常见问题解答" icon="❓" id="faq">
                <Collapsible title="我没有技术背景，可以创建个人网站吗？">
                  <p>
                    当然可以！现在有很多用户友好的工具和平台，如Wix、Squarespace等，可以帮助没有技术背景的人创建漂亮的个人网站。此外，AI生成工具也正在使网站创建变得更加简单。如果你想学习编码，Cursor等AI辅助编码工具可以大大降低学习曲线。
                  </p>
                </Collapsible>
                <Collapsible title="创建和维护个人网站需要多少成本？">
                  <p>
                    成本可以根据你的需求和选择的方法而有很大差异。使用免费的网站构建器和托管服务，你可以几乎零成本地创建一个基础网站。如果选择付费服务或自主托管，每月的成本可能在10到100美元之间。对于更复杂的网站，成本可能会更高。重要的是要考虑长期成本，而不仅仅是初始设置费用。
                  </p>
                </Collapsible>
                <Collapsible title="我应该多久更新一次我的个人网站？">
                  <p>
                    这取决于你的网站类型和目的。对于博客或新闻类网站，频繁更新（每周或每月）是理想的。对于作品集或简历类网站，你可以在有新项目或成就时进行更新。无论如何，定期检查和更新（至少每季度一次）是个好习惯，这可以确保你的信息保持最新，并有助于搜索引擎优化。
                  </p>
                </Collapsible>
              </ContentSection>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
