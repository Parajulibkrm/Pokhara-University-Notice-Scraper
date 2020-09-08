# PU Notices Scraper

This is a simple node.js rest api implementation to scrape notices and notice contents from Pokhara University's website.

## Install

    npm install

## Run the app

    npm run server

# REST API

The REST API to the app is described below.

## Get list of all Notices

### Request

`GET /notices`

    curl -i -H 'Accept: application/json' http://localhost:3000/notices/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 08 Sep 2020 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

#### Json Response

```json
{
  "timeStamp": 1599572755290,
  "notices": [
    {
      "date": "September 07, 2020",
      "title": "Three Day Webinar on Emerging Concepts in Marketing (ECM)",
      "link": "https://pu.edu.np/notice/three-day-webinar-on-emerging-concepts-in-marketing-ecm/"
    },
    {
      "date": "September 05, 2020",
      "title": "सूचना !!!",
      "link": "https://pu.edu.np/notice/%e0%a4%b8%e0%a5%82%e0%a4%9a%e0%a4%a8%e0%a4%be-4/"
    }
  ]
}
```

## Get a list of Notices of specific category

### Request

`GET /notices/category`

    curl -i -H 'Accept: application/json' http://localhost:3000/notices/college

### Response

    HTTP/1.1 200 OK
    Date: Thu, 08 Sep 2020 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

#### Json Response

```json
{
  "timeStamp": 1599572755290,
  "notices": [
    {
      "date": "September 07, 2020",
      "title": "Three Day Webinar on Emerging Concepts in Marketing (ECM)",
      "link": "https://pu.edu.np/notice/three-day-webinar-on-emerging-concepts-in-marketing-ecm/"
    },
    {
      "date": "September 05, 2020",
      "title": "Faculty of Management Studies: Postponement Notice for Admission",
      "link": "https://pu.edu.np/notice/faculty-of-management-studies-postponement-notice-for-admission/"
    }
  ]
}
```

### Request

`POST /notice`

    curl -d '{"url":"https://pu.edu.np/notice/three-day-webinar-on-emerging-concepts-in-marketing-ecm/"}' -H "Content-Type: application/json" -X POST http://localhost:3000/notice

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

#### Json Response

```json
{
  "timeStamp": 1599573280170,
  "notice": {
    "title": "Three Day Webinar on Emerging Concepts in Marketing (ECM) ",
    "content": "Faculty of Management Studies, Pokhara University is organizing three day webinar on Emerging Concepts in Marketing (ECM) from 15th September – 17th September, 2020 in association with School of Business Alumni Relations. The webinar brings professors and experts of marketing from renowned higher education institutions of India together to share their ideas on emerging issues in marketing. The speakers are well trained in academia and have rich experience of working in the industry.The webinar is free to register and interested participants can register their names to Santosh Kumar Gurung at santoshg@pusob.edu.np(9846117506)  OR Pradeep Sapkota at ursparu061@gmail.com(9856062223) on or before 9th September, 2020.",
    "html": "    \n    <h4 style=\"text-align: center;\"><span style=\"color: #0000ff;\"><strong>Three Day Webinar on Emerging Concepts in Marketing (ECM) </strong></span></h4>\n<p style=\"text-align: justify;\"><strong>Faculty of Management Studies, Pokhara University is organizing three day webinar on Emerging Concepts in Marketing (ECM) from 15<sup>th</sup> September – 17<sup>th</sup> September, 2020 in association with School of Business Alumni Relations. The webinar brings professors and experts of marketing from renowned higher education institutions of India together to share their ideas on emerging issues in marketing. The speakers are well trained in academia and have rich experience of working in the industry.</strong></p>\n<p style=\"text-align: justify;\"><strong>The webinar is free to register and interested participants can register their names to Santosh Kumar Gurung at <a href=\"mailto:santoshg@pusob.edu.np(9846117506)\">santoshg@pusob.edu.np(9846117506)</a>  OR Pradeep Sapkota at <a href=\"mailto:ursparu061@gmail.com(9856062223)\">ursparu061@gmail.com(9856062223)</a> on or before 9<sup>th</sup> September, 2020.</strong></p>\n<p><img class=\"alignnone wp-image-26768 size-large\" src=\"https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner-768x1024.jpg\" alt width=\"768\" height=\"1024\" srcset=\"https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner-768x1024.jpg 768w, https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner-225x300.jpg 225w, https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner.jpg 900w\" sizes=\"(max-width: 768px) 100vw, 768px\"></p>\n            \n  ",
    "markdown": "    \n\n#### <strong>Three Day Webinar on Emerging Concepts in Marketing (ECM) </strong>\n\n**Faculty of Management Studies, Pokhara University is organizing three day webinar on Emerging Concepts in Marketing (ECM) from 15<sup>th</sup> September – 17<sup>th</sup> September, 2020 in association with School of Business Alumni Relations. The webinar brings professors and experts of marketing from renowned higher education institutions of India together to share their ideas on emerging issues in marketing. The speakers are well trained in academia and have rich experience of working in the industry.**\n\n**The webinar is free to register and interested participants can register their names to Santosh Kumar Gurung at [santoshg@pusob.edu.np(9846117506)](mailto:santoshg@pusob.edu.np(9846117506))  OR Pradeep Sapkota at [ursparu061@gmail.com(9856062223)](mailto:ursparu061@gmail.com(9856062223)) on or before 9<sup>th</sup> September, 2020.**\n\n![](https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner-768x1024.jpg)\n",
    "images": [
      "https://pu.edu.np/wp-content/uploads/2020/09/Marketing-Webinar-Banner-768x1024.jpg"
    ],
    "attachments": [
      {
        "title": "santoshg@pusob.edu.np(9846117506)",
        "url": "mailto:santoshg@pusob.edu.np(9846117506)"
      },
      {
        "title": "ursparu061@gmail.com(9856062223)",
        "url": "mailto:ursparu061@gmail.com(9856062223)"
      }
    ]
  }
}
```
