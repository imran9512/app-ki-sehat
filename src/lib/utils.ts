// src/lib/utils.ts
export function generateOrderId(): string {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-1);       // 5 (2025)
  const month = "ABCDEFGHIJKL"[now.getMonth()];              // A=Jan, G=Jul…
  const day = now.getDate().toString().padStart(2, "0");     // 19
  // quick daily counter stored in localStorage (resets at midnight)
  const todayKey = `orderCount_${now.toISOString().slice(0, 10)}`;
  const count = (parseInt(localStorage.getItem(todayKey) || "0") + 1).toString().padStart(2, "0");
  localStorage.setItem(todayKey, count);
  return `${year}${month}${day}O${count}`;
}