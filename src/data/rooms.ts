export type Room = {
  id: string;
  name: string;
  capacity: number;
  description: string;
  pricePerNight: number;
  soldOutDates: string[];
};

export const rooms: Room[] = [
  {
    id: "std",
    name: "スタンダードルーム",
    capacity: 2,
    description: "シンプルで清潔なお部屋。ビジネス・観光に最適です。",
    pricePerNight: 9000,
    soldOutDates: ["2025-11-10", "2025-11-15"],
  },
  {
    id: "dlx",
    name: "デラックスルーム",
    capacity: 3,
    description: "広めのお部屋。ソファ付きでゆったりお過ごしいただけます。",
    pricePerNight: 13000,
    soldOutDates: ["2025-11-12"],
  },
  {
    id: "suite",
    name: "スイート",
    capacity: 4,
    description: "最上階スイート。特別なご滞在におすすめです。",
    pricePerNight: 22000,
    soldOutDates: [],
  },
];

export function isRoomAvailable(room: Room, checkin: string): boolean {
  return !room.soldOutDates.includes(checkin);
}
