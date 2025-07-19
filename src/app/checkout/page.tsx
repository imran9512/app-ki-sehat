// src/app/checkout/page.tsx
"use client";
import { useCart } from "@/lib/cartStore";
import { CURRENCY, WHATSAPP_NUMBER, GOOGLE_FORM_URL, ENTRY_IDS } from "@/lib/constants";
import { useState } from "react";
import { generateOrderId } from "@/lib/utils";
import { products } from "@/lib/products";

export default function CheckoutPage() {
  const items = useCart((s) => s.items);
  const [payment, setPayment] = useState<"COD" | "ADVANCE">("COD");
  const [form, setForm] = useState({ name: "", number: "", city: "", address: "", instructions: "" });
  const [showModal, setShowModal] = useState(false);

  const rows = items.map(({ id, qty }) => {
    const p = products.find((i) => i.id === id)!;
    const tier = p.priceTiers.findLast((t) => qty >= t.qty)!;
    return { name: p.name, qty, priceEach: tier.priceEach };
  });

  const sub = rows.reduce((a, b) => a + b.qty * b.priceEach, 0);
  const discount = payment === "ADVANCE" ? sub * 0.05 : 0;
  const grand = sub - discount;

  const orderId = generateOrderId();
  const productsText = rows.map((r) => `${r.name} ×${r.qty} = ${CURRENCY}${r.qty * r.priceEach}`).join(" | ");

  const buildGoogleUrl = () =>
    `${GOOGLE_FORM_URL}?${Object.entries({
      [ENTRY_IDS.order_id]: orderId,
      [ENTRY_IDS.name]: form.name,
      [ENTRY_IDS.number]: form.number,
      [ENTRY_IDS.city]: form.city,
      [ENTRY_IDS.address]: form.address,
      [ENTRY_IDS.instructions]: form.instructions,
      [ENTRY_IDS.products_json]: productsText,
      [ENTRY_IDS.subtotal]: sub,
      [ENTRY_IDS.discount]: discount.toFixed(0),
      [ENTRY_IDS.grand_total]: grand,
      [ENTRY_IDS.payment_method]: payment,
    })
      .map(([k, v]) => `entry.${k}=${encodeURIComponent(v)}`)
      .join("&")}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.number || !form.city || !form.address) {
      alert("Please fill all required fields.");
      return;
    }
    // Silent Google-form submit
    const img = new Image();
    img.src = buildGoogleUrl().replace("viewform", "formResponse");
    setShowModal(true);
  };

  const whatsAppAdvanceText = encodeURIComponent(
    `Hi, I want to pay in advance for order #${orderId} amount ${CURRENCY}${grand}. Kindly share your account details.`
  );
  const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppAdvanceText}`;

  return (
    <>
      <div className="max-w-xl mx-auto px-4 py-8">
        <h1 className="text-3xl mb-4">Checkout</h1>

        <ul className="mb-4 space-y-1">
          {rows.map((r) => (
            <li key={r.name}>
              {r.name} x{r.qty} = {CURRENCY}{r.qty * r.priceEach}
            </li>
          ))}
        </ul>

        <p>Subtotal: {CURRENCY}{sub}</p>
        {payment === "ADVANCE" && (
          <p className="text-green-600">5 % advance discount: ‑{CURRENCY}{discount.toFixed(0)}</p>
        )}
        <p className="text-xl font-bold mb-6">Grand Total: {CURRENCY}{grand}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border p-2 rounded" />
          <input required type="tel" placeholder="WhatsApp / Mobile Number" value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} className="w-full border p-2 rounded" />
          <input required placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full border p-2 rounded" />
          <textarea required placeholder="Delivery Address" rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full border p-2 rounded" />
          <textarea placeholder="Special instructions" rows={2} value={form.instructions} onChange={(e) => setForm({ ...form, instructions: e.target.value })} className="w-full border p-2 rounded" />

          <fieldset className="space-y-2">
            <legend className="font-semibold">Payment Method</legend>
            <label className="flex items-center gap-2">
              <input type="radio" value="COD" checked={payment === "COD"} onChange={() => setPayment("COD")} /> Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="ADVANCE" checked={payment === "ADVANCE"} onChange={() => setPayment("ADVANCE")} /> Online Transfer (5 % extra discount)
            </label>
          </fieldset>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Place Order
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-2">Order Submitted</h2>
            <p className="mb-4">
              {payment === "ADVANCE"
                ? "Kindly chat on WhatsApp to get account details for payment."
                : "We will contact you shortly for COD confirmation."}
            </p>

            {payment === "ADVANCE" && (
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#25D366] text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Chat on WhatsApp
              </a>
            )}
            <button onClick={() => setShowModal(false)} className="mt-2 block w-full text-sm text-gray-600 underline">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}