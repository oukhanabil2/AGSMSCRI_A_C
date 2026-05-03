{
  "rewrites": [
    {
      "source": "/api/(.*)", "distination":https://script.google.com/macros/s/AKfycbw-96AHsem7svPRbSEsoUpAWXrfu_FHbaIisRFpGeOSRHI7Io9UVDZX8dlObPicq-Q/exec"/tabs/$1"
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
