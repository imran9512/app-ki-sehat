// src/lib/constants.ts
// Change ONLY the values below – nothing else
export const SITE_NAME = "AAP KI SEHAT";                   // Display name everywhere
export const CURRENCY = "Rs";                                 // Pakistani currency symbol
export const WHATSAPP_NUMBER = "923001234567";                // Your WhatsApp with country code

// Google hidden-submit (replace YOUR_FORM_ID and every entry number with your own)
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
export const ENTRY_IDS = {
  order_id: "111111111",        // Google Form field ID for order number
  name: "222222222",            // Google Form field ID for customer name
  number: "333333333",          // Google Form field ID for phone
  city: "444444444",            // Google Form field ID for city
  address: "555555555",         // Google Form field ID for address
  instructions: "666666666",    // Google Form field ID for instructions
  products_json: "777777777",   // Google Form field ID for product summary
  subtotal: "888888888",        // Google Form field ID for subtotal
  discount: "999999999",        // Google Form field ID for discount
  grand_total: "101010101",     // Google Form field ID for grand total
  payment_method: "121212121",  // Google Form field ID for payment method
};

// Google Search Console verification (change YOUR_VERIFICATION_TAG if needed)
export const GOOGLE_SEARCH_CONSOLE_TAG = "YOUR_VERIFICATION_TAG";