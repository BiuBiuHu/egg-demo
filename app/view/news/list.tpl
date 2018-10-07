<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
  <h4>排 名：{{blogInfo.rankValue}}</h4>
  <h4>访问量：{{blogInfo.askRate}}</h4>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}"  target="_blank">{{ item.title }}  </a>
          <p>访问量{{item.count}}</p>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>