// ======== Firebase Configuration ========
// Replace with your Firebase config when ready
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (typeof firebase !== "undefined") {
  firebase.initializeApp(firebaseConfig);
}

// ======== Invoice Handling ========
document.addEventListener("DOMContentLoaded", () => {
  const invoiceForm = document.getElementById("invoiceForm");
  const invoiceContainer = document.getElementById("invoiceContainer");

  if (invoiceForm) {
    invoiceForm.addEventListener("submit", e => {
      e.preventDefault();
      const invoiceNumber = document.getElementById("invoiceNumber").value;
      const amount = parseFloat(document.getElementById("amount").value);
      if (!invoiceNumber || !amount) {
        alert("Please fill in all fields!");
        return;
      }
      const vat = amount * 0.05;
      const total = amount + vat;
      alert(`Invoice submitted!\nVAT: AED ${vat.toFixed(2)}\nTotal: AED ${total.toFixed(2)}`);
      invoiceForm.reset();
    });
  }

  if (invoiceContainer) {
    const sampleInvoices = [
      { id: "INV-001", amount: 2000, vat: 100, total: 2100 },
      { id: "INV-002", amount: 500, vat: 25, total: 525 },
    ];
    invoiceContainer.innerHTML = sampleInvoices.map(inv => `
      <div style="background:#fff; padding:1rem; margin:1rem 0; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
        <h3>${inv.id}</h3>
        <p>Amount: AED ${inv.amount}</p>
        <p>VAT (5%): AED ${inv.vat}</p>
        <p>Total: AED ${inv.total}</p>
      </div>
    `).join('');
  }
});
