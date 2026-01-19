// Google Apps Script for Google Sheets Integration
// Instructions:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Paste this code
// 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 5. Copy the deployment URL and paste it in RegistrationModal.tsx

function doPost(e) {
    try {
        // Get the active spreadsheet (or specify by ID)
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse the incoming data
        const data = JSON.parse(e.postData.contents);

        // Prepare row data
        const row = [
            data.timestamp,
            data.name,
            data.phone,
            data.city,
            data.date,
            data.ticketType
        ];

        // Append to sheet
        sheet.appendRow(row);

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Optional: Setup function to create headers
function setupSheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const headers = [
        'Timestamp',
        'Nome',
        'Telefone',
        'Cidade',
        'Data do Evento',
        'Tipo de Ingresso'
    ];

    // Set headers in first row
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Format header row
    sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#00d1ff')
        .setFontColor('#020617');
}
