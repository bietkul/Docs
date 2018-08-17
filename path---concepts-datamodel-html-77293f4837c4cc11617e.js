webpackJsonp([0x8658baa58499],{398:function(a,e){a.exports={data:{markdownRemark:{html:'<h2 id="what-is-appbaseio"><a href="#what-is-appbaseio" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is appbase.io</h2>\n<p><a href="https://appbase.io">Appbase.io</a> is a hosted Elasticsearch service with built-in publish/subscribe support for streaming document updates and query results.</p>\n<p>It enables you to:  </p>\n<ul>\n<li>Build a blazing fast text search, pub/sub based messaging system, or implement a combination of esoteric filters (fuzzy, geo, terms, range, multiple items),</li>\n<li>Stream JSON results directly as new data is added or when the original data is updated,</li>\n<li>Launch in days with our hosted APIs and scale without vendor-lockin by deploying appbase.io on your choice of cloud provider.</li>\n</ul>\n<p><img src="https://i.imgur.com/iJpqtks.png?1" alt="Appbase Architecture"><br>\n<strong>Image 1:</strong> appbase.io architecture overview</p>\n<p>We have production users running e-commerce stores, analytics dashboards, feeds, and realtime backends using appbase.io.</p>\n<p>There are some catches if you intend to:  </p>\n<ul>\n<li>Model financial or sensitive data - Appbase.io is not ACIDic and doesn’t support multi-document transactions. A good design choice in such a situation would be to use something that supports ACID transactions for storing sensitive data, and use Appbase.io for the data that needs to be searchable in realtime.</li>\n<li>Perform analytical processing - Being based on Elasticsearch, appbase.io is designed as an OLTP system although it supports aggregations and queries on data sets of the size of hundreds of gigabytes and even a few terabytes. There are plenty of ideal tools for OLAP use-cases - Amazon Redshift, Google Big Query, Apache Hadoop. appbase.io can be used in a complementary fashion with any of these for handling online transactions.</li>\n</ul>\n<h1 id="appbase-data-schema"><a href="#appbase-data-schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Appbase Data Schema</h1>\n<p>Appbase uses the same data schema as ElasticSearch <code class="gatsby-code-text">v5.x</code> and <code class="gatsby-code-text">v2.x</code>.</p>\n<h2 id="app-span-stylefont-weight-200aka-indexspan"><a href="#app-span-stylefont-weight-200aka-indexspan" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>App <span style="font-weight: 200;">aka Index</span></h2>\n<p>An app in <a href="https://appbase.io">appbase.io</a> is stored as an index in ElasticSearch. App is the highest level of construct supported by appbase and is equivalent to a <strong>database</strong> in SQL.</p>\n<h2 id="type"><a href="#type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type</h2>\n<p>JSON data (aka documents) in an app is logicaly partitioned using types, think of them as namespaces for arranging and querying similar kinds of data.</p>\n<h2 id="document"><a href="#document" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Document</h2>\n<p>A <strong>document</strong> is the actual data stored in an app. Documents are <code class="gatsby-code-text">JSON</code> objects, equivalent to <strong>records</strong> or <strong>rows</strong> in SQL.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n   <span class="token string">"user"</span><span class="token punctuation">:</span> <span class="token string">"data"</span><span class="token punctuation">,</span>\n   <span class="token string">"remember"</span><span class="token punctuation">:</span> <span class="token string">"something"</span><span class="token punctuation">,</span>\n   <span class="token string">"molala"</span><span class="token punctuation">:</span> <span class="token string">"yaya"</span><span class="token punctuation">,</span>\n   <span class="token string">"lifeis"</span><span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n   <span class="token string">"recursive"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n   \t\t<span class="token string">"how\'s this"</span><span class="token punctuation">:</span> <span class="token string">"one nested value"</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br>\n<h2 id="visualizing-the-data-model"><a href="#visualizing-the-data-model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Visualizing the Data Model</h2>\n<p>An app can have one or more types and each type is a container for JSON documents. Visually, the arrangement looks like below:</p>\n<p><a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJyAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsnR3mLY6qp78UrdyiX4kf3rJXqxmkCAfGPRGyyY4NGU7xDzBus7B3hXJNG4yyaH1H8guySgP4Wo-ZoNcdRwQLUR0z6eRlUmgmT3EhyDSjc2FAfNrp-UQUzBSnnBhUAyhUc5rRuJyHSzSRV3a7TCE0Kd0o7yFwt-ipsw76R6tWjdWWcUyRSNy1GB4J7q98DAmFVqpjdXO37X35pXONcdFgA4urdMJ5Q2oh_uG1Wf-mubQFDVcFYBy16t61GMMPqMmP_hyRVIOFI-kkHGSn0CWT8Iw1uS7K6C38TKBcr7Z2hjCiU3GHOVD2LhwKjDSrwV33ZTqcTd_Rh2ZWdSlokfaXOZmfVU7EcpaQjtZEEEat9eXD9UpGpX_ov1vAA"><img src="https://i.imgur.com/wQ7kvTj.png" alt="Data Model View"></a></p>\n<p>Click on the image above to see the actual data, visualized with appbase.io data browser.</p>',frontmatter:{title:"Data Model",next:"databrowser.html",prev:"intro.html",nextTitle:"Data Browser",prevTitle:"Concepts - Introduction"},fields:{path:"docs/concepts/datamodel.md",slug:"concepts/datamodel.html"}}},pathContext:{slug:"concepts/datamodel.html"}}}});
//# sourceMappingURL=path---concepts-datamodel-html-77293f4837c4cc11617e.js.map