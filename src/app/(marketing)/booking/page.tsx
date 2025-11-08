import BookingClient from "./BookingClient";

export const metadata = {
  title: "宿泊予約 | ご予約",
  description: "部屋の選択から完了まで、日本語UIで簡単にご予約いただけます。",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">宿泊予約</h1>
      <p className="text-muted-foreground mb-8">
        以下のステップに沿ってご予約ください（選択 → 確認 → 予約 → 最終確認 → 完了）。
      </p>
      <BookingClient />
    </main>
  );
}
