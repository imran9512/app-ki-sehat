// src/lib/constants.ts
// Change ONLY the values below – nothing else
export const SITE_NAME = "AAP KI SEHAT";                   // Display name everywhere
export const CURRENCY = "Rs";                                 // Pakistani currency symbol
export const WHATSAPP_NUMBER = "923001234567";                // Your WhatsApp with country code

// Google hidden-submit (replace YOUR_FORM_ID and every entry number with your own)
export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScP9cDlIf1Ml38opCMK9amrYXKi9oXqVQDAMtXW9Gf05-GzZg/viewform";
export const ENTRY_IDS = {
  order_id: "1569884057",        // Google Form field ID for order number
  name: "1942248175",            // Google Form field ID for customer name
  number: "2033882025",          // Google Form field ID for phone
  city: "1433680367",            // Google Form field ID for city
  address: "81208404",         // Google Form field ID for address
  instructions: "1588560176",    // Google Form field ID for instructions
  products_json: "2042780537",   // Google Form field ID for product summary
  subtotal: "706630286",        // Google Form field ID for subtotal
  discount: "2035867855",        // Google Form field ID for discount
  grand_total: "1062659703",     // Google Form field ID for grand total
  payment_method: "1742878288",  // Google Form field ID for payment method
};

// Google Search Console verification (change YOUR_VERIFICATION_TAG if needed)
export const GOOGLE_SEARCH_CONSOLE_TAG = "YOUR_VERIFICATION_TAG";