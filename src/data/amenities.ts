import washing from "@/assets/amenity-washing.jpg";
import hotwater from "@/assets/amenity-hotwater.jpg";
import wifi from "@/assets/amenity-wifi.jpg";
import food from "@/assets/amenity-food.jpg";
import power from "@/assets/amenity-power.jpg";
import cctv from "@/assets/amenity-cctv.jpg";
import security from "@/assets/amenity-security.jpg";
import cleaning from "@/assets/amenity-cleaning.jpg";

export type Amenity = { id: string; name: string; image: string; emoji: string };

export const amenities: Amenity[] = [
  { id: "wifi", name: "Free WiFi", image: wifi, emoji: "📶" },
  { id: "food", name: "Home Food", image: food, emoji: "🍱" },
  { id: "hotwater", name: "24h Hot Water", image: hotwater, emoji: "🚿" },
  { id: "washing", name: "Washing Machine", image: washing, emoji: "🧺" },
  { id: "cleaning", name: "Daily Cleaning", image: cleaning, emoji: "✨" },
  { id: "power", name: "Power Backup", image: power, emoji: "⚡" },
  { id: "cctv", name: "CCTV Cover", image: cctv, emoji: "🎥" },
  { id: "security", name: "24×7 Security", image: security, emoji: "🛡️" },
];
