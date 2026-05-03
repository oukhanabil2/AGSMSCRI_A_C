{
  "rewrites": [
    {
      "source": "/api/(.*)", "distination"https://script.google.com/macros/s/AKfycbxEj7lQyKMgz61Ime0Fpwpd0yrzbGIE2hrgdiXoojtX2OhoKUgWw518Pl_qcri53VZaTw/exec/tabs/$1"
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
