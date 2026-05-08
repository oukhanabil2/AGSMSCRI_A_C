{
  "rewrites": [
    {
      "source": "/api/(.*)", "distination"https://script.google.com/macros/s/AKfycbx11EZOys0LGpNLmjXblnIxGx4sRt9AeDCWVM1W0QUX6YC_8oT_SaZWKSywVdxMP1O1pA/exec/tabs/$1"
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type" }
      ]
    }
  ]
}
