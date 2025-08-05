import { db } from "../config/firebase.js";

export const testFirebase = async (req, res) => {
  try {
    await db.ref("testConnection").set({ status: "ok", timestamp: Date.now() });
    const snapshot = await db.ref("testConnection").once("value");
    const data = snapshot.val();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
