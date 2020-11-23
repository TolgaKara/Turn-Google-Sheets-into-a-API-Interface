function doGet(element) {
    // Display the text on the webpage
    return ContentService.createTextOutput("This is a GET Request!");
  }

  function doPost(element){
    let sheet = SpreadsheetApp.getActiveSheet();

    // Parsing the request body
    let body = JSON.parse(element.postData.contents)

    //Adding a new row with content from the request body
     sheet.appendRow([body.id,
      body.date_created,
      body.applied_type,
      body.company.name,
      body.company.location,
      body.company.postcode,
      body.company.email,
      body.company.phone,

     ])

  }
